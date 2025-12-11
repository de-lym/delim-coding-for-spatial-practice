const viewMain = document.getElementById('view-main');
const viewResults = document.getElementById('view-results');
const viewArchive = document.getElementById('view-archive');
const searchInput = document.getElementById('search-input');
const dropZone = document.getElementById('drop-zone');
const words = document.querySelectorAll('.word');
const container = document.querySelector('.container');
const errorModal = document.getElementById('error-modal');
const errorMessage = document.getElementById('error-message');
const errorClose = document.getElementById('error-close');
const backBtn = document.getElementById('btn-back');
const backBtnArchive = document.getElementById('btn-back-archive');
const btnCollection = document.getElementById('btn-collection');
const btnCollectionResults = document.getElementById('btn-collection-results');
const successModal = document.getElementById('success-modal');
const successClose = document.getElementById('success-close');


// ===== DATA =====
const searchData = {
    'VHS TAPE': {
        description: 'VHS (Video Home System) tapes were the dominant format for recording and playing back video content from the 1980s through early 2000s.',
        details: 'Format: Analog video\nResolution: 480i (NTSC)\nCapacity: 120-240 minutes\nRelease: 1976',
        searchTerm: 'VHS tape'
    },
    'PAGER': {
        description: 'Pagers were wireless telecommunications devices that received text messages and alerts.',
        details: 'Type: One-way receiver\nPeak usage: 1990s',
        searchTerm: 'pager'
    },
    'POLAROID': {
        description: 'Polaroid cameras produced instant photographs without requiring darkroom development.',
        details: 'Film type: Instant\nDevelop time: 1-2 minutes\nLaunched: 1948',
        searchTerm: 'Polaroid camera'
    },
    'CASSETTE': {
        description: 'Cassette tapes were the primary medium for music and audio recording from the 1970s to 2000s.',
        details: 'Format: Magnetic tape\nDuration: 30-90 minutes',
        searchTerm: 'cassette tape'
    },
    'BOOMBOX': {
        description: 'Boomboxes were portable stereo systems that played cassettes and radio.',
        details: 'Era: 1980s-1990s',
        searchTerm: 'boombox'
    },
    'NINTENDO64': {
        description: 'Nintendo 64 was a 64-bit gaming console released in 1996.',
        details: 'Release: 1996\nGeneration: 5th',
        searchTerm: 'Nintendo 64'
    },
    'FLOPPY_DISK': {
        description: 'Floppy disks were primary data storage for early personal computers.',
        details: 'Capacity: up to 1.44MB (3.5")',
        searchTerm: 'floppy disk'
    },
    'TAMAGOTCHI': {
        description: 'Tamagotchi was a handheld digital pet from 1996.',
        details: 'Developer: Bandai\nLaunched: 1996',
        searchTerm: 'Tamagotchi'
    },
    'GAMEBOY': {
        description: 'Game Boy was a handheld gaming device launched in 1989.',
        details: 'Display: dot-matrix LCD',
        searchTerm: 'Game Boy'
    },
    'CRT_MONITOR': {
        description: 'CRT monitors used cathode ray tube technology for displays.',
        details: 'Characteristic: bulky, curved glass',
        searchTerm: 'CRT monitor'
    },
    'MINIDISC': {
        description: 'MiniDisc was a magneto-optical disc-based storage format for audio.',
        details: 'Period: 1992-2010s',
        searchTerm: 'MiniDisc'
    },
    'ATARI': {
        description: 'Atari helped launch the home video game industry.',
        details: 'Notable console: Atari 2600',
        searchTerm: 'Atari'
    },
    'WALKMAN': {
        description: 'Walkman was a portable cassette player introduced by Sony.',
        details: 'Launched: 1979',
        searchTerm: 'Walkman'
    },
    'DIAL_UP': {
        description: 'Dial-up was the first method for consumer internet access.',
        details: 'Speed: up to 56k',
        searchTerm: 'dial-up modem'
    },
    'TYPEWRITER': {
        description: 'Typewriters are mechanical devices for printing text on paper.',
        details: 'Mechanism: mechanical keys',
        searchTerm: 'typewriter'
    },
    'FAX_MACHINE': {
        description: 'Fax machines transmitted scanned documents over telephone networks.',
        details: 'Peak use: 1980s-1990s',
        searchTerm: 'fax machine'
    },
    'BETAMAX': {
        description: 'Betamax was a videotape format that competed with VHS.',
        details: 'Introduced: 1975',
        searchTerm: 'Betamax'
    },
    'LASERDISC': {
        description: 'LaserDisc was an early optical disc format for movies.',
        details: 'Period: late 1970s-2000s',
        searchTerm: 'LaserDisc'
    }
};

let draggedWord = null;
let currentSearchTerm = null;
let lastActivityTime = Date.now();
let inactivityTimeout = null;
let deletionInterval = null;
let countdownStartTime = null;
let blinkActive = false;
let blinkInterval = null;

// ===== LOCAL STORAGE =====
const STORAGE_KEY = 'lostTechArchive';
const INACTIVITY_THRESHOLD = 2 * 60 * 1000; // 2 minutes in milliseconds
const DELETION_INTERVAL = 2 * 60 * 1000; // Delete oldest image every 2 minutes
const WARNING_SECONDS = 30; // last 30 seconds warning

function loadArchive() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveToArchive(imageUrl, techName) {
    const archive = loadArchive();
    const item = {
        id: Date.now() + Math.random(),
        imageUrl,
        techName,
        savedDate: new Date().toISOString(),
        timestamp: Date.now()
    };
    archive.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(archive));
}

function removeFromArchive(id) {
    let archive = loadArchive();
    archive = archive.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(archive));
}

function deleteOldestImage() {
    const archive = loadArchive();
    if (archive.length > 0) {
        // Sort by timestamp to find oldest
        archive.sort((a, b) => a.timestamp - b.timestamp);
        const oldestItem = archive[0];
        removeFromArchive(oldestItem.id);
        showInactivityNotification(`⚠ Sorry, you lost a piece of your memory: ${oldestItem.techName}`);
        displayArchive(); // Refresh archive if on that page
    }
}

// ===== TIMER & UI =====
function updateTimer() {
    const timerEl = document.getElementById('timer-display');
    if (!timerEl) return;

    const now = Date.now();
    const inactiveTime = now - lastActivityTime;
    
    // Calculate remaining time until deletion (2 minutes = 120 seconds)
    const remainingMs = Math.max(0, INACTIVITY_THRESHOLD - inactiveTime);
    const totalSeconds = Math.ceil(remainingMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Change color and add blinking for last 30 seconds
    if (totalSeconds > 0 && totalSeconds <= WARNING_SECONDS) {
        timerEl.classList.add('timer-warning');
        if (!blinkActive) {
            timerEl.classList.add('blink-text');
            blinkActive = true;
        }
    } else if (totalSeconds <= 0) {
        timerEl.textContent = '00:00';
        timerEl.classList.add('timer-warning');
        if (blinkActive) {
            timerEl.classList.remove('blink-text');
            blinkActive = false;
        }
    } else {
        timerEl.classList.remove('timer-warning');
        if (blinkActive) {
            timerEl.classList.remove('blink-text');
            blinkActive = false;
        }
    }
}

function resetActivityTimer() {
    lastActivityTime = Date.now();
    countdownStartTime = null;

    // Clear existing timeout
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
    // stop scheduled deletion cycle until inactivity occurs again
    if (blinkInterval) {
        clearInterval(blinkInterval);
        blinkInterval = null;
    }

    // Reset timer display
    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
        timerEl.classList.remove('timer-warning');
        timerEl.classList.remove('blink-text');
        blinkActive = false;
        // show reset time immediately
        const minutes = Math.floor(INACTIVITY_THRESHOLD / 60000);
        const seconds = Math.floor((INACTIVITY_THRESHOLD % 60000) / 1000);
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    }

    // Set new inactivity timer
    inactivityTimeout = setTimeout(() => {
        startDeletionCycle();
    }, INACTIVITY_THRESHOLD);
}

function startDeletionCycle() {
    if (deletionInterval) return; 
    // Delete immediately on first inactivity
    deleteOldestImage();
    // Then delete every 2 minutes
    deletionInterval = setInterval(() => {
        deleteOldestImage();
    }, DELETION_INTERVAL);
}

function showInactivityNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'inactivity-notification';
    notif.textContent = message;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.classList.add('notification-exit');
        setTimeout(() => notif.remove(), 300);
    }, 3500);
}

// ===== MOTION DETECTION =====
function setupMotionDetection() {
    const activityHandler = () => {
        resetActivityTimer();
    };

    document.addEventListener('mousemove', activityHandler);
    document.addEventListener('keydown', activityHandler);
    document.addEventListener('click', activityHandler);
    document.addEventListener('scroll', activityHandler, true);
    document.addEventListener('touchstart', activityHandler);

    // initialize last activity and timer UI
    resetActivityTimer();
    // update timer every 200ms
    setInterval(updateTimer, 200);
}

// ===== NAVIGATION =====
if (btnCollection) {
    btnCollection.addEventListener('click', () => {
        viewMain.classList.remove('active');
        viewArchive.classList.add('active');
        displayArchive();
    });
}

if (btnCollectionResults) {
    btnCollectionResults.addEventListener('click', () => {
        viewResults.classList.remove('active');
        viewArchive.classList.add('active');
        displayArchive();
    });
}

if (backBtn) {
    backBtn.addEventListener('click', () => {
        viewResults.classList.remove('active');
        viewMain.classList.add('active');
        searchInput.value = '';
    });
}

if (backBtnArchive) {
    backBtnArchive.addEventListener('click', () => {
        viewArchive.classList.remove('active');
        viewMain.classList.add('active');
    });
}

// ===== DRAG & DROP =====
if (words && words.length) {
    words.forEach(word => {
        word.addEventListener('dragstart', (e) => {
            draggedWord = word;
            word.classList.add('dragging');
            if (e.dataTransfer) e.dataTransfer.effectAllowed = 'copy';
        });
        word.addEventListener('dragend', () => {
            if (draggedWord) draggedWord.classList.remove('dragging');
            draggedWord = null;
        });
    });
}

if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        dropZone.classList.add('drag-over');
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (!draggedWord) return;
        const wordText = draggedWord.textContent.trim();
        if (searchInput) searchInput.value = wordText;
        setTimeout(() => performSearch(wordText), 350);
    });
}

// ===== TEXT SEARCH =====
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const q = searchInput.value.trim();
            performSearch(q);
        }
    });
}

// ===== IMAGE API: Wikimedia Commons =====
async function fetchImagesFromWikimedia(query, limit = 12) {
    const api = 'https://commons.wikimedia.org/w/api.php' +
        `?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}` +
        `&gsrnamespace=6&gsrlimit=${Math.min(limit * 2, 50)}` +
        `&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*`;
    try {
        const res = await fetch(api);
        if (!res.ok) throw new Error('Wikimedia fetch failed');
        const json = await res.json();
        if (!json.query || !json.query.pages) return [];
        const pages = Object.values(json.query.pages);
        const urls = pages.map(p => {
            const ii = p.imageinfo && p.imageinfo[0];
            return (ii && (ii.thumburl || ii.url)) || null;
        }).filter(Boolean);
        return urls.slice(0, limit);
    } catch (err) {
        console.error('Wikimedia error:', err);
        return [];
    }
}

// ===== SEARCH & RESULTS =====
async function performSearch(query) {
    if (!query) return;
    const normalized = query.toUpperCase();
    if (!searchData[normalized]) {
        showError('Sorry we cannot find relative information in our database.');
        if (searchInput) searchInput.value = ''; // clear on error
        return;
    }

    const data = searchData[normalized];
    currentSearchTerm = normalized;

    const titleEl = document.getElementById('result-title');
    const descEl = document.getElementById('result-description');
    const detailsEl = document.getElementById('result-details');
    const imagesGrid = document.getElementById('images-grid');

    if (titleEl) titleEl.textContent = normalized;
    if (descEl) descEl.textContent = data.description || '';
    if (detailsEl) detailsEl.textContent = data.details || '';
    if (imagesGrid) imagesGrid.innerHTML = '<p class="loading-text">Loading memories...</p>';

    viewMain.classList.remove('active');
    viewArchive.classList.remove('active');
    viewResults.classList.add('active');

    if (searchInput) searchInput.value = ''; // clear after successful search

    const apiQuery = data.searchTerm || normalized;
    const apiImages = await fetchImagesFromWikimedia(apiQuery, 12);

    if (apiImages && apiImages.length > 0) {
        displayImages(apiImages);
    } else {
        if (imagesGrid) imagesGrid.innerHTML = '<p class="loading-text">No memories available</p>';
    }
}

function displayImages(imageUrls) {
    const imagesGrid = document.getElementById('images-grid');
    if (!imagesGrid) return;
    imagesGrid.innerHTML = '';

    const toShow = Array.isArray(imageUrls) ? imageUrls.slice(0, 12) : [];

    toShow.forEach(url => {
        const item = document.createElement('div');
        item.className = 'image-item';

        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Technology image';
        img.loading = 'lazy';

        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = '+ SAVE';
        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            saveToArchive(url, currentSearchTerm);
            showSuccess('✓ A memory saved to archive');
        });

        img.addEventListener('error', () => {
            if (item.parentElement) item.parentElement.removeChild(item);
        });

        item.appendChild(img);
        item.appendChild(saveBtn);
        imagesGrid.appendChild(item);
    });

    if (imagesGrid.children.length === 0) {
        imagesGrid.innerHTML = '<p class="loading-text">No memories available</p>';
    }
}

// ===== ARCHIVE DISPLAY =====
function displayArchive() {
    const archiveContent = document.getElementById('archive-content');
    const archive = loadArchive();

    if (archive.length === 0) {
        archiveContent.innerHTML = '<p class="empty-archive-text">Nothing saved yet. Find your memories from database.</p>';
        return;
    }

    archiveContent.innerHTML = '';

    archive.forEach(item => {
        const archiveItem = document.createElement('div');
        archiveItem.className = 'archive-item';
        const header = document.createElement('div');
        header.className = 'archive-item-header';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'archive-item-title-row';
        const title = document.createElement('h4');
        title.textContent = item.techName;
        const timestamp = document.createElement('span');
        timestamp.className = 'archive-item-timestamp';
        const savedDate = new Date(item.savedDate);
        timestamp.textContent = savedDate.toLocaleString();

        titleDiv.appendChild(title);
        titleDiv.appendChild(timestamp);
        header.appendChild(titleDiv);

        const imageContainer = document.createElement('div');
        imageContainer.className = 'archive-item-image';
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.techName;
        imageContainer.appendChild(img);

        const footer = document.createElement('div');
        footer.className = 'archive-item-footer';
        const removeBtn = document.createElement('button');
        removeBtn.className = 'archive-remove-btn';
        removeBtn.textContent = '× Remove';
        removeBtn.addEventListener('click', () => {
            removeFromArchive(item.id);
            displayArchive();
        });
        footer.appendChild(removeBtn);

        archiveItem.appendChild(header);
        archiveItem.appendChild(imageContainer);
        archiveItem.appendChild(footer);
        archiveContent.appendChild(archiveItem);
    });
}

// ===== MODALS =====
function showError(message) {
    if (errorMessage) errorMessage.textContent = message;
    if (errorModal) errorModal.classList.remove('hidden');
}

function showSuccess(message) {
    const successMessage = document.getElementById('success-message');
    if (successMessage) successMessage.textContent = message;
    if (successModal) successModal.classList.remove('hidden');
}

if (errorClose) errorClose.addEventListener('click', () => { if (errorModal) errorModal.classList.add('hidden'); });
if (successClose) successClose.addEventListener('click', () => { if (successModal) successModal.classList.add('hidden'); });

if (errorModal) {
    errorModal.addEventListener('click', (e) => {
        if (e.target === errorModal) errorModal.classList.add('hidden');
    });
}

if (successModal) {
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) successModal.classList.add('hidden');
    });
}

// ===== WORD POSITIONING =====
function randomizeWordPositions() {
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    const wordWidth = 120;
    const wordHeight = 48;
    const containerMargin = 70;
    const exclusionRadius = 260;
    const minWordDistance = 200;

    const positions = [];
    const wordArray = Array.from(words);

    wordArray.forEach((word, index) => {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 3000;

        while (!placed && attempts < maxAttempts) {
            const x = containerMargin + Math.random() * (containerWidth - 2 * containerMargin);
            const y = containerMargin + Math.random() * (containerHeight - 2 * containerMargin);

            const left = x - wordWidth / 2;
            const right = x + wordWidth / 2;
            const top = y - wordHeight / 2;
            const bottom = y + wordHeight / 2;

            if (left < containerMargin || right > containerWidth - containerMargin || top < containerMargin || bottom > containerHeight - containerMargin) {
                attempts++; continue;
            }

            const distToCenter = Math.hypot(x - centerX, y - centerY);
            if (distToCenter < exclusionRadius) { attempts++; continue; }

            let collides = false;
            for (let pos of positions) {
                if (Math.hypot(x - pos.x, y - pos.y) < minWordDistance) { collides = true; break; }
            }
            if (!collides) {
                positions.push({ x, y });
                word.style.position = 'absolute';
                word.style.left = x + 'px';
                word.style.top = y + 'px';
                word.style.transform = 'translate(-50%,-50%)';
                placed = true;
            }
            attempts++;
        }

        if (!placed) {
            const angle = (index / wordArray.length) * Math.PI * 2;
            const radius = exclusionRadius + 160;
            const fx = centerX + Math.cos(angle) * radius;
            const fy = centerY + Math.sin(angle) * radius;
            const clampedX = Math.max(containerMargin + wordWidth / 2, Math.min(fx, containerWidth - containerMargin - wordWidth / 2));
            const clampedY = Math.max(containerMargin + wordHeight / 2, Math.min(fy, containerHeight - containerMargin - wordHeight / 2));
            word.style.position = 'absolute';
            word.style.left = clampedX + 'px';
            word.style.top = clampedY + 'px';
            word.style.transform = 'translate(-50%,-50%)';
        }
    });
}

// ===== CLEAR ARCHIVE ON PAGE CLOSE =====
window.addEventListener('beforeunload', () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
});
// UNLOAD
window.addEventListener('unload', () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
});

// ===== INITIALIZATION =====
window.addEventListener('load', () => {
    if (viewMain.classList.contains('active')) randomizeWordPositions();
    setupMotionDetection();
});

window.addEventListener('resize', randomizeWordPositions);
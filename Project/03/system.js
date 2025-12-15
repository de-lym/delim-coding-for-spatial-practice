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
        images: [
            'images/vhs/vhs_1.jpg',
            'images/vhs/vhs_2.jpg',
            'images/vhs/vhs_3.jpg',
            'images/vhs/vhs_4.jpeg',
            'images/vhs/vhs_5.jpg',
            'images/vhs/vhs_6.jpg',
            'images/vhs/vhs_7.jpg',
            'images/vhs/vhs_8.png',
            'images/vhs/vhs_9.jpg',
            'images/vhs/vhs_10.jpg',
            'images/vhs/vhs_11.jpg',
            'images/vhs/vhs_12.png',
            'images/vhs/vhs_13.jpg',
            'images/vhs/vhs_14.jpg',
            'images/vhs/vhs_15.jpeg',
            'images/vhs/vhs_16.jpg',
            'images/vhs/vhs_17.jpg',
            'images/vhs/vhs_18.jpg',
            'images/vhs/vhs_19.jpg',
            'images/vhs/vhs_20.jpg',
            'images/vhs/vhs_21.jpg',
        ]
    },
    'PAGER': {
        description: 'Pagers were wireless telecommunications devices that received text messages and alerts.',
        details: 'Type: One-way receiver\nPeak usage: 1990s',
        images: [
            'images/pager/pager_1.jpg',
            'images/pager/pager_2.jpg',
            'images/pager/pager_3.jpg',
            'images/pager/pager_4.jpeg',
            'images/pager/pager_5.jpg',
            'images/pager/pager_6.png',
            'images/pager/pager_7.jpg',
            'images/pager/pager_8.jpg',
            'images/pager/pager_9.jpg',
            'images/pager/pager_10.jpeg',
            'images/pager/pager_11.png',
            'images/pager/pager_12.jpg',
            'images/pager/pager_13.png',
            'images/pager/pager_14.jpg',
            'images/pager/pager_15.jpg'
        ]
    },
    'POLAROID': {
        description: 'Polaroid cameras produced instant photographs without requiring darkroom development.',
        details: 'Film type: Instant\nDevelop time: 1-2 minutes\nLaunched: 1948',
        images: [
            'images/polaroid/polaroid_1.jpg',
            'images/polaroid/polaroid_2.jpeg',
            'images/polaroid/polaroid_3.jpg',
            'images/polaroid/polaroid_4.jpg',
            'images/polaroid/polaroid_5.jpeg',
            'images/polaroid/polaroid_6.jpg',
            'images/polaroid/polaroid_7.jpg',
            'images/polaroid/polaroid_8.jpg',
            'images/polaroid/polaroid_9.jpeg',
            'images/polaroid/polaroid_10.jpg',
            'images/polaroid/polaroid_11.jpg',
            'images/polaroid/polaroid_12.jpg',
            'images/polaroid/polaroid_13.jpg',
            'images/polaroid/polaroid_14.jpeg',
            'images/polaroid/polaroid_15.jpg',
            'images/polaroid/polaroid_16.jpg',
            'images/polaroid/polaroid_17.jpg',
            'images/polaroid/polaroid_18.jpg',
            'images/polaroid/polaroid_19.jpg',
        ]
    },
    'CASSETTE': {
        description: 'Cassette tapes were the primary medium for music and audio recording from the 1970s to 2000s.',
        details: 'Format: Magnetic tape\nDuration: 30-90 minutes',
        images: [
            'images/cassette/cassette_1.jpg',
            'images/cassette/cassette_2.jpg',
            'images/cassette/cassette_3.jpeg',
            'images/cassette/cassette_4.jpg',
            'images/cassette/cassette_5.png',
            'images/cassette/cassette_6.jpg',
            'images/cassette/cassette_7.jpg',
            'images/cassette/cassette_8.jpg',
            'images/cassette/cassette_9.png',
            'images/cassette/cassette_10.jpg',
            'images/cassette/cassette_11.jpg',
            'images/cassette/cassette_12.jpg',
            'images/cassette/cassette_13.jpg',
            'images/cassette/cassette_14.jpg',
            'images/cassette/cassette_15.jpg',
            'images/cassette/cassette_16.jpg',
            'images/cassette/cassette_17.jpeg',
            'images/cassette/cassette_18.jpg',
            'images/cassette/cassette_19.jpg'
        ]
    },
    'BOOMBOX': {
        description: 'Boomboxes were portable stereo systems that played cassettes and radio.',
        details: 'Era: 1980s-1990s',
        images: [
            'images/boombox/boombox_1.jpg',
            'images/boombox/boombox_2.jpg',
            'images/boombox/boombox_3.jpg',
            'images/boombox/boombox_4.jpg',
            'images/boombox/boombox_5.jpg',
            'images/boombox/boombox_6.jpg',
            'images/boombox/boombox_7.jpg',
            'images/boombox/boombox_8.jpg',
            'images/boombox/boombox_9.jpg',
            'images/boombox/boombox_10.jpg',
            'images/boombox/boombox_11.jpg',
            'images/boombox/boombox_12.jpeg',
            'images/boombox/boombox_13.jpg',
            'images/boombox/boombox_14.jpeg',
            'images/boombox/boombox_15.jpg',
            'images/boombox/boombox_16.jpg',
            'images/boombox/boombox_17.jpg',
            'images/boombox/boombox_18.jpg',
            'images/boombox/boombox_19.jpg',
            'images/boombox/boombox_20.png',
            'images/boombox/boombox_21.png',
            'images/boombox/boombox_22.png'
        ]
    },
    'NINTENDO64': {
        description: 'Nintendo 64 was a 64-bit gaming console released in 1996.',
        details: 'Release: 1996\nGeneration: 5th',
        images: [
            'images/nintendo64/nintendo64_1.jpg',
            'images/nintendo64/nintendo64_2.jpg',
            'images/nintendo64/nintendo64_3.jpg',
            'images/nintendo64/nintendo64_4.jpg',
            'images/nintendo64/nintendo64_5.jpg',
            'images/nintendo64/nintendo64_6.jpg',
            'images/nintendo64/nintendo64_7.png',
            'images/nintendo64/nintendo64_8.jpg',
            'images/nintendo64/nintendo64_9.jpg',
            'images/nintendo64/nintendo64_10.png',
            'images/nintendo64/nintendo64_11.jpg',
            'images/nintendo64/nintendo64_12.jpg',
            'images/nintendo64/nintendo64_13.jpeg',
            'images/nintendo64/nintendo64_14.jpeg',
            'images/nintendo64/nintendo64_15.jpg',
            'images/nintendo64/nintendo64_16.jpg',
            'images/nintendo64/nintendo64_17.jpg',
            'images/nintendo64/nintendo64_18.jpg',
            'images/nintendo64/nintendo64_19.jpg',
            'images/nintendo64/nintendo64_20.jpg',
            'images/nintendo64/nintendo64_21.png',
            'images/nintendo64/nintendo64_22.jpg',
            'images/nintendo64/nintendo64_23.jpg',
        ]
    },
    'FLOPPY_DISK': {
        description: 'Floppy disks were primary data storage for early personal computers.',
        details: 'Capacity: up to 1.44MB (3.5")',
        images: [
            'images/floppydisk/floppy_disk_1.jpg',
            'images/floppydisk/floppy_disk_2.jpg',
            'images/floppydisk/floppy_disk_3.jpg',
            'images/floppydisk/floppy_disk_4.jpeg',
            'images/floppydisk/floppy_disk_5.jpg',
            'images/floppydisk/floppy_disk_6.jpeg',
            'images/floppydisk/floppy_disk_7.jpg',
            'images/floppydisk/floppy_disk_8.jpg',
            'images/floppydisk/floppy_disk_9.jpg',
            'images/floppydisk/floppy_disk_10.jpg',
            'images/floppydisk/floppy_disk_11.jpg',
            'images/floppydisk/floppy_disk_12.jpg',
            'images/floppydisk/floppy_disk_13.jpg',
            'images/floppydisk/floppy_disk_14.jpg',
            'images/floppydisk/floppy_disk_15.jpg',
            'images/floppydisk/floppy_disk_16.jpg',
            'images/floppydisk/floppy_disk_17.jpg',
            'images/floppydisk/floppy_disk_18.jpg',
            'images/floppydisk/floppy_disk_19.jpg',
            'images/floppydisk/floppy_disk_20.jpg'
        ]
    },
    'GAMEBOY': {
        description: 'Game Boy was a handheld gaming device launched in 1989.',
        details: 'Display: dot-matrix LCD',
        images: [
            'images/gameboy/gameboy_1.jpg',
            'images/gameboy/gameboy_2.jpg',
            'images/gameboy/gameboy_3.jpg',
            'images/gameboy/gameboy_4.jpg',
            'images/gameboy/gameboy_5.jpg',
            'images/gameboy/gameboy_6.jpeg',
            'images/gameboy/gameboy_7.jpg',
            'images/gameboy/gameboy_8.jpg',
            'images/gameboy/gameboy_9.jpg',
            'images/gameboy/gameboy_10.jpg',
            'images/gameboy/gameboy_11.jpg',
            'images/gameboy/gameboy_12.jpg',
            'images/gameboy/gameboy_13.jpg',
            'images/gameboy/gameboy_14.jpeg',
            'images/gameboy/gameboy_15.png',
            'images/gameboy/gameboy_16.jpg',
            'images/gameboy/gameboy_17.jpg',
            'images/gameboy/gameboy_18.jpg',
            'images/gameboy/gameboy_19.jpg',
            'images/gameboy/gameboy_20.jpg',
            'images/gameboy/gameboy_21.jpg',
            'images/gameboy/gameboy_22.jpg',
            'images/gameboy/gameboy_23.jpg',
            'images/gameboy/gameboy_24.jpg',
            'images/gameboy/gameboy_25.jpg',
            'images/gameboy/gameboy_26.jpeg',
            'images/gameboy/gameboy_27.jpg',
            'images/gameboy/gameboy_28.jpg',
            'images/gameboy/gameboy_29.jpg',
            'images/gameboy/gameboy_30.png',
            'images/gameboy/gameboy_31.png',
            'images/gameboy/gameboy_32.jpg'
        ]
    },
    'CRT_MONITOR': {
        description: 'CRT monitors used cathode ray tube technology for displays.',
        details: 'Characteristic: bulky, curved glass',
        images: [
            'images/crt_monitor/crt_monitor_1.jpeg',
            'images/crt_monitor/crt_monitor_2.jpg',
            'images/crt_monitor/crt_monitor_3.jpg',
            'images/crt_monitor/crt_monitor_4.jpg',
            'images/crt_monitor/crt_monitor_5.jpg',
            'images/crt_monitor/crt_monitor_6.jpg',
            'images/crt_monitor/crt_monitor_7.jpg',
            'images/crt_monitor/crt_monitor_8.png',
            'images/crt_monitor/crt_monitor_9.jpg',
            'images/crt_monitor/crt_monitor_10.jpg',
            'images/crt_monitor/crt_monitor_11.jpg',
            'images/crt_monitor/crt_monitor_12.jpg',
            'images/crt_monitor/crt_monitor_13.jpg',
            'images/crt_monitor/crt_monitor_14.jpg',
            'images/crt_monitor/crt_monitor_15.jpeg',
            'images/crt_monitor/crt_monitor_16.jpeg',
            'images/crt_monitor/crt_monitor_17.jpg',
            'images/crt_monitor/crt_monitor_18.jpg',
            'images/crt_monitor/crt_monitor_19.jpg',
            'images/crt_monitor/crt_monitor_20.jpg',
            'images/crt_monitor/crt_monitor_21.jpg',
            'images/crt_monitor/crt_monitor_22.jpg',
            'images/crt_monitor/crt_monitor_23.jpg',
            'images/crt_monitor/crt_monitor_24.jpg',
            'images/crt_monitor/crt_monitor_25.jpeg',
            'images/crt_monitor/crt_monitor_26.jpg',
            'images/crt_monitor/crt_monitor_27.jpeg'
        ]
    },
    'MINIDISC': {
        description: 'MiniDisc was a magneto-optical disc-based storage format for audio.',
        details: 'Period: 1992-2010s',
        images: [
            'images/minidisc/minidisc_1.jpg',
            'images/minidisc/minidisc_2.jpg',
            'images/minidisc/minidisc_3.jpg',
            'images/minidisc/minidisc_4.png',
            'images/minidisc/minidisc_5.jpg',
            'images/minidisc/minidisc_6.jpg',
            'images/minidisc/minidisc_7.jpg',
            'images/minidisc/minidisc_8.jpg',
            'images/minidisc/minidisc_9.gif',
            'images/minidisc/minidisc_10.jpeg',
            'images/minidisc/minidisc_11.jpg',
            'images/minidisc/minidisc_12.jpeg',
            'images/minidisc/minidisc_13.jpg',
            'images/minidisc/minidisc_14.jpg',
            'images/minidisc/minidisc_15.jpg',
            'images/minidisc/minidisc_16.jpg',
            'images/minidisc/minidisc_17.jpg',
            'images/minidisc/minidisc_18.png',
            'images/minidisc/minidisc_19.png',
            'images/minidisc/minidisc_20.jpg',
            'images/minidisc/minidisc_21.jpg',
            'images/minidisc/minidisc_22.jpg',
            'images/minidisc/minidisc_23.jpg',
            'images/minidisc/minidisc_24.jpg',
            'images/minidisc/minidisc_25.jpg',
            'images/minidisc/minidisc_26.jpg',
            'images/minidisc/minidisc_27.jpg'
        ]
    },
    'ATARI': {
        description: 'Atari helped launch the home video game industry.',
        details: 'Notable console: Atari 2600',
        images: [
            'images/atari/atari_1.jpg',
            'images/atari/atari_2.jpg',
            'images/atari/atari_3.jpg',
            'images/atari/atari_4.jpeg',
            'images/atari/atari_5.jpg',
            'images/atari/atari_6.jpg',
            'images/atari/atari_7.jpg',
            'images/atari/atari_8.jpg',
            'images/atari/atari_9.jpg',
            'images/atari/atari_10.jpg',
            'images/atari/atari_11.jpeg',
            'images/atari/atari_12.png',
            'images/atari/atari_13.jpg',
            'images/atari/atari_14.jpg',
            'images/atari/atari_15.jpg',
            'images/atari/atari_16.jpg',
            'images/atari/atari_17.jpeg',
            'images/atari/atari_18.jpeg',
            'images/atari/atari_19.jpg',
            'images/atari/atari_20.jpeg',
            'images/atari/atari_21.jpg',
            'images/atari/atari_22.jpg',
            'images/atari/atari_23.jpg',
            'images/atari/atari_24.png',
            'images/atari/atari_25.jpg',
            'images/atari/atari_26.jpg'
        ]
    },
    'WALKMAN': {
        description: 'Walkman was a portable cassette player introduced by Sony.',
        details: 'Launched: 1979',
        images: [
            'images/walkman/walkman_1.jpg',
            'images/walkman/walkman_2.jpg',
            'images/walkman/walkman_3.jpeg',
            'images/walkman/walkman_4.jpg',
            'images/walkman/walkman_5.jpg',
            'images/walkman/walkman_6.png',
            'images/walkman/walkman_7.jpg',
            'images/walkman/walkman_8.jpeg',
            'images/walkman/walkman_9.jpeg',
            'images/walkman/walkman_10.jpeg',
            'images/walkman/walkman_11.jpg',
            'images/walkman/walkman_12.jpg',
            'images/walkman/walkman_13.jpg',
            'images/walkman/walkman_14.jpg',
            'images/walkman/walkman_15.jpeg',
            'images/walkman/walkman_16.jpg',
            'images/walkman/walkman_17.jpg',
            'images/walkman/walkman_18.jpg',
            'images/walkman/walkman_19.jpg',
            'images/walkman/walkman_20.jpg',
            'images/walkman/walkman_21.jpg',
            'images/walkman/walkman_22.jpg',
            'images/walkman/walkman_23.jpg',
            'images/walkman/walkman_24.jpeg',
            'images/walkman/walkman_25.jpg'
        ]
    },
    'DIAL_UP': {
        description: 'Dial-up was the first method for consumer internet access.',
        details: 'Speed: up to 56k',
        images: [
            'images/dial_up/dial_up_1.jpg',
            'images/dial_up/dial_up_2.png',
            'images/dial_up/dial_up_3.jpg',
            'images/dial_up/dial_up_4.jpg',
            'images/dial_up/dial_up_5.png',
            'images/dial_up/dial_up_6.jpg',
            'images/dial_up/dial_up_7.png',
            'images/dial_up/dial_up_8.jpg',
            'images/dial_up/dial_up_9.png',
            'images/dial_up/dial_up_10.jpg',
            'images/dial_up/dial_up_11.png',
            'images/dial_up/dial_up_12.jpg',
            'images/dial_up/dial_up_13.jpg',
            'images/dial_up/dial_up_14.png',
            'images/dial_up/dial_up_15.jpg',
            'images/dial_up/dial_up_16.jpg',
            'images/dial_up/dial_up_17.gif',
            'images/dial_up/dial_up_18.jpg',
            'images/dial_up/dial_up_19.jpg',
            'images/dial_up/dial_up_20.jpg',
            'images/dial_up/dial_up_21.jpeg',
            'images/dial_up/dial_up_22.gif',
            'images/dial_up/dial_up_23.gif',
            'images/dial_up/dial_up_24.jpg',
            'images/dial_up/dial_up_25.png'
        ]
    },
    'TYPEWRITER': {
        description: 'Typewriters are mechanical devices for printing text on paper.',
        details: 'Mechanism: mechanical keys',
        images: [
            'images/typewriter/typewriter_1.jpg',
            'images/typewriter/typewriter_2.jpg',
            'images/typewriter/typewriter_3.jpg',
            'images/typewriter/typewriter_4.jpg',
            'images/typewriter/typewriter_5.jpg',
            'images/typewriter/typewriter_6.jpg',
            'images/typewriter/typewriter_7.jpg',
            'images/typewriter/typewriter_8.jpg',
            'images/typewriter/typewriter_9.jpeg',
            'images/typewriter/typewriter_10.png',
            'images/typewriter/typewriter_11.jpg',
            'images/typewriter/typewriter_12.png',
            'images/typewriter/typewriter_13.jpg',
            'images/typewriter/typewriter_14.jpg',
            'images/typewriter/typewriter_15.jpg',
            'images/typewriter/typewriter_16.png',
            'images/typewriter/typewriter_17.jpg',
            'images/typewriter/typewriter_18.jpg',
            'images/typewriter/typewriter_19.jpg',
            'images/typewriter/typewriter_20.jpg',
            'images/typewriter/typewriter_21.jpg',
            'images/typewriter/typewriter_22.jpg',
            'images/typewriter/typewriter_23.jpg',
            'images/typewriter/typewriter_24.jpg',
            'images/typewriter/typewriter_25.jpg',
            'images/typewriter/typewriter_26.jpg',
            'images/typewriter/typewriter_27.jpeg',
            'images/typewriter/typewriter_28.jpg',
            'images/typewriter/typewriter_29.jpg',
            'images/typewriter/typewriter_30.jpg',
            'images/typewriter/typewriter_31.png',
            'images/typewriter/typewriter_32.jpg'          
        ]
    },
    'FAX_MACHINE': {
        description: 'Fax machines transmitted scanned documents over telephone networks.',
        details: 'Peak use: 1980s-1990s',
        images: [
            'images/fax_machine/fax_machine_1.jpg',
            'images/fax_machine/fax_machine_2.png',
            'images/fax_machine/fax_machine_3.jpg',
            'images/fax_machine/fax_machine_4.jpg',
            'images/fax_machine/fax_machine_5.jpg',
            'images/fax_machine/fax_machine_6.jpeg',
            'images/fax_machine/fax_machine_7.jpg',
            'images/fax_machine/fax_machine_8.jpg',
            'images/fax_machine/fax_machine_9.jpeg',
            'images/fax_machine/fax_machine_10.jpg',
            'images/fax_machine/fax_machine_11.jpg',
            'images/fax_machine/fax_machine_12.png',
            'images/fax_machine/fax_machine_13.jpg',
            'images/fax_machine/fax_machine_14.jpg',
            'images/fax_machine/fax_machine_15.jpg',
            'images/fax_machine/fax_machine_16.png',
            'images/fax_machine/fax_machine_17.png',
            'images/fax_machine/fax_machine_18.jpg',
            'images/fax_machine/fax_machine_19.jpg',
            'images/fax_machine/fax_machine_20.jpg',
            'images/fax_machine/fax_machine_21.jpg',
            'images/fax_machine/fax_machine_22.jpg',
            'images/fax_machine/fax_machine_23.jpg',
            'images/fax_machine/fax_machine_24.jpg'
        ]
    },
    'BETAMAX': {
        description: 'Betamax was a videotape format that competed with VHS.',
        details: 'Introduced: 1975',
        images: [
            'images/betamax/betamax_1.jpg',
            'images/betamax/betamax_2.jpg',
            'images/betamax/betamax_3.jpg',
            'images/betamax/betamax_4.jpeg',
            'images/betamax/betamax_5.jpg',
            'images/betamax/betamax_6.jpg',
            'images/betamax/betamax_7.png',
            'images/betamax/betamax_8.jpeg',
            'images/betamax/betamax_9.jpg',
            'images/betamax/betamax_10.jpg',
            'images/betamax/betamax_11.jpg',
            'images/betamax/betamax_12.jpeg',
            'images/betamax/betamax_13.jpeg',
            'images/betamax/betamax_14.jpeg',
            'images/betamax/betamax_15.jpeg',
            'images/betamax/betamax_16.jpg',
            'images/betamax/betamax_17.jpg',
            'images/betamax/betamax_18.jpg',
            'images/betamax/betamax_19.jpg',
            'images/betamax/betamax_20.jpeg',
            'images/betamax/betamax_21.jpg'
        ]
    },
    'LASERDISC': {
        description: 'LaserDisc was an early optical disc format for movies.',
        details: 'Period: late 1970s-2000s',
        images: [
            'images/laserdisc/laserdisc_1.jpg',
            'images/laserdisc/laserdisc_2.jpg',
            'images/laserdisc/laserdisc_3.jpg',
            'images/laserdisc/laserdisc_4.jpg',
            'images/laserdisc/laserdisc_5.jpeg',
            'images/laserdisc/laserdisc_6.jpeg',
            'images/laserdisc/laserdisc_7.jpg',
            'images/laserdisc/laserdisc_8.jpg',
            'images/laserdisc/laserdisc_9.jpeg',
            'images/laserdisc/laserdisc_10.jpg',
            'images/laserdisc/laserdisc_11.jpeg',
            'images/laserdisc/laserdisc_12.jpg',
            'images/laserdisc/laserdisc_13.jpg',
            'images/laserdisc/laserdisc_14.jpg',
            'images/laserdisc/laserdisc_15.jpg',
            'images/laserdisc/laserdisc_16.jpg',
            'images/laserdisc/laserdisc_17.jpg',
            'images/laserdisc/laserdisc_18.jpg',
            'images/laserdisc/laserdisc_19.jpg',
            'images/laserdisc/laserdisc_20.jpg',
            'images/laserdisc/laserdisc_21.png',
            'images/laserdisc/laserdisc_22.jpg',
            'images/laserdisc/laserdisc_23.jpg'
        ]
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

// ===== IMAGE SEARCH: Local Database =====
function getRandomImages(images, count = 12) {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ===== SEARCH & RESULTS =====
function performSearch(query) {
    if (!query) return;

    const normalized = query.trim().toUpperCase();

    if (!searchData[normalized]) {
        showError('Sorry we cannot find relative information in our database.');
        if (searchInput) searchInput.value = '';
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

    if (searchInput) searchInput.value = '';

    // 🔑 LOCAL IMAGE LOOKUP (no API)
    const imagesForTag = data.images || [];

    const selectedImages = getRandomImages(imagesForTag, 12);

    if (selectedImages.length > 0) {
        displayImages(selectedImages);
    } else {
        if (imagesGrid) {
            imagesGrid.innerHTML = '<p class="loading-text">No memories available</p>';
        }
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
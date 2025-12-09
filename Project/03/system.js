const enterBtn = document.getElementById('enter-btn');
const viewEntrance = document.getElementById('view-entrance');
const viewMain = document.getElementById('view-main');
const viewResults = document.getElementById('view-results');
const searchInput = document.getElementById('search-input');
const dropZone = document.getElementById('drop-zone');
const wordsContainer = document.getElementById('words-container');
const words = document.querySelectorAll('.word');
const container = document.querySelector('.container');
const errorModal = document.getElementById('error-modal');
const errorMessage = document.getElementById('error-message');
const errorClose = document.getElementById('error-close');
const backBtn = document.getElementById('btn-back');
const btnCollection = document.getElementById('btn-collection');

const searchData = {
    'VHS TAPE': {
        description: 'VHS (Video Home System) tapes were the dominant format for recording and playing back video content from the 1980s through early 2000s. They revolutionized how people consumed movies and recorded personal moments at home.',
        details: 'Format: Analog video\nResolution: 480i (NTSC)\nCapacity: 120-240 minutes\nRelease: 1976',
        images: [
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1595432707802-6b2626ef1c91?w=300',
            'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1494787899049-e36ff8d13a9e?w=300',
            'https://images.unsplash.com/photo-1595432707802-6b2626ef1c91?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1613323593607-ee5899a681a1?w=300'
        ]
    },
    'PAGER': {
        description: 'Pagers were wireless telecommunications devices that received text messages and alerts. They were essential for professionals, emergency responders, and businesses before the mobile phone era.',
        details: 'Type: One-way receiver\nRange: Wide coverage area\nBattery: 24-48 hours\nPeak usage: 1990s',
        images: [
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300',
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300'
        ]
    },
    'POLAROID': {
        description: 'Polaroid cameras produced instant photographs without requiring darkroom development. They became iconic for creating physical memories on the spot.',
        details: 'Film type: Instant\nDevelop time: 1-2 minutes\nFormat: Square prints\nLaunched: 1948',
        images: [
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300'
        ]
    },
    'CASSETTE': {
        description: 'Cassette tapes were the primary medium for music and audio recording from the 1970s to 2000s. They offered portability and ease of use for both music listening and recording.',
        details: 'Format: Magnetic tape\nDuration: 30-90 minutes\nAudio quality: Analog\nStandard: Compact cassette',
        images: [
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300'
        ]
    },
    'BOOMBOX': {
        description: 'Boomboxes were portable stereo systems that played cassettes, radio, and later CDs. They became cultural icons for street music and hip-hop culture.',
        details: 'Audio source: Multi-format\nPower: Battery/AC adapter\nFeature: Portable stereo\nEra: 1980s-1990s',
        images: [
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300',
            'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300',
            'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300',
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300',
            'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300',
            'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300'
        ]
    },
    'NINTENDO64': {
        description: 'The Nintendo 64 was a revolutionary 64-bit gaming console that brought 3D gaming into homes. It featured iconic games and introduced analog stick controls.',
        details: 'Generation: 5th\nProcessor: 64-bit MIPS\nGraphics: 3D accelerated\nRelease: 1996',
        images: [
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300'
        ]
    },
    'FLOPPY_DISK': {
        description: 'Floppy disks were the primary data storage medium for personal computers from the 1970s to 2000s. Despite their small capacity, they were indispensable for file transfer.',
        details: 'Sizes: 8", 5.25", 3.5"\nCapacity: 1.44 MB (3.5")\nFormat: Magnetic\nRetired: 2010s',
        images: [
            'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300',
            'https://images.unsplash.com/photo-1615344434562-c0eb0d16a25f?w=300',
            'https://images.unsplash.com/photo-1620225814913-c50bf820ce3d?w=300',
            'https://images.unsplash.com/photo-1590080876-7b7b42f25c9d?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300'
        ]
    },
    'TAMAGOTCHI': {
        description: 'Tamagotchi was a digital pet toy that required constant care and attention. It became a worldwide phenomenon and the predecessor to modern virtual pet games.',
        details: 'Type: Virtual pet\nDeveloper: Bandai\nScreen: LCD\nLaunched: 1996',
        images: [
            'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300'
        ]
    },
    'GAMEBOY': {
        description: 'The Game Boy was a handheld gaming device that dominated the portable gaming market. Its durability and game library made it a gaming legend.',
        details: 'Display: Dot-matrix LCD\nResolution: 160x144\nGames: Cartridge-based\nRelease: 1989',
        images: [
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300'
        ]
    },
    'CRT_MONITOR': {
        description: 'CRT (Cathode Ray Tube) monitors were the standard display technology for decades. They produced vibrant colors and were essential for computing and gaming.',
        details: 'Type: Electron beam\nResolution: Up to 1600x1200\nRefresh rate: 60-120 Hz\nRetired: 2010s',
        images: [
            'https://images.unsplash.com/photo-1617639547912-48416dbb4e3d?w=300',
            'https://images.unsplash.com/photo-1591290619039-66bbe77f0d3f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300'
        ]
    },
    'MINIDISC': {
        description: 'MiniDisc was a digital audio format that offered better sound quality and storage than cassettes. It was popular in Japan and among audiophiles.',
        details: 'Format: Digital audio\nCapacity: 80-250 MB\nCompression: ATRAC\nPeriod: 1992-2010s',
        images: [
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300'
        ]
    },
    'ATARI': {
        description: 'Atari was a pioneering video game company that launched the home video game industry with the Atari 2600 console.',
        details: 'Famous games: Pong, Space Invaders\nGeneration: 2nd\nConsole: Atari 2600\nFounded: 1972',
        images: [
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300'
        ]
    },
    'WALKMAN': {
        description: 'The Walkman was a portable cassette player that revolutionized personal music listening. It defined mobile entertainment for a generation.',
        details: 'Type: Portable audio\nMedia: Cassette tape\nBattery: AA/AAA batteries\nLaunched: 1979',
        images: [
            'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300',
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300',
            'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300'
        ]
    },
    'DIAL_UP': {
        description: 'Dial-up was the first method for accessing the Internet at home. The characteristic modem sound became iconic for an era of online exploration.',
        details: 'Speed: 56k maximum\nConnection: Telephone line\nSound: Handshake noise\nEra: 1990s-2000s',
        images: [
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300'
        ]
    },
    'TYPEWRITER': {
        description: 'Typewriters were mechanical writing devices used for decades before computers. They remain symbols of writing and journalism.',
        details: 'Mechanism: Mechanical keys\nOutput: Paper documents\nVariations: Manual, electric\nPeriod: 1870s-1980s',
        images: [
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300',
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300'
        ]
    },
    'FAX_MACHINE': {
        description: 'Fax machines transmitted documents electronically over telephone lines. They were essential for business communication before email became widespread.',
        details: 'Transmission: Analog signals\nResolution: 200-400 dpi\nSpeed: 30 seconds per page\nPeak use: 1980s-1990s',
        images: [
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300'
        ]
    },
    'BETAMAX': {
        description: 'Betamax was a video format that competed with VHS. Despite superior quality, it lost the format war due to licensing and availability issues.',
        details: 'Format: Analog video\nQuality: Superior to VHS\nCapacity: 60-300 minutes\nPeriod: 1975-2002',
        images: [
            'https://images.unsplash.com/photo-1595432707802-6b2626ef1c91?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300'
        ]
    },
    'LASERDISC': {
        description: 'LaserDisc was a high-quality optical media format for movies and games. It offered superior picture quality and became a collector\'s item.',
        details: 'Format: Optical disc\nResolution: 240p interlaced\nCapacity: 2-4 GB per side\nPeriod: 1978-2009',
        images: [
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300',
            'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300'
        ]
    }
};

let draggedWord = null;

// ===== VIEW SWITCHING =====
enterBtn.addEventListener('click', () => {
    viewEntrance.classList.remove('active');
    viewMain.classList.add('active');
    btnCollection.style.display = 'flex'; // Show btn-collection
    setTimeout(() => randomizeWordPositions(), 100);
});

backBtn.addEventListener('click', () => {
    viewResults.classList.remove('active');
    viewMain.classList.add('active');
    btnCollection.style.display = 'flex'; // Ensure btn-collection is visible
    searchInput.value = '';
});

// Hide btn-collection on entrance, show on other pages
window.addEventListener('load', () => {
    btnCollection.style.display = 'none'; // Hidden by default (entrance page)
});

// ===== DRAG AND DROP =====
words.forEach(word => {
    word.addEventListener('dragstart', (e) => {
        draggedWord = word;
        word.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'copy';
    });

    word.addEventListener('dragend', () => {
        word.classList.remove('dragging');
        draggedWord = null;
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');

    if (draggedWord) {
        const wordText = draggedWord.textContent.trim();
        searchInput.value = wordText;
        
        // Add 2-second delay for animation observation
        setTimeout(() => {
            performSearch(wordText);
        }, 2000);
    }
});

// ===== TEXT SEARCH =====
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    // Don't auto-search on input
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        performSearch(query);
    }
});

function performSearch(query) {
    const normalizedQuery = query.toUpperCase();
    
    // Check if search term exists in database
    if (searchData[normalizedQuery]) {
        displayResults(normalizedQuery);
    } else {
        showError('Sorry we cannot find relative information in our database.');
    }
}

function displayResults(searchTerm) {
    const data = searchData[searchTerm];
    
    // Update results page
    document.getElementById('result-title').textContent = searchTerm;
    document.getElementById('result-description').textContent = data.description;
    document.getElementById('result-details').textContent = data.details;
    
    // Display images from local array
    displayImages(data.images);
    
    // Switch views
    viewMain.classList.remove('active');
    viewResults.classList.add('active');
    btnCollection.style.display = 'flex'; // Show btn-collection on results page
}

function displayImages(imageUrls) {
    const imagesGrid = document.getElementById('images-grid');
    imagesGrid.innerHTML = '';
    
    imageUrls.forEach(imageUrl => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img 
                src="${imageUrl}" 
                alt="Technology image"
                crossorigin="anonymous"
            >
        `;
        imagesGrid.appendChild(imageItem);
    });
}

function showError(message) {
    errorMessage.textContent = message;
    errorModal.classList.remove('hidden');
}

errorClose.addEventListener('click', () => {
    errorModal.classList.add('hidden');
});

errorModal.addEventListener('click', (e) => {
    if (e.target === errorModal) {
        errorModal.classList.add('hidden');
    }
});

// ===== RANDOM WORD POSITIONING =====
function randomizeWordPositions() {
    if (!container) return;
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    // Word dimensions
    const wordWidth = 120;
    const wordHeight = 48;
    const containerMargin = 70;
    
    // Search bar exclusion zone
    const exclusionRadius = 260;
    
    // Minimum distance between word centers
    const minWordDistance = 200;
    
    const positions = [];
    const wordArray = Array.from(words);

    wordArray.forEach((word, index) => {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 3000;

        while (!placed && attempts < maxAttempts) {
            // Random positioning
            const x = containerMargin + Math.random() * (containerWidth - 2 * containerMargin);
            const y = containerMargin + Math.random() * (containerHeight - 2 * containerMargin);

            // ===== CHECK CONTAINER BOUNDARIES =====
            const wordLeftEdge = x - wordWidth / 2;
            const wordRightEdge = x + wordWidth / 2;
            const wordTopEdge = y - wordHeight / 2;
            const wordBottomEdge = y + wordHeight / 2;

            if (wordLeftEdge < containerMargin || 
                wordRightEdge > containerWidth - containerMargin ||
                wordTopEdge < containerMargin || 
                wordBottomEdge > containerHeight - containerMargin) {
                attempts++;
                continue;
            }

            // ===== CHECK SEARCH BAR EXCLUSION ZONE =====
            const distToCenter = Math.sqrt(
                Math.pow(x - centerX, 2) + 
                Math.pow(y - centerY, 2)
            );
            
            if (distToCenter < exclusionRadius) {
                attempts++;
                continue;
            }

            // ===== CHECK WORD-TO-WORD COLLISION =====
            let collides = false;
            
            for (let pos of positions) {
                const distToWord = Math.sqrt(
                    Math.pow(x - pos.x, 2) + 
                    Math.pow(y - pos.y, 2)
                );
                
                if (distToWord < minWordDistance) {
                    collides = true;
                    break;
                }
            }

            if (!collides) {
                positions.push({ x, y });
                word.style.position = 'absolute';
                word.style.left = x + 'px';
                word.style.top = y + 'px';
                word.style.transform = 'translate(-50%, -50%)';
                placed = true;
            }

            attempts++;
        }

        if (!placed) {
            // Fallback: place on orbital ring
            const angle = (index / wordArray.length) * Math.PI * 2;
            const radius = exclusionRadius + 160;
            const fallbackX = centerX + Math.cos(angle) * radius;
            const fallbackY = centerY + Math.sin(angle) * radius;
            
            const clampedX = Math.max(
                containerMargin + wordWidth / 2,
                Math.min(fallbackX, containerWidth - containerMargin - wordWidth / 2)
            );
            const clampedY = Math.max(
                containerMargin + wordHeight / 2,
                Math.min(fallbackY, containerHeight - containerMargin - wordHeight / 2)
            );
            
            word.style.position = 'absolute';
            word.style.left = clampedX + 'px';
            word.style.top = clampedY + 'px';
            word.style.transform = 'translate(-50%, -50%)';
        }
    });
}

// Initialize on page load
window.addEventListener('load', () => {
    if (viewMain.classList.contains('active')) {
        randomizeWordPositions();
    }
});

window.addEventListener('resize', randomizeWordPositions);
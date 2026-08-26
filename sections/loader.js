/**
 * ===========================================================================
 *  SECTIONS LOADER — Portfolio Najwan Zaki
 * ===========================================================================
 *  Modul ini berfungsi sebagai peta navigasi (directory map) untuk semua
 *  section di dalam portfolio. Gunakan file ini untuk mengetahui secara
 *  cepat lokasi folder setiap section dan konten JSON-nya.
 *
 *  ⚠️ CATATAN PENTING:
 *  Karena portfolio ini bisa dibuka via file:// (lokal) maupun http://,
 *  dan fetch() tidak bekerja pada protokol file://, maka semua markup
 *  HTML section tetap berada di dalam index.html secara inline.
 *
 *  File-file di sections/ berfungsi sebagai:
 *  1. REFERENSI & BACKUP markup (*.html)
 *  2. DATA KONTEN yang mudah diedit (content.json)
 *  3. PANDUAN EDITING dalam bahasa Indonesia (README.md)
 *
 *  Jika nantinya portfolio dipindahkan ke server/framework,
 *  loader ini bisa diaktifkan untuk dynamic section injection.
 * ===========================================================================
 */

const SECTION_MAP = {
    '01-navbar':       { folder: 'sections/01-navbar/',       file: 'navbar.html',       domId: 'navbar'     },
    '02-hero':         { folder: 'sections/02-hero/',         file: 'hero.html',         domId: 'home'       },
    '03-stats':        { folder: 'sections/03-stats/',        file: 'stats.html',        domId: 'stats-bar'  },
    '04-comparison':   { folder: 'sections/04-comparison/',   file: 'comparison.html',   domId: 'comparison' },
    '05-integrations': { folder: 'sections/05-integrations/', file: 'integrations.html', domId: 'integrations' },
    '06-about':        { folder: 'sections/06-about/',        file: 'about.html',        domId: 'about'      },
    '07-education':    { folder: 'sections/07-education/',    file: 'education.html',    domId: 'education'  },
    '08-experience':   { folder: 'sections/08-experience/',   file: 'experience.html',   domId: 'experience' },
    '09-skills':       { folder: 'sections/09-skills/',       file: 'skills.html',       domId: 'skills'     },
    '10-projects':     { folder: 'sections/10-projects/',     file: 'projects.html',     domId: 'projects'   },
    '11-docs':         { folder: 'sections/11-docs/',         file: 'docs.html',         domId: 'docs'       },
    '12-contact':      { folder: 'sections/12-contact/',      file: 'contact.html',      domId: 'contact'    },
    '13-footer':       { folder: 'sections/13-footer/',       file: 'footer.html',       domId: 'footer'     },
};

/**
 * getSectionInfo(key) — Mendapatkan info folder & file section.
 * @param {string} key - Key section (contoh: '06-about')
 * @returns {object} { folder, file, domId }
 */
function getSectionInfo(key) {
    return SECTION_MAP[key] || null;
}

/**
 * listAllSections() — Menampilkan semua section ke console untuk debugging.
 */
function listAllSections() {
    console.log('%c📂 Portfolio Section Map', 'font-size: 14px; font-weight: bold; color: #58a6ff;');
    Object.entries(SECTION_MAP).forEach(([key, info]) => {
        console.log(`  ${key}: ${info.folder}${info.file} → #${info.domId}`);
    });
}

// Auto-log section map saat loader dimuat (hanya di dev console)
if (typeof window !== 'undefined') {
    listAllSections();
}

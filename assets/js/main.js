/**
 * ==============================================================================
 * MASTER ORCHESTRATOR — NAJWAN ZAKI PORTFOLIO
 * Author: Najwan Zaki (Zakyy.dev)
 * 
 * Arsitektur Kode Berbasis Modul Terpisah (Modular Feature Folders):
 * 
 * 1. assets/features/welcome-intro/welcome-intro.js
 *    -> Animasi kata pembuka halus ("Selamat" -> "datang" -> "di" -> "portofolio" -> "saya")
 * 
 * 2. assets/features/particles-canvas/particles.js
 *    -> Latar belakang partikel neon interaktif dengan fisika tolak gravitasi kursor
 * 
 * 3. assets/features/cursor-follower/cursor.js
 *    -> Dual-layer futuristic glowing cursor follower (khusus desktop)
 * 
 * 4. assets/features/parallax-tilt/parallax-tilt.js
 *    -> 60 FPS 3D Card Tilt & Bidirectional Scroll Parallax
 * 
 * 5. assets/features/typewriter/typewriter.js
 *    -> Zero-CLS Locked Hero Typewriter Effect
 * 
 * 6. assets/features/ui-interactions/ui-interactions.js
 *    -> Tabs code preview, menu mobile, copy CLI, skill observer, contact mailto
 * 
 * 7. assets/admin/admin.js
 *    -> Hidden React 18 Admin Dashboard & Live DOM Sync
 * 
 * 8. assets/ai-service/ai-service.js
 *    -> Gemini AI Copilot Assistant Widget
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Verifikasi inisialisasi modul fitur
    console.log(
        '%c🚀 Najwan Zaki Portfolio Engine v2.5.0 %c\n' +
        '• Architecture: Modular Feature Folders\n' +
        '• Security: SHA-256 Crypto + Anti-Brute-Force + CSP\n' +
        '• Rendering: 60 FPS GPU Accelerated',
        'color: #38bdf8; font-size: 14px; font-weight: bold;',
        'color: #8b949e; font-size: 11px;'
    );
});

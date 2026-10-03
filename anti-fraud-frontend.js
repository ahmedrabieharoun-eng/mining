/**
 * توليد بصمة جهاز (Device Fingerprint) مستقلة عن الـ IP.
 * بتجمع خصائص ثابتة للجهاز/المتصفح (User-Agent, الشاشة, WebGL, Canvas,
 * Audio, المنطقة الزمنية...) وتعملها هاش SHA-256.
 * البصمة دي هي اللي بترسل للسيرفر عشان يتأكد إن نفس الجهاز مش بيفتح
 * أكتر من حساب.
 *
 * الاستخدام:
 *   const fp = await generateDeviceFingerprint();
 *   // ابعتها للسيرفر مع أول طلب (initializeUser / checkDeviceFingerprint)
 */
async function generateDeviceFingerprint() {
    const components = [];
    try {
        components.push(navigator.userAgent);
        components.push(`${screen.width}x${screen.height}x${screen.colorDepth}`);
        components.push(navigator.platform);
        components.push(navigator.language);

        // بصمة WebGL (كارت الشاشة/التعريفات)
        if (window.WebGLRenderingContext) {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    components.push(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
                    components.push(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
                }
            }
        }

        components.push('ontouchstart' in window);
        components.push(navigator.hardwareConcurrency || 'unknown');
        components.push(navigator.deviceMemory || 'unknown');
        components.push(navigator.cookieEnabled);
        components.push(navigator.doNotTrack || 'unknown');
        components.push(navigator.maxTouchPoints || 0);
        components.push('devicePixelRatio' in window ? window.devicePixelRatio : 'unknown');
        components.push('orientation' in screen ? screen.orientation.type : 'unknown');

        try {
            components.push(Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown');
            components.push(new Date().getTimezoneOffset());
        } catch (e) {
            components.push('unknown-tz');
        }

        // بصمة Canvas
        try {
            const c = document.createElement('canvas');
            c.width = 220; c.height = 40;
            const ctx = c.getContext('2d');
            ctx.textBaseline = 'top';
            ctx.font = "14px 'Arial'";
            ctx.fillStyle = '#f60';
            ctx.fillRect(0, 0, 100, 20);
            ctx.fillStyle = '#069';
            ctx.fillText('device-fp:%$#@!', 2, 2);
            ctx.strokeStyle = 'rgba(102,204,0,0.7)';
            ctx.beginPath();
            ctx.arc(50, 20, 15, 0, Math.PI * 2);
            ctx.stroke();
            components.push(c.toDataURL());
        } catch (e) {
            components.push('canvas-unsupported');
        }

        // بصمة الصوت (خصائص هاردوير بدون تشغيل صوت فعلي)
        try {
            const AudioCtx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (AudioCtx) {
                const audioCtx = new AudioCtx(1, 44100, 44100);
                components.push(audioCtx.sampleRate);
                components.push(audioCtx.destination.channelCount);
                components.push(audioCtx.destination.maxChannelCount);
            }
        } catch (e) {
            components.push('audio-unsupported');
        }

        const fingerprintString = components.join('|');
        const encoder = new TextEncoder();
        const data = encoder.encode(fingerprintString);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    } catch (error) {
        console.error('Error generating device fingerprint:', error);
        // بصمة بديلة أبسط لو أي API مش متاح
        const fallbackComponents = [
            navigator.userAgent, screen.width, screen.height,
            navigator.platform, navigator.language
        ];
        return btoa(fallbackComponents.join('|')).slice(0, 64);
    }
}

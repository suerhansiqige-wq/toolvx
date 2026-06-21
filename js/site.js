/**
 * toolvx.com — shared site UI: navigation, cookie consent, AdSense loader
 */
(function () {
    'use strict';

    var ADSENSE_CLIENT = 'ca-pub-2114298424481408';
    var CONSENT_KEY = 'toolvx_cookie_consent';

    function initMobileNav() {
        var toggle = document.getElementById('mobile-menu-toggle');
        var panel = document.getElementById('mobile-menu-panel');
        if (!toggle || !panel) return;

        toggle.addEventListener('click', function () {
            var open = panel.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        document.addEventListener('click', function (e) {
            if (!panel.contains(e.target) && !toggle.contains(e.target)) {
                panel.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function loadAdSense() {
        if (!ADSENSE_CLIENT || document.querySelector('script[data-adsense-loader]')) return;
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(ADSENSE_CLIENT);
        script.crossOrigin = 'anonymous';
        script.setAttribute('data-adsense-loader', '1');
        document.head.appendChild(script);

        document.querySelectorAll('.adsbygoogle').forEach(function (slot) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) { /* ignore */ }
        });
    }

    function hideBanner(banner) {
        banner.classList.remove('visible');
        banner.setAttribute('aria-hidden', 'true');
    }

    function initCookieConsent() {
        var banner = document.getElementById('cookie-consent');
        if (!banner) return;

        var consent = localStorage.getItem(CONSENT_KEY);

        if (consent === 'accepted') {
            loadAdSense();
            return;
        }

        if (consent === 'declined') {
            return;
        }

        banner.classList.add('visible');
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.setAttribute('aria-hidden', 'false');

        var acceptBtn = document.getElementById('cookie-accept');
        var declineBtn = document.getElementById('cookie-decline');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', function () {
                localStorage.setItem(CONSENT_KEY, 'accepted');
                hideBanner(banner);
                loadAdSense();
            });
        }
        if (declineBtn) {
            declineBtn.addEventListener('click', function () {
                localStorage.setItem(CONSENT_KEY, 'declined');
                hideBanner(banner);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initMobileNav();
            initCookieConsent();
        });
    } else {
        initMobileNav();
        initCookieConsent();
    }
})();

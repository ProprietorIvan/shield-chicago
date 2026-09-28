import Script from "next/script";
import { AD_CLICK_COOKIE } from "@/lib/ad-click";
import { GOOGLE_ADS_ID, GOOGLE_ADS_WEBSITE_CALL_SEND_TO } from "@/lib/ads";
import { FIRM } from "@/lib/firm";

export function GoogleAdsTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}', { allow_enhanced_conversions: true });

          // Ad click IDs outlive the landing URL so a job booked weeks later can be
          // uploaded back to Google Ads as an offline conversion. Latest click wins.
          (function () {
            try {
              var params = new URLSearchParams(window.location.search);
              var ids = {};
              ['gclid', 'gbraid', 'wbraid'].forEach(function (key) {
                var value = params.get(key);
                if (value) ids[key] = value.slice(0, 200);
              });
              if (!ids.gclid && !ids.gbraid && !ids.wbraid) return;
              ids.ts = Date.now();
              ids.lp = window.location.pathname.slice(0, 120);
              document.cookie = '${AD_CLICK_COOKIE}=' + encodeURIComponent(JSON.stringify(ids)) +
                '; Max-Age=7776000; Path=/; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
            } catch (e) {}
          })();

          // Google forwarding number for ad visitors; calls still ring the main line.
          // React re-renders restore the original number, so the swap is re-applied on DOM changes.
          (function () {
            var original = '${FIRM.phoneE164}'.replace(/\\D/g, '').slice(-10);
            var pattern = /(\\+?1[\\s.-]*)?\\(?464\\)?[\\s.-]*768[\\s.-]*0164/g;
            var forwarding = null;
            var scheduled = false;
            function swap() {
              scheduled = false;
              if (!forwarding || !document.body) return;
              var digits = forwarding.replace(/\\D/g, '');
              document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
                if (a.getAttribute('href').replace(/\\D/g, '').slice(-10) === original) {
                  a.setAttribute('href', 'tel:+' + (digits.length === 10 ? '1' + digits : digits));
                }
              });
              var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
              var node;
              while ((node = walker.nextNode())) {
                if (pattern.test(node.nodeValue)) {
                  pattern.lastIndex = 0;
                  node.nodeValue = node.nodeValue.replace(pattern, forwarding);
                }
                pattern.lastIndex = 0;
              }
            }
            function schedule() {
              if (scheduled) return;
              scheduled = true;
              setTimeout(swap, 50);
            }
            gtag('config', '${GOOGLE_ADS_WEBSITE_CALL_SEND_TO}', {
              phone_conversion_number: '${FIRM.phoneDisplay}',
              phone_conversion_callback: function (formatted) {
                forwarding = formatted;
                swap();
                new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, characterData: true });
              }
            });
          })();

          // Enhanced conversions: hashed by gtag before it leaves the browser.
          document.addEventListener('submit', function (event) {
            var form = event.target;
            if (!form || form.tagName !== 'FORM') return;
            var emailInput = form.querySelector('input[type="email"], input[name="email"]');
            var phoneInput = form.querySelector('input[type="tel"], input[name="phone"]');
            var userData = {};
            if (emailInput && emailInput.value) userData.email = emailInput.value;
            if (phoneInput && phoneInput.value) {
              var phoneDigits = phoneInput.value.replace(/\\D/g, '');
              if (phoneDigits.length === 10) phoneDigits = '1' + phoneDigits;
              if (phoneDigits.length >= 11) userData.phone_number = '+' + phoneDigits;
            }
            if (userData.email || userData.phone_number) {
              gtag('set', 'user_data', userData);
            }
          }, true);
        `}
      </Script>
    </>
  );
}

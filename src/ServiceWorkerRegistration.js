// File: serviceWorker.js

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  
      if (publicUrl.origin !== window.location.origin) {
        // Service Worker tidak akan berfungsi jika PUBLIC_URL memiliki origin berbeda
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Jika berjalan di localhost, periksa keberadaan service worker
          checkValidServiceWorker(swUrl, config);
  
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'Aplikasi ini menggunakan service worker dalam mode cache-first. Untuk detail lebih lanjut, kunjungi https://cra.link/PWA'
            );
          });
        } else {
          // Jika bukan localhost, langsung daftarkan service worker
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
  
          if (installingWorker == null) {
            return;
          }
  
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Konten diperbarui, tapi service worker lama masih berjalan
                console.log(
                  'Konten baru tersedia dan akan digunakan setelah semua tab ditutup. Lihat https://cra.link/PWA.'
                );
  
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // Semua konten berhasil disimpan untuk penggunaan offline
                console.log('Konten telah di-cache untuk penggunaan offline.');
  
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Gagal mendaftarkan service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        const contentType = response.headers.get('content-type');
  
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // Service Worker tidak ditemukan atau bukan file JS
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service Worker ditemukan, lanjutkan registrasi
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('Tidak ada koneksi internet. Aplikasi berjalan dalam mode offline.');
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error('Gagal membatalkan registrasi service worker:', error.message);
        });
    }
  }
  
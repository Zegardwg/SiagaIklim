import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Tambahkan CSS jika ada
import * as serviceWorkerRegistration from './ServiceWorkerRegistration';

// Render Aplikasi Utama ke dalam Root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Aktifkan Service Worker untuk PWA
// Ganti `unregister()` dengan `register()` jika ingin mendukung mode offline
// dan caching. Pelajari lebih lanjut di: https://cra.link/PWA
serviceWorkerRegistration.register();

// src/components/LandingPage.jsx
import React from 'react';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
      <img src="/assets/logo_siagaiklim.png" alt="Logo Siaga Iklim" className="logoImage" />
        <nav className="nav">
          <a href="#" className="navLink">Beranda</a>
          <a href="/peta-risiko" className="navLink">Peta Risiko</a>
          <a href="/laporan" className="navLink">Laporan</a>
          <a href="/edukasi" className="navLink">Edukasi</a>
          <button className="loginButton" onClick={() => window.location.href='/login'}>Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="heroSection">
        <img src="/assets/logo_hero.png" alt="Logo Hero" className="heroLogo" />
        <h2 className="heroTitle">Bersama Melindungi Bumi dan Komunitas Kita.</h2>
        <p className="heroText">
          Bergabunglah Bersama Kami untuk Masa Depan yang Lebih Aman dan Berkelanjutan. Mari bersama-sama wujudkan komunitas yang lebih siap dan tangguh menghadapi perubahan iklim!
        </p>
        <button className="heroButton">Pelajari Lebih Lanjut</button>
      </section>

      {/* Faktor Penyebab Section */}
      <section className="causesSection">
        <h3 className="sectionTitle">Faktor Penyebab Perubahan Iklim</h3>
        <div className="causesContainer">
          <div className="causeCard">
            <img src="assets/aktivitas_manusia.jpg" alt="Aktivitas Manusia" className="causeImage" />
            <h4>Aktivitas Manusia</h4>
            <p>Pemakaian kendaraan bermotor, pembakaran pabrik meningkatkan emisi karbon dioksida.</p>
          </div>
          <div className="causeCard">
            <img src="assets/pemanasan_global.jpg" alt="Pemanasan Global" className="causeImage" />
            <h4>Pemanasan Global</h4>
            <p>Kenaikan suhu bumi disebabkan oleh gas rumah kaca.</p>
          </div>
          <div className="causeCard">
            <img src="assets/kebakaran_hutan.jpg" alt="Kebakaran Hutan" className="causeImage" />
            <h4>Kebakaran Hutan</h4>
            <p>Penebangan hutan mengurangi jumlah penangkapan karbon dioksida di bumi.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="featuresSection">
        <h3 className="sectionTitle">Fitur Kami</h3>
        <div className="featuresContainer">
          <div className="featureCard">
            <img src="assets/peta_risiko.jpg" alt="Peta Risiko" className="featureImage" />
            <p>Peta Risiko</p>
          </div>
          <div className="featureCard">
            <img src="assets/peringatan_dini.png" alt="Peringatan Dini" className="featureImage" />
            <p>Peringatan Dini</p>
          </div>
          <div className="featureCard">
            <img src="assets/pelaporan_bencana.jpg" alt="Pelaporan Bencana" className="featureImage" />
            <p>Pelaporan Bencana</p>
          </div>
          <div className="featureCard">
            <img src="assets/materi_edukasi.jpeg" alt="Materi Edukasi" className="featureImage" />
            <p>Materi Edukasi</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 SIAGAIKLIM. Semua hak cipta dilindungi.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

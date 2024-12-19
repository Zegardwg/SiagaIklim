// src/pages/LaporanPage.jsx
import React, { useState } from 'react';
import './LaporanPage.css';

const LaporanPage = () => {
  const [formData, setFormData] = useState({
    nama: '',
    kontak: '',
    lokasi: '',
    jenisKejadian: '',
    waktu: '',
    deskripsi: '',
    lampiran: null,
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  // Event handler untuk input perubahan
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler untuk upload file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'video/mp4'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        alert('Lampiran harus berupa gambar (JPEG/PNG) atau video (MP4)!');
        return;
      }

      if (file.size > maxSize) {
        alert('Ukuran file tidak boleh lebih dari 5MB!');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);

      setFormData({ ...formData, lampiran: file });
    }
  };

  // Event handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi data
    if (!formData.nama || !formData.kontak || !formData.lokasi || !formData.jenisKejadian || !formData.waktu || !formData.deskripsi) {
      alert('Semua field wajib diisi!');
      return;
    }

    console.log('Data laporan:', formData);
    alert('Laporan berhasil dikirim!');
    // Reset form setelah submit
    setFormData({
      nama: '',
      kontak: '',
      lokasi: '',
      jenisKejadian: '',
      waktu: '',
      deskripsi: '',
      lampiran: null,
    });
    setPreview(null);
  };

  return (
    <div className="laporan-container">
      <h1 className="laporan-title">Laporan Kejadian</h1>
      <form className="laporan-form" onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama Pelapor:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Masukkan Nama Anda"
          value={formData.nama}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="kontak">Nomor Kontak:</label>
        <input
          type="text"
          id="kontak"
          name="kontak"
          placeholder="Masukkan Nomor Kontak"
          value={formData.kontak}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="lokasi">Lokasi Kejadian:</label>
        <input
          type="text"
          id="lokasi"
          name="lokasi"
          placeholder="Masukkan Lokasi Kejadian"
          value={formData.lokasi}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="jenisKejadian">Jenis Kejadian:</label>
        <select
          id="jenisKejadian"
          name="jenisKejadian"
          value={formData.jenisKejadian}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih Jenis Kejadian</option>
          <option value="Banjir">Banjir</option>
          <option value="Gempa">Gempa</option>
          <option value="Kebakaran Hutan">Kebakaran Hutan</option>
          <option value="Tanah Longsor">Tanah Longsor</option>
        </select>

        <label htmlFor="waktu">Waktu Kejadian:</label>
        <input
          type="datetime-local"
          id="waktu"
          name="waktu"
          value={formData.waktu}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="deskripsi">Deskripsi Kejadian:</label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          placeholder="Jelaskan detail kejadian"
          value={formData.deskripsi}
          onChange={handleInputChange}
          required
        ></textarea>

        <label htmlFor="lampiran">Lampiran (Foto/Video):</label>
        <input
          type="file"
          id="lampiran"
          name="lampiran"
          accept="image/*,video/*"
          onChange={handleFileChange}
        />
        {preview && (
          <div className="preview">
            {formData.lampiran.type.startsWith('image') ? (
              <img src={preview} alt="Preview" />
            ) : (
              <video src={preview} controls></video>
            )}
          </div>
        )}

        <button type="submit" className="submit-button">Kirim Laporan</button>
      </form>
    </div>
  );
};

export default LaporanPage;

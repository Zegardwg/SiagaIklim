// src/pages/EdukasiPage.jsx
import React, { useState } from 'react';
import './EdukasiPage.css';

const EdukasiPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Data Artikel
  const articles = [
    {
      title: 'Kurangi Penggunaan Plastik',
      content: 'Kurangi penggunaan plastik sekali pakai dengan membawa tas kain dan botol minum sendiri.',
      image: '/assets/penggunaan_plastik.jpg',
    },
    {
      title: 'Hemat Listrik di Rumah',
      content: 'Matikan alat elektronik saat tidak digunakan dan gunakan lampu hemat energi.',
      image: '/assets/listrik.jpg',
    },
    {
      title: 'Tanam Pohon',
      content: 'Ikut serta dalam program penghijauan untuk mengurangi emisi karbon di lingkungan Anda.',
      image: '/assets/tanam_pohon.jpg',
    },
    {
      title: 'Gunakan Transportasi Ramah Lingkungan',
      content: 'Gunakan transportasi umum, sepeda, atau jalan kaki untuk mengurangi emisi kendaraan.',
      image: '/assets/transportasi_lingkungan.jpg',
    },
    {
      title: 'Pisahkan Sampah',
      content: 'Mulailah memilah sampah organik dan non-organik untuk didaur ulang.',
      image: '/assets/pisahkan_sampah.jpg',
    },
  ];

  // Data Kuis
  const quizQuestions = [
    {
      question: 'Apa penyebab utama perubahan iklim?',
      options: ['Aktivitas Vulkanik', 'Emisi Karbon dari Kendaraan dan Pabrik', 'Orbit Bumi', 'Aktivitas Matahari'],
      correctAnswer: 1,
    },
    {
      question: 'Apa manfaat menanam pohon?',
      options: ['Meningkatkan polusi udara', 'Mengurangi emisi karbon dioksida', 'Mengurangi oksigen', 'Meningkatkan suhu bumi'],
      correctAnswer: 1,
    },
    {
      question: 'Apa tujuan utama dari mendaur ulang sampah?',
      options: ['Mengurangi limbah di tempat pembuangan akhir', 'Meningkatkan limbah plastik', 'Menghasilkan polusi udara', 'Mengurangi penggunaan barang organik'],
      correctAnswer: 0,
    },
    {
      question: 'Apa yang harus dilakukan untuk menghemat energi di rumah?',
      options: ['Meninggalkan lampu menyala', 'Matikan alat elektronik saat tidak digunakan', 'Gunakan lebih banyak perangkat listrik', 'Biarkan AC menyala sepanjang hari'],
      correctAnswer: 1,
    },
    {
      question: 'Mengapa penting menggunakan transportasi umum?',
      options: ['Mengurangi kemacetan lalu lintas', 'Meningkatkan emisi karbon', 'Mengurangi polusi udara', 'Kedua jawaban pertama dan ketiga benar'],
      correctAnswer: 3,
    },
    {
      question: 'Apa langkah pertama dalam pengelolaan sampah?',
      options: ['Membuang semua sampah ke tempat pembuangan akhir', 'Memilah sampah organik dan anorganik', 'Membakar semua sampah', 'Meningkatkan jumlah sampah plastik'],
      correctAnswer: 1,
    },
    {
      question: 'Apa dampak positif dari penghijauan?',
      options: ['Mengurangi polusi udara', 'Meningkatkan emisi karbon', 'Meningkatkan suhu bumi', 'Mengurangi oksigen'],
      correctAnswer: 0,
    },
    {
      question: 'Apa manfaat menggunakan tas kain dibandingkan tas plastik?',
      options: ['Lebih tahan lama dan dapat digunakan berulang kali', 'Menghasilkan lebih banyak limbah', 'Kurang ramah lingkungan', 'Tidak memiliki manfaat'],
      correctAnswer: 0,
    },
    {
      question: 'Bagaimana cara mendukung energi terbarukan?',
      options: ['Menggunakan lampu hemat energi', 'Menggunakan bahan bakar fosil', 'Meningkatkan polusi udara', 'Menggunakan plastik sekali pakai'],
      correctAnswer: 0,
    },
    {
      question: 'Apa manfaat memanfaatkan energi matahari?',
      options: ['Mengurangi ketergantungan pada bahan bakar fosil', 'Meningkatkan polusi udara', 'Meningkatkan biaya listrik', 'Mengurangi sinar matahari'],
      correctAnswer: 0,
    },
  ];

  // Fungsi Kuis
  const handleAnswer = (index) => {
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="edukasiPage">
      <h1 className="pageTitle">Halaman Edukasi</h1>
      <p className="pageSubtitle">Belajar tentang perubahan iklim dan mitigasi bencana.</p>

      {/* Bagian Artikel */}
      <section className="articles">
        <h2>Artikel Edukasi</h2>
        <div className="articleContainer">
          {articles.map((article, index) => (
            <div key={index} className="articleCard">
              <img src={article.image} alt={article.title} className="articleImage" />
              <h3 className="articleTitle">{article.title}</h3>
              <p className="articleContent">{article.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Kuis */}
      <section className="quiz">
        <h2>Kuis Edukasi</h2>
        {!isQuizFinished ? (
          <div className="quizContainer">
            <p className="question">{quizQuestions[currentQuestion].question}</p>
            <div className="options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(index)} className="optionButton">
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="quizResult">
            <h3>Hasil Kuis</h3>
            <p>Skor Anda: {score} dari {quizQuestions.length}</p>
            <button onClick={restartQuiz} className="restartButton">Coba Lagi</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default EdukasiPage;

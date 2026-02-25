/**
 * Tartil — Bangat Soal & Materi Tajwid
 * VERSI LENGKAP — Semua subtopik memiliki 1–3 soal dengan kasus berbeda
 *
 * structure:
 * - chapters: List of chapters with explanations
 * - questions: List of quiz questions
 */

const chapters = [
  {
    id: "nun_sukun",
    title: "Nun Sukun & Tanwin",
    description: "Hukum yang terjadi apabila Nun Sukun (نْ) atau Tanwin (ً ٍ ٌ) bertemu dengan huruf-huruf tertentu.",
    longDescription: "Hukum Nun Sukun dan Tanwin adalah salah satu dasar terpenting dalam ilmu Tajwid. Hukum ini mengatur bagaimana cara kita mengucapkan bunyi 'n' (baik dari nun mati maupun tanwin) ketika bertemu dengan salah satu dari 28 huruf hijaiyah. Terdapat lima pembagian utama: Izhar (jelas), Idgham Bighunnah (masuk dengan dengung), Idgham Bilaghunnah (masuk tanpa dengung), Iqlab (menjadi bunyi mim), dan Ikhfa (samar).",
    materi: [
      "1. **Izhar Halqi**: Membaca Nun/Tanwin dengan jelas tanpa dengung. Hurufnya: ء ه ع ح غ خ.",
      "2. **Idgham Bighunnah**: Memasukkan Nun/Tanwin ke huruf berikutnya disertai dengung. Hurufnya: ي ن م و.",
      "3. **Idgham Bilaghunnah**: Memasukkan Nun/Tanwin ke huruf berikutnya tanpa dengung. Hurufnya: ل ر.",
      "4. **Iqlab**: Mengubah bunyi Nun/Tanwin menjadi bunyi Mim (م) saat bertemu Ba (ب).",
      "5. **Ikhfa Haqiqi**: Menyamarkan bunyi Nun/Tanwin disertai dengung. Hurufnya: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك."
    ],
    examples: [
      {
        title: "Izhar Halqi (ء ه ع ح غ خ)",
        arabic: "مِنْ عِلْمٍ",
        highlight: "نْ ع",
        explanation: "Nun mati bertemu 'Ain (ع). Dibaca jelas tanpa mendengung."
      },
      {
        title: "Idgham Bighunnah (ي ن م و)",
        arabic: "مَن يَعْمَلْ",
        highlight: "ن ي",
        explanation: "Nun mati bertemu Ya (ي). Suara nun masuk ke Ya disertai dengung 2 harakat."
      },
      {
        title: "Idgham Bilaghunnah (ل ر)",
        arabic: "مِن رَّبِّهِمْ",
        highlight: "ن ر",
        explanation: "Nun mati bertemu Ra (ر). Suara nun masuk ke Ra tanpa dengung."
      },
      {
        title: "Iqlab (ب)",
        arabic: "مِنۢ بَعْدِ",
        highlight: "نۢ ب",
        explanation: "Nun mati bertemu Ba (ب). Bunyi nun berubah menjadi mim disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi",
        arabic: "مُنذِرٌ",
        highlight: "نذ",
        explanation: "Nun mati bertemu Dzal (ذ). Bunyi nun dibaca samar disertai dengung."
      }
    ]
  },
  {
    id: "mim_sukun",
    title: "Mim Sukun",
    description: "Hukum yang terjadi apabila Mim Sukun (مْ) bertemu dengan huruf hijaiyah.",
    longDescription: "Hukum Mim Sukun mengatur cara pengucapan huruf Mim yang mati (sukun) saat bertemu dengan huruf hijaiyah lainnya. Berbeda dengan Nun Sukun, Mim Sukun hanya memiliki tiga hukum: Ikhfa Syafawi (ketemu Ba), Idgham Mimi (ketemu Mim), dan Izhar Syafawi (ketemu huruf lainnya).",
    materi: [
      "1. **Izhar Syafawi**: Mim sukun bertemu huruf selain Mim dan Ba, dibaca jelas.",
      "2. **Ikhfa Syafawi**: Mim sukun bertemu Ba (ب), dibaca samar dengan dengung.",
      "3. **Idgham Mimi (Mutamatsilain)**: Mim sukun bertemu Mim, dimasukkan dengan dengung."
    ],
    examples: [
      {
        title: "Izhar Syafawi",
        arabic: "لَهُمْ فِيهَا",
        highlight: "مْ ف",
        explanation: "Mim mati bertemu Fa (ف). Dibaca jelas tanpa dengung."
      },
      {
        title: "Ikhfa Syafawi",
        arabic: "تَرْمِيهِم بِحِجَارَةٍ",
        highlight: "مْ ب",
        explanation: "Mim mati bertemu Ba (ب). Dibaca samar dengan dengung di bibir."
      },
      {
        title: "Idgham Mimi",
        arabic: "لَكُم مَّا كَسَبْتُمْ",
        highlight: "مْ م",
        explanation: "Mim mati bertemu Mim (م). Mim pertama masuk ke Mim kedua dengan dengung."
      }
    ]
  },
  {
    id: "mad",
    title: "Mad (Panjang Pendek)",
    description: "Memanjangkan bunyi huruf karena adanya huruf Mad (ا و ي).",
    longDescription: "Mad secara bahasa berarti memanjangkan. Dalam tajwid, Mad adalah memanjangkan suara saat mengucapkan huruf-huruf Mad (Alif, Waw, Ya). Mad dibagi menjadi dua besar: Mad Thabi'i (Asli) dan Mad Far'i (Cabang). Menguasai Mad sangat penting agar tidak salah dalam mengubah arti kata dalam Al-Qur'an.",
    materi: [
      "**Mad Thabi'i (Asli)**: Panjang 2 harakat. Dasar semua mad.",
      "**Mad Wajib Muttasil**: Mad bertemu hamzah dalam satu kata, 4–5 harakat.",
      "**Mad Jaiz Munfasil**: Mad bertemu hamzah di lain kata, 2–5 harakat.",
      "**Mad 'Aridh Lissukun**: Mad di akhir kata saat waqaf, 2–6 harakat.",
      "**Mad Iwad**: Tanwin fathah di akhir kata saat waqaf dibaca 2 harakat."
    ],
    examples: [
      {
        title: "Mad Thabi'i",
        arabic: "قَالَ",
        highlight: "قَا",
        explanation: "Alif didahului harakat fathah. Dibaca panjang 2 harakat."
      },
      {
        title: "Mad Wajib Muttasil",
        arabic: "جَاءَ",
        highlight: "اءَ",
        explanation: "Mad bertemu hamzah dalam satu kata. Panjang 4-5 harakat."
      },
      {
        title: "Mad Jaiz Munfasil",
        arabic: "يَا أَيُّهَا",
        highlight: "يَا أَ",
        explanation: "Mad bertemu hamzah di kata yang berbeda. Panjang 2-5 harakat."
      }
    ]
  },
  {
    id: "ra",
    title: "Ra Tafkhim & Tarqiq",
    description: "Hukum menebalkan atau menipiskan bunyi huruf Ra (ر).",
    longDescription: "Hukum Ra mengatur kapan huruf Ra (ر) harus dibaca tebal (Tafkhim) atau tipis (Tarqiq). Ini sangat bergantung pada harakat huruf Ra itu sendiri atau harakat huruf sebelumnya. Membedakan ketebalan Ra memberikan keindahan dan ketepatan dalam pelafalan Al-Qur'an.",
    materi: [
      "1. **Ra Tafkhim (Tebal)**: Ra berharakat fathah atau dhammah (رَ, رُ) atau Ra sukun didahului fathah/dhammah.",
      "2. **Ra Tarqiq (Tipis)**: Ra berharakat kasrah (رِ) atau Ra sukun didahului kasrah asli.",
      "3. **Ra Jaiz**: Boleh tebal atau tipis dalam kondisi tertentu (Ra sukun didahului kasrah, setelahnya huruf Isti'la)."
    ],
    examples: [
      {
        title: "Ra Tafkhim (Tebal)",
        arabic: "رَسُولُ اللَّهِ - رُزِقُوا",
        highlight: "رَ",
        explanation: "Huruf Ra berharakat fathah atau dhammah wajib dibaca tebal."
      },
      {
        title: "Ra Tarqiq (Tipis)",
        arabic: "رِزْقًا - فِرْعَوْنَ",
        highlight: "رِ",
        explanation: "Huruf Ra berharakat kasrah atau Ra mati didahului kasrah dibaca tipis."
      }
    ]
  },
  {
    id: "gharib",
    title: "Ayat-Ayat Gharib",
    description: "Bacaan-bacaan khusus yang tidak umum atau berbeda dari kaidah standar.",
    longDescription: "Gharib berarti asing atau jarang. Dalam Al-Qur'an riwayat Hafs dari Ashim, terdapat beberapa kata yang cara membacanya keluar dari kaidah umum (pengecualian), seperti Saktah (berhenti tanpa napas), Imalah (bunyi 'e' seperti sate), dan Isymam.",
    materi: [
      "1. **Imalah**: Memiringkan bunyi fathah ke arah kasrah (hanya pada 'Majreha' di QS Hud: 41).",
      "2. **Isymam**: Isyarat mencucu bibir tanpa suara pada kata 'Laa Ta'mannaa'.",
      "3. **Saktah**: Berhenti sejenak (2 harakat) tanpa mengambil napas.",
      "4. **Tashil**: Membaca hamzah kedua dengan samar (antara hamzah dan alif)."
    ],
    examples: [
      {
        title: "Imalah",
        arabic: "بِسْمِ اللَّهِ مَجْر۪ىٰهَا",
        highlight: "جْر۪ىٰ",
        explanation: "Satu-satunya bacaan Imalah: harakat fathah miring ke kasrah (bunyi 're')."
      },
      {
        title: "Saktah",
        arabic: "كَلَّا ۖ بَلْ ۜ رَانَ",
        highlight: "بَلْ ۜ ر",
        explanation: "Berhenti sejenak tanpa mengambil napas antara kata 'Bal' dan 'Raana'."
      }
    ]
  },
  {
    id: "qalqalah",
    title: "Qalqalah",
    description: "Memantulkan bunyi huruf Qalqalah (ق ط ب ج د) yang berharakat sukun atau waqaf.",
    longDescription: "Qalqalah berarti getaran atau pantulan. Dalam tajwid, hukum ini berlaku ketika salah satu dari 5 huruf (Ba, Jim, Dal, Tha, Qaf - disingkat 'Baju Di Toko') berharakat sukun atau mati karena berhenti di akhir ayat. Ada dua jenis utama: Sughra (kecil/di tengah) dan Kubra (besar/di akhir).",
    materi: [
      "1. **Qalqalah Sughra**: Pantulan ringan pada huruf qalqalah yang mati di tengah kata.",
      "2. **Qalqalah Kubra**: Pantulan kuat pada huruf qalqalah di akhir kata karena waqaf."
    ],
    examples: [
      {
        title: "Qalqalah Sughra",
        arabic: "يَدْخُلُونَ",
        highlight: "دْ",
        explanation: "Huruf Dal mati di tengah kata. Dipantulkan dengan ringan."
      },
      {
        title: "Qalqalah Kubra",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        highlight: "دٌ",
        explanation: "Huruf Dal di akhir ayat (waqaf). Dipantulkan dengan kuat."
      }
    ]
  },
  {
    id: "ghunnah",
    title: "Ghunnah",
    description: "Dengung yang keluar dari pangkal hidung (Al-Khaisyum) dengan panjang 2 harakat.",
    longDescription: "Ghunnah adalah bunyi dengung yang berasal dari rongga hidung. Hukum ini wajib dibaca ketika kita menemukan huruf Nun atau Mim yang memiliki tanda Tasydid (tasydid). Panjang dengungnya adalah 2 harakat/ketukan.",
    materi: [
      "1. **Ghunnah Musyaddadah**: Pada Nun Tasydid (نّ) dan Mim Tasydid (مّ), wajib dengung.",
      "2. **Ghunnah pada Idgham Bighunnah**: Nun sukun/tanwin masuk huruf ي ن م و disertai dengung."
    ],
    examples: [
      {
        title: "Ghunnah (Nun Tasydid)",
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        highlight: "إِنَّ",
        explanation: "Nun bertasydid dibaca mendengung jelas selama 2 harakat."
      },
      {
        title: "Ghunnah (Mim Tasydid)",
        arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
        highlight: "ثُمَّ",
        explanation: "Mim bertasydid dibaca mendengung jelas selama 2 harakat."
      }
    ]
  },
  {
    id: "lam_tarif",
    title: "Lam Ta'rif (Alif Lam)",
    description: "Hukum Alif Lam (ال) di awal kata.",
    longDescription: "Lam Ta'rif adalah huruf Alif dan Lam yang masuk pada kata benda (Isim). Terbagi menjadi Al-Qamariyah (Lam dibaca jelas) dan Al-Syamsiyah (Lam melebur ke huruf berikutnya).",
    materi: [
      "1. **Lam Qamariyah**: Alif Lam bertemu huruf qamariyah, dibaca jelas. Huruf: ا ب ج ح خ ع غ ف ق ك م و ه ي.",
      "2. **Lam Syamsiyah**: Alif Lam bertemu huruf syamsiyah, Lam masuk ke huruf berikutnya. Huruf: ت ث د ذ ر ز س ش ص ض ط ظ ل ن."
    ],
    examples: [
      {
        title: "Al-Qamariyah",
        arabic: "الْحَمْدُ لِلَّهِ",
        highlight: "الْحَ",
        explanation: "Huruf Lam dibaca jelas (Sukun) karena bertemu huruf Ha."
      },
      {
        title: "Al-Syamsiyah",
        arabic: "الشَّمْسُ",
        highlight: "الشَّ",
        explanation: "Huruf Lam melebur ke huruf Syin yang bertasydid."
      }
    ]
  }
];

const questions = [

  // ============================================================
  // 1. NUN SUKUN & TANWIN
  // ============================================================

  // --- 1.1 Izhar Halqi ---
  {
    id: 1,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "izhar_halqi",
    question: "Apa hukum tajwid apabila Nun sukun bertemu huruf 'Ain (ع)?",
    arabic: "مِنْ عِلْمٍ",
    options: ["Ikhfa Haqiqi", "Idgham Bighunnah", "Izhar Halqi", "Iqlab"],
    answer: 2,
    explanation: {
      title: "Izhar Halqi",
      text: "Nun sukun bertemu huruf 'Ain (ع) yang termasuk huruf halqi (ء ه ع ح غ خ). Dibaca jelas tanpa dengung.",
      example: "مِنْ عِلْمٍ",
      highlight: "نْ ع"
    }
  },
  {
    id: 2,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "izhar_halqi",
    question: "Tanwin (ٌ) bertemu huruf Ha (ح) pada lafaz berikut. Apa hukumnya?",
    arabic: "عَلِيمٌ حَكِيمٌ",
    options: ["Idgham Bighunnah", "Ikhfa Haqiqi", "Izhar Halqi", "Idgham Bilaghunnah"],
    answer: 2,
    explanation: {
      title: "Izhar Halqi",
      text: "Tanwin dhammah bertemu Ha (ح) yang merupakan huruf halqi. Dibaca jelas tanpa dengung.",
      example: "عَلِيمٌ حَكِيمٌ",
      highlight: "ٌ حَ"
    }
  },
  {
    id: 3,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "izhar_halqi",
    question: "Nun sukun bertemu huruf Ghain (غ). Apa hukum tajwidnya?",
    arabic: "مِنْ غِلٍّ",
    options: ["Izhar Halqi", "Ikhfa Haqiqi", "Iqlab", "Idgham Bighunnah"],
    answer: 0,
    explanation: {
      title: "Izhar Halqi",
      text: "Ghain (غ) adalah huruf halqi. Nun sukun bertemu Ghain dibaca jelas tanpa dengung.",
      example: "مِنْ غِلٍّ",
      highlight: "نْ غ"
    }
  },

  // --- 1.2 Idgham Bighunnah ---
  {
    id: 4,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "idgham_bighunnah",
    question: "Apa hukum tajwid Nun mati bertemu huruf Ya?",
    arabic: "مَن يَعْمَلْ",
    options: ["Idgham Bilaghunnah", "Ikhfa Haqiqi", "Idgham Bighunnah", "Izhar"],
    answer: 2,
    explanation: {
      title: "Idgham Bighunnah",
      text: "Nun sukun bertemu Ya (ي) yang merupakan salah satu dari huruf idgham bighunnah (ي ن م و). Nun masuk ke Ya disertai dengung.",
      example: "مَن يَعْمَلْ",
      highlight: "ن يَ"
    }
  },
  {
    id: 5,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "idgham_bighunnah",
    question: "Tanwin kasrah bertemu Waw (و) pada lafaz berikut. Apa hukumnya?",
    arabic: "يَوْمَئِذٍ وَاهِيَةٌ",
    options: ["Izhar Halqi", "Idgham Bighunnah", "Ikhfa Haqiqi", "Iqlab"],
    answer: 1,
    explanation: {
      title: "Idgham Bighunnah",
      text: "Tanwin kasrah bertemu Waw (و), termasuk huruf idgham bighunnah. Tanwin masuk ke Waw dengan dengung.",
      example: "يَوْمَئِذٍ وَاهِيَةٌ",
      highlight: "ذٍ وَ"
    }
  },
  {
    id: 6,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "idgham_bighunnah",
    question: "Hukum tajwid Nun sukun bertemu Mim pada lafaz ini adalah?",
    arabic: "مِن مَّاءٍ",
    options: ["Idgham Mimi", "Idgham Bighunnah", "Izhar Halqi", "Ikhfa Haqiqi"],
    answer: 1,
    explanation: {
      title: "Idgham Bighunnah",
      text: "Nun sukun bertemu Mim (م) yang merupakan huruf idgham bighunnah. Berbeda dengan Idgham Mimi yang berlaku untuk Mim sukun.",
      example: "مِن مَّاءٍ",
      highlight: "نْ مَّ"
    }
  },

  // --- 1.3 Idgham Bilaghunnah ---
  {
    id: 7,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "idgham_bilaghunnah",
    question: "Nun sukun bertemu Ra (ر) pada lafaz berikut. Apa hukumnya?",
    arabic: "مِنْ رَبِّهِمْ",
    options: ["Idgham Bighunnah", "Idgham Bilaghunnah", "Ikhfa Haqiqi", "Izhar Halqi"],
    answer: 1,
    explanation: {
      title: "Idgham Bilaghunnah",
      text: "Nun sukun bertemu Ra (ر), salah satu dari dua huruf idgham bilaghunnah (ل ر). Nun masuk ke Ra tanpa dengung.",
      example: "مِنْ رَبِّهِمْ",
      highlight: "نْ رَ"
    }
  },
  {
    id: 8,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "idgham_bilaghunnah",
    question: "Tanwin fathah bertemu Lam (ل) pada lafaz ini. Apa hukumnya?",
    arabic: "هُدًى لِلْمُتَّقِينَ",
    options: ["Idgham Bilaghunnah", "Ikhfa Haqiqi", "Idgham Bighunnah", "Izhar"],
    answer: 0,
    explanation: {
      title: "Idgham Bilaghunnah",
      text: "Tanwin fathah bertemu Lam (ل), huruf idgham bilaghunnah. Tanwin masuk ke Lam tanpa dengung.",
      example: "هُدًى لِلْمُتَّقِينَ",
      highlight: "دًى لِ"
    }
  },

  // --- 1.4 Iqlab ---
  {
    id: 9,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "iqlab",
    question: "Hukum tajwid pada lafaz berikut (Nun mati bertemu Ba) adalah?",
    arabic: "مِنۢ بَعْدِ",
    options: ["Izhar Halqi", "Iqlab", "Ikhfa Haqiqi", "Idgham Mimi"],
    answer: 1,
    explanation: {
      title: "Iqlab",
      text: "Nun sukun bertemu Ba (ب). Bunyi Nun berubah menjadi Mim, disertai dengung dan samar.",
      example: "مِنۢ بَعْدِ",
      highlight: "نۢ بَ"
    }
  },
  {
    id: 10,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "iqlab",
    question: "Tanwin dhammah bertemu Ba (ب) pada potongan ayat ini. Apa hukumnya?",
    arabic: "سَمِيعٌۢ بَصِيرٌ",
    options: ["Izhar Halqi", "Idgham Bighunnah", "Iqlab", "Ikhfa Syafawi"],
    answer: 2,
    explanation: {
      title: "Iqlab",
      text: "Tanwin dhammah bertemu Ba (ب). Tanwin berubah menjadi Mim tersembunyi disertai dengung.",
      example: "سَمِيعٌۢ بَصِيرٌ",
      highlight: "عٌۢ بَ"
    }
  },
  {
    id: 11,
    type: "teori",
    category: "nun_sukun",
    subtopic: "iqlab",
    question: "Ketika terjadi Iqlab, Nun sukun berubah menjadi huruf?",
    options: ["Waw (و)", "Ba (ب)", "Mim (م)", "Nun (ن)"],
    answer: 2,
    explanation: {
      title: "Iqlab",
      text: "Iqlab artinya mengubah. Nun sukun/tanwin berubah bunyinya menjadi Mim (م) yang samar disertai dengung saat bertemu Ba.",
      example: "مِنۢ بَعْدِ",
      highlight: "نۢ"
    }
  },

  // --- 1.5 Ikhfa Haqiqi ---
  {
    id: 12,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "ikhfa_haqiqi",
    question: "Nun sukun bertemu Dzal (ذ). Apa hukum tajwidnya?",
    arabic: "مُنذِرٌ",
    options: ["Izhar Halqi", "Idgham Bighunnah", "Ikhfa Haqiqi", "Iqlab"],
    answer: 2,
    explanation: {
      title: "Ikhfa Haqiqi",
      text: "Nun sukun bertemu Dzal (ذ) yang merupakan huruf ikhfa. Bunyi Nun disamarkan disertai dengung.",
      example: "مُنذِرٌ",
      highlight: "نذِ"
    }
  },
  {
    id: 13,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "ikhfa_haqiqi",
    question: "Tanwin fathah bertemu Sin (س). Apa hukumnya?",
    arabic: "نَفْسًا سَوِيًّا",
    options: ["Ikhfa Haqiqi", "Idgham Bilaghunnah", "Izhar Halqi", "Iqlab"],
    answer: 0,
    explanation: {
      title: "Ikhfa Haqiqi",
      text: "Tanwin fathah bertemu Sin (س), huruf ikhfa haqiqi. Nun/tanwin dibaca samar antara jelas dan memasukkan, disertai dengung.",
      example: "نَفْسًا سَوِيًّا",
      highlight: "سًا سَ"
    }
  },
  {
    id: 14,
    type: "ayat",
    category: "nun_sukun",
    subtopic: "ikhfa_haqiqi",
    question: "Hukum Nun sukun bertemu Tha (ط) pada lafaz ini adalah?",
    arabic: "مِن طِينٍ",
    options: ["Izhar Halqi", "Iqlab", "Idgham Bighunnah", "Ikhfa Haqiqi"],
    answer: 3,
    explanation: {
      title: "Ikhfa Haqiqi",
      text: "Nun sukun bertemu Tha (ط), huruf ikhfa haqiqi. Bunyi Nun disamarkan dengan dengung.",
      example: "مِن طِينٍ",
      highlight: "ن طِ"
    }
  },

  // ============================================================
  // 2. MIM SUKUN
  // ============================================================

  // --- 2.1 Izhar Syafawi ---
  {
    id: 15,
    type: "ayat",
    category: "mim_sukun",
    subtopic: "izhar_syafawi",
    question: "Apa hukum Mim sukun bertemu Fa (ف)?",
    arabic: "لَهُمْ فِيهَا",
    options: ["Ikhfa Syafawi", "Idgham Mimi", "Izhar Syafawi", "Iqlab"],
    answer: 2,
    explanation: {
      title: "Izhar Syafawi",
      text: "Mim sukun bertemu Fa (ف), bukan Mim atau Ba. Dibaca jelas tanpa dengung.",
      example: "لَهُمْ فِيهَا",
      highlight: "مْ فِ"
    }
  },
  {
    id: 16,
    type: "ayat",
    category: "mim_sukun",
    subtopic: "izhar_syafawi",
    question: "Mim sukun bertemu Kaf (ك) pada lafaz berikut. Apa hukumnya?",
    arabic: "أَمْ كَفَرْتُمْ",
    options: ["Idgham Mimi", "Ikhfa Syafawi", "Izhar Syafawi", "Ghunnah"],
    answer: 2,
    explanation: {
      title: "Izhar Syafawi",
      text: "Mim sukun bertemu Kaf (ك). Huruf Kaf bukan Mim atau Ba, sehingga Mim dibaca jelas.",
      example: "أَمْ كَفَرْتُمْ",
      highlight: "مْ كَ"
    }
  },
  {
    id: 17,
    type: "ayat",
    category: "mim_sukun",
    subtopic: "izhar_syafawi",
    question: "Mim sukun bertemu Waw (و). Hukum apa yang berlaku?",
    arabic: "هُمْ وَأَزْوَاجُهُمْ",
    options: ["Izhar Syafawi", "Idgham Mimi", "Ikhfa Syafawi", "Idgham Bighunnah"],
    answer: 0,
    explanation: {
      title: "Izhar Syafawi",
      text: "Mim sukun bertemu Waw (و). Meskipun Waw sering berhubungan dengan idgham, untuk Mim sukun berlaku izhar syafawi karena bukan Mim atau Ba.",
      example: "هُمْ وَأَزْوَاجُهُمْ",
      highlight: "مْ وَ"
    }
  },

  // --- 2.2 Ikhfa Syafawi ---
  {
    id: 18,
    type: "ayat",
    category: "mim_sukun",
    subtopic: "ikhfa_syafawi",
    question: "Mim sukun bertemu Ba (ب) disebut hukum?",
    arabic: "تَرْمِيهِم بِحِجَارَةٍ",
    options: ["Idgham Mimi", "Ikhfa Syafawi", "Izhar Syafawi", "Ghunnah"],
    answer: 1,
    explanation: {
      title: "Ikhfa Syafawi",
      text: "Mim sukun bertemu Ba (ب). Mim dibaca samar dengan dengung, bibir tidak merapat sempurna.",
      example: "تَرْمِيهِم بِحِجَارَةٍ",
      highlight: "مْ بِ"
    }
  },
  {
    id: 19,
    type: "ayat",
    category: "mim_sukun",
    subtopic: "ikhfa_syafawi",
    question: "Potongan ayat ini mengandung hukum Ikhfa Syafawi karena?",
    arabic: "وَمَا هُم بِمُؤْمِنِينَ",
    options: [
      "Mim sukun bertemu Mim",
      "Nun sukun bertemu Ba",
      "Mim sukun bertemu Ba",
      "Tanwin bertemu Ba"
    ],
    answer: 2,
    explanation: {
      title: "Ikhfa Syafawi",
      text: "Pada lafaz 'هُم بِ', terdapat Mim sukun bertemu Ba. Inilah satu-satunya sebab Ikhfa Syafawi.",
      example: "وَمَا هُم بِمُؤْمِنِينَ",
      highlight: "مْ بِ"
    }
  },

  // --- 2.3 Idgham Mimi ---
  {
    id: 20,
    type: "ayat",
    category: "mim_sukun",
    subtopic: "idgham_mimi",
    question: "Hukum apa yang berlaku pada Mim sukun bertemu Mim?",
    arabic: "لَكُم مَّا كَسَبْتُمْ",
    options: ["Izhar Syafawi", "Ikhfa Syafawi", "Idgham Mimi", "Idgham Bighunnah"],
    answer: 2,
    explanation: {
      title: "Idgham Mimi (Mutamatsilain)",
      text: "Mim sukun bertemu Mim. Mim sukun masuk ke Mim berikutnya disertai dengung 2 harakat.",
      example: "لَكُم مَّا كَسَبْتُمْ",
      highlight: "مْ مَّ"
    }
  },
  {
    id: 21,
    type: "ayat",
    category: "mim_sukun",
    subtopic: "idgham_mimi",
    question: "Lafaz ini mengandung Idgham Mimi. Di mana letaknya?",
    arabic: "وَأَنتُم مُّسْلِمُونَ",
    options: ["تُم مُّ", "أَن تُم", "مُ ونَ", "تُمْ سْ"],
    answer: 0,
    explanation: {
      title: "Idgham Mimi",
      text: "Pada 'أَنتُم مُّ', terdapat Mim sukun (م) bertemu Mim (مّ). Keduanya dilebur menjadi satu Mim bertasydid dengan dengung.",
      example: "وَأَنتُم مُّسْلِمُونَ",
      highlight: "تُم مُّ"
    }
  },

  // ============================================================
  // 3. MAD
  // ============================================================

  // --- 3.1 Mad Thabi'i ---
  {
    id: 22,
    type: "teori",
    category: "mad",
    subtopic: "mad_thabii",
    question: "Berapa harakat panjang Mad Thabi'i (Mad Asli)?",
    options: ["1 Harakat", "2 Harakat", "4 Harakat", "6 Harakat"],
    answer: 1,
    explanation: {
      title: "Mad Thabi'i",
      text: "Mad Thabi'i (asli) panjangnya 2 harakat. Terjadi ketika ada huruf mad (ا و ي) tanpa sebab yang mengharuskan pemanjangan lebih.",
      example: "قَالَ / يَقُولُ / قِيلَ",
      highlight: "ا / و / ي"
    }
  },
  {
    id: 23,
    type: "ayat",
    category: "mad",
    subtopic: "mad_thabii",
    question: "Lafaz berikut mengandung Mad Thabi'i karena?",
    arabic: "قَالَ",
    options: [
      "Alif bertemu hamzah dalam satu kata",
      "Ada alif setelah fathah tanpa sebab lain",
      "Alif bertemu tasydid",
      "Alif di akhir kata saat waqaf"
    ],
    answer: 1,
    explanation: {
      title: "Mad Thabi'i",
      text: "Alif mati setelah fathah (قَا) tanpa ada hamzah atau tasydid setelahnya = Mad Thabi'i, panjang 2 harakat.",
      example: "قَالَ",
      highlight: "قَا"
    }
  },
  {
    id: 24,
    type: "ayat",
    category: "mad",
    subtopic: "mad_thabii",
    question: "Pada lafaz ini, jenis mad apa yang terdapat pada huruf Waw?",
    arabic: "يَقُولُ",
    options: ["Mad Wajib Muttasil", "Mad Thabi'i", "Mad Badal", "Mad Silah"],
    answer: 1,
    explanation: {
      title: "Mad Thabi'i",
      text: "Waw (و) sukun setelah dhammah (يَقُو) tanpa sebab mad far'i = Mad Thabi'i 2 harakat.",
      example: "يَقُولُ",
      highlight: "قُو"
    }
  },

  // --- 3.2 Mad Wajib Muttasil ---
  {
    id: 25,
    type: "ayat",
    category: "mad",
    subtopic: "mad_wajib_muttasil",
    question: "Apa hukum Mad jika Alif bertemu Hamzah dalam satu kata?",
    arabic: "جَاءَ",
    options: ["Mad Thabi'i", "Mad Jaiz Munfasil", "Mad Wajib Muttasil", "Mad 'Aridh"],
    answer: 2,
    explanation: {
      title: "Mad Wajib Muttasil",
      text: "Mad bertemu hamzah dalam 1 kata (bersambung). Wajib dipanjangkan 4–5 harakat.",
      example: "جَاءَ",
      highlight: "اءَ"
    }
  },
  {
    id: 26,
    type: "ayat",
    category: "mad",
    subtopic: "mad_wajib_muttasil",
    question: "Mengapa lafaz 'السَّمَاءِ' termasuk Mad Wajib Muttasil?",
    arabic: "السَّمَاءِ",
    options: [
      "Mad bertemu hamzah di lain kata",
      "Mad bertemu sukun di akhir kata",
      "Mad bertemu hamzah dalam satu kata",
      "Mad bertemu tasydid dalam satu kata"
    ],
    answer: 2,
    explanation: {
      title: "Mad Wajib Muttasil",
      text: "Alif mad (مَا) bertemu hamzah (ءِ) dalam satu kata 'السَّمَاءِ'. Karena bersambung, hukumnya wajib dipanjangkan 4–5 harakat.",
      example: "السَّمَاءِ",
      highlight: "مَاءِ"
    }
  },
  {
    id: 27,
    type: "ayat",
    category: "mad",
    subtopic: "mad_wajib_muttasil",
    question: "Lafaz ini mengandung Mad Wajib Muttasil karena huruf Ya bertemu Hamzah dalam satu kata. Berapa panjangnya?",
    arabic: "جِيءَ",
    options: ["2 harakat", "4–5 harakat", "6 harakat", "1 harakat"],
    answer: 1,
    explanation: {
      title: "Mad Wajib Muttasil",
      text: "Ya mad (جِي) bertemu hamzah (ءَ) dalam satu kata. Dipanjangkan 4–5 harakat.",
      example: "جِيءَ",
      highlight: "يءَ"
    }
  },

  // --- 3.3 Mad Jaiz Munfasil ---
  {
    id: 28,
    type: "ayat",
    category: "mad",
    subtopic: "mad_jaiz_munfasil",
    question: "Hukum Mad pada 'Yaa' di potongan ayat berikut adalah?",
    arabic: "يَا أَيُّهَا",
    options: ["Mad Wajib Muttasil", "Mad Jaiz Munfasil", "Mad Badal", "Mad Iwad"],
    answer: 1,
    explanation: {
      title: "Mad Jaiz Munfasil",
      text: "Mad (يَا) bertemu hamzah (أَ) di kata yang berbeda (terpisah). Boleh dipanjangkan 2–5 harakat.",
      example: "يَا أَيُّهَا",
      highlight: "يَا أَ"
    }
  },
  {
    id: 29,
    type: "ayat",
    category: "mad",
    subtopic: "mad_jaiz_munfasil",
    question: "Perbedaan Mad Jaiz Munfasil dengan Mad Wajib Muttasil terletak pada?",
    arabic: "قُلْ أُوحِيَ",
    options: [
      "Hamzah bertemu mad dalam satu kata",
      "Mad bertemu hamzah di dua kata berbeda",
      "Mad bertemu tasydid",
      "Mad di akhir ayat"
    ],
    answer: 1,
    explanation: {
      title: "Mad Jaiz Munfasil",
      text: "Pada 'أُوحِيَ', huruf waw mad (أُو) ada di satu kata, dan hamzah ada di kata sebelumnya (قُلْ أُو). Hamzah dan mad ada di dua kata = Munfasil.",
      example: "قُلْ أُوحِيَ",
      highlight: "قُلْ أُو"
    }
  },

  // --- 3.4 Mad 'Aridh Lissukun ---
  {
    id: 30,
    type: "ayat",
    category: "mad",
    subtopic: "mad_aridh",
    question: "Saat berwaqaf pada akhir ayat ini, hukum mad apa yang berlaku?",
    arabic: "الرَّحِيمِ",
    options: ["Mad Thabi'i", "Mad Wajib Muttasil", "Mad 'Aridh Lissukun", "Mad Badal"],
    answer: 2,
    explanation: {
      title: "Mad 'Aridh Lissukun",
      text: "Mad (حِي) bertemu sukun yang baru ada karena waqaf. Boleh dibaca 2, 4, atau 6 harakat.",
      example: "الرَّحِيمِ",
      highlight: "حِيمِ (waqaf)"
    }
  },
  {
    id: 31,
    type: "teori",
    category: "mad",
    subtopic: "mad_aridh",
    question: "Mad 'Aridh Lissukun terjadi ketika?",
    options: [
      "Mad bertemu hamzah dalam satu kata",
      "Mad bertemu sukun karena waqaf di akhir kata",
      "Mad bertemu tasydid",
      "Mad di huruf pembuka surah"
    ],
    answer: 1,
    explanation: {
      title: "Mad 'Aridh Lissukun",
      text: "'Aridh artinya mendatang. Sukun muncul sementara karena berhenti (waqaf), bukan sukun asli. Boleh dibaca 2, 4, atau 6 harakat.",
      example: "نَسْتَعِينُ (waqaf)",
      highlight: "نُ → نْ"
    }
  },

  // --- 3.5 Mad Iwad ---
  {
    id: 32,
    type: "ayat",
    category: "mad",
    subtopic: "mad_iwad",
    question: "Saat berwaqaf, tanwin fathah pada akhir kata dibaca menjadi mad. Ini disebut?",
    arabic: "عَلِيمًا",
    options: ["Mad Thabi'i", "Mad Iwad", "Mad Badal", "Mad 'Aridh"],
    answer: 1,
    explanation: {
      title: "Mad Iwad",
      text: "Tanwin fathah (ً) di akhir kata, saat waqaf tanwin dihilangkan dan dibaca seperti alif panjang 2 harakat. Ini disebut Mad Iwad (pengganti).",
      example: "عَلِيمًا",
      highlight: "مًا → مَا"
    }
  },
  {
    id: 33,
    type: "ayat",
    category: "mad",
    subtopic: "mad_iwad",
    question: "Lafaz ini bila diwaqafkan dibaca 'maulaa', tanwin berubah jadi alif. Hukumnya?",
    arabic: "مَوْلًى",
    options: ["Mad Jaiz Munfasil", "Mad 'Aridh", "Mad Iwad", "Mad Thabi'i"],
    answer: 2,
    explanation: {
      title: "Mad Iwad",
      text: "Tanwin fathah pada ta' marbutah atau alif maqsurah saat waqaf dibaca panjang 2 harakat = Mad Iwad.",
      example: "مَوْلًى → مَوْلَا",
      highlight: "لًى → لَا"
    }
  },

  // --- 3.6 Mad Badal ---
  {
    id: 34,
    type: "ayat",
    category: "mad",
    subtopic: "mad_badal",
    question: "Mad pada lafaz 'آمَنَ' disebut Mad Badal karena?",
    arabic: "آمَنَ",
    options: [
      "Alif bertemu hamzah di depannya",
      "Asal bacaannya adalah dua hamzah, hamzah kedua diganti (badal) dengan alif mad",
      "Ada dua mad berdekatan",
      "Hamzah berharakat bertemu alif"
    ],
    answer: 1,
    explanation: {
      title: "Mad Badal",
      text: "Asalnya 'أَأْمَنَ', hamzah kedua diganti alif menjadi 'آمَنَ'. Alif ini disebut mad badal, panjang 2 harakat.",
      example: "آمَنَ",
      highlight: "آ"
    }
  },
  {
    id: 35,
    type: "ayat",
    category: "mad",
    subtopic: "mad_badal",
    question: "Berapa harakat panjang Mad Badal?",
    arabic: "إِيمَانًا",
    options: ["2 Harakat", "4 Harakat", "6 Harakat", "Bebas 2–6"],
    answer: 0,
    explanation: {
      title: "Mad Badal",
      text: "Mad Badal panjangnya 2 harakat (sama dengan Mad Thabi'i), karena tidak ada sebab yang mewajibkan pemanjangan lebih.",
      example: "إِيمَانًا",
      highlight: "إِي"
    }
  },

  // --- 3.7 Mad Lin ---
  {
    id: 36,
    type: "ayat",
    category: "mad",
    subtopic: "mad_lin",
    question: "Hukum apa yang berlaku pada Waw sukun setelah fathah di akhir kata saat diwaqafkan?",
    arabic: "قُرَيْشٍ",
    options: ["Mad Thabi'i", "Mad Lin", "Mad 'Aridh", "Mad Wajib Muttasil"],
    answer: 1,
    explanation: {
      title: "Mad Lin",
      text: "Ya sukun (يْ) setelah fathah di tengah kata, kemudian diwaqafkan. Dinamakan Mad Lin karena lunaknya keluar huruf tersebut. Boleh 2, 4, atau 6 harakat.",
      example: "قُرَيْشٍ",
      highlight: "يْشٍ (waqaf)"
    }
  },
  {
    id: 37,
    type: "teori",
    category: "mad",
    subtopic: "mad_lin",
    question: "Huruf Lin (huruf layyinah) adalah?",
    options: [
      "Alif dan Waw",
      "Waw sukun dan Ya sukun setelah fathah",
      "Nun dan Mim bertasydid",
      "Huruf-huruf pembuka surah"
    ],
    answer: 1,
    explanation: {
      title: "Mad Lin",
      text: "Huruf Lin adalah Waw (وْ) dan Ya (يْ) yang sukun dan huruf sebelumnya berharakat fathah. Saat diwaqafkan, bacaannya memanjang = Mad Lin.",
      example: "خَوْفٍ / قُرَيْشٍ",
      highlight: "وْ / يْ"
    }
  },

  // --- 3.8 Mad Lazim Kalimi Mutsaqqal ---
  {
    id: 38,
    type: "ayat",
    category: "mad",
    subtopic: "mad_lazim_kalimi_mutsaqqal",
    question: "Mad bertemu tasydid dalam satu kata wajib dibaca 6 harakat. Ini disebut?",
    arabic: "الْحَاقَّةُ",
    options: ["Mad Wajib Muttasil", "Mad Lazim Kalimi Mutsaqqal", "Mad 'Aridh", "Mad Lazim Harfi"],
    answer: 1,
    explanation: {
      title: "Mad Lazim Kalimi Mutsaqqal",
      text: "Alif mad (حَا) bertemu qaf bertasydid (قَّ) dalam satu kata. Lazim = wajib, Mutsaqqal = berat/bertasydid. Panjang 6 harakat.",
      example: "الْحَاقَّةُ",
      highlight: "حَاقَّ"
    }
  },
  {
    id: 39,
    type: "ayat",
    category: "mad",
    subtopic: "mad_lazim_kalimi_mutsaqqal",
    question: "Berapa harakat wajib pada Mad Lazim Kalimi Mutsaqqal?",
    arabic: "وَلَا الضَّالِّينَ",
    options: ["2 harakat", "4 harakat", "6 harakat", "Bebas"],
    answer: 2,
    explanation: {
      title: "Mad Lazim Kalimi Mutsaqqal",
      text: "Pada 'الضَّالِّينَ', terdapat alif mad (الَّ) bertemu lam bertasydid (لِّ). Harus dibaca 6 harakat, tidak boleh kurang.",
      example: "وَلَا الضَّالِّينَ",
      highlight: "الِّ"
    }
  },

  // --- 3.9 Mad Lazim Kalimi Mukhaffaf ---
  {
    id: 40,
    type: "teori",
    category: "mad",
    subtopic: "mad_lazim_kalimi_mukhaffaf",
    question: "Mad Lazim Kalimi Mukhaffaf terjadi ketika mad bertemu?",
    options: ["Tasydid dalam satu kata", "Sukun asli dalam satu kata", "Hamzah dalam satu kata", "Tasydid di lain kata"],
    answer: 1,
    explanation: {
      title: "Mad Lazim Kalimi Mukhaffaf",
      text: "Mad bertemu sukun ASLI (bukan karena waqaf) dalam satu kata. Dibaca 6 harakat. Contoh paling terkenal adalah lafaz 'آلْآنَ' dalam QS Yunus.",
      example: "آلْآنَ",
      highlight: "آلْ"
    }
  },
  {
    id: 41,
    type: "ayat",
    category: "mad",
    subtopic: "mad_lazim_kalimi_mukhaffaf",
    question: "Lafaz 'آلْآنَ' dalam surah Yunus termasuk Mad Lazim Kalimi Mukhaffaf karena?",
    arabic: "آلْآنَ",
    options: [
      "Mad bertemu hamzah",
      "Mad bertemu tasydid",
      "Mad bertemu sukun asli dalam satu kata",
      "Mad di huruf pembuka surah"
    ],
    answer: 2,
    explanation: {
      title: "Mad Lazim Kalimi Mukhaffaf",
      text: "Alif mad (آ) bertemu Lam sukun asli (لْ) dalam satu kata. Tidak ada tasydid, sehingga disebut Mukhaffaf (ringan). Wajib 6 harakat.",
      example: "آلْآنَ",
      highlight: "آلْ"
    }
  },

  // --- 3.10 Mad Lazim Harfi Mutsaqqal ---
  {
    id: 42,
    type: "teori",
    category: "mad",
    subtopic: "mad_lazim_harfi_mutsaqqal",
    question: "Mad Lazim Harfi Mutsaqqal terdapat pada?",
    options: [
      "Tengah ayat biasa",
      "Huruf pembuka surah (fawatihus suwar) yang diidghamkan",
      "Akhir kata saat waqaf",
      "Kata berganda hamzah"
    ],
    answer: 1,
    explanation: {
      title: "Mad Lazim Harfi Mutsaqqal",
      text: "Terdapat di huruf pembuka surah yang memiliki 3 huruf ejaan dan huruf tengahnya berupa mad, lalu huruf berikutnya diidghamkan. Contoh: Alif Lam Mim (الم) — Lam diidghamkan ke Mim.",
      example: "الم",
      highlight: "لم"
    }
  },
  {
    id: 43,
    type: "ayat",
    category: "mad",
    subtopic: "mad_lazim_harfi_mutsaqqal",
    question: "Pada 'الم' di awal surah Al-Baqarah, huruf 'Lam' termasuk mad lazim harfi karena?",
    arabic: "الم",
    options: [
      "Lam bertasydid dengan huruf setelahnya",
      "Lam memiliki 3 ejaan (لَامْ) dengan huruf tengah mad dan diidghamkan ke Mim",
      "Lam bertemu hamzah",
      "Lam di akhir ayat"
    ],
    answer: 1,
    explanation: {
      title: "Mad Lazim Harfi Mutsaqqal",
      text: "Lam (ل) dieja 'لَامْ' — tiga huruf, huruf tengahnya alif (mad), dan huruf akhirnya mim yang diidghamkan ke huruf berikutnya (م). Panjang 6 harakat.",
      example: "الم",
      highlight: "لَامْ → لَام م"
    }
  },

  // --- 3.11 Mad Lazim Harfi Mukhaffaf ---
  {
    id: 44,
    type: "teori",
    category: "mad",
    subtopic: "mad_lazim_harfi_mukhaffaf",
    question: "Perbedaan Mad Lazim Harfi Mukhaffaf dengan Mutsaqqal adalah?",
    options: [
      "Mukhaffaf lebih panjang",
      "Mukhaffaf tanpa idgham, Mutsaqqal dengan idgham",
      "Mukhaffaf ada di tengah ayat",
      "Mukhaffaf hanya pada surah Al-Baqarah"
    ],
    answer: 1,
    explanation: {
      title: "Mad Lazim Harfi Mukhaffaf",
      text: "Mukhaffaf = ringan = tidak ada idgham. Contoh: huruf 'ن' (Nun) dieja 'نُونْ', huruf tengahnya waw mad, dan tidak diidghamkan ke huruf berikutnya.",
      example: "ن (Nun) = نُونْ",
      highlight: "و"
    }
  },
  {
    id: 45,
    type: "ayat",
    category: "mad",
    subtopic: "mad_lazim_harfi_mukhaffaf",
    question: "Huruf pembuka surah 'ق' (Qaf) pada QS. Al-Qaf termasuk Mad Lazim Harfi Mukhaffaf karena?",
    arabic: "ق",
    options: [
      "Dieja قَافْ — tengahnya alif mad, huruf akhir tidak diidghamkan",
      "Dieja قَافْ — huruf akhir diidghamkan ke huruf berikutnya",
      "Qaf bertemu hamzah",
      "Qaf bertemu tasydid"
    ],
    answer: 0,
    explanation: {
      title: "Mad Lazim Harfi Mukhaffaf",
      text: "Qaf dieja 'قَافْ' — tiga huruf, huruf tengahnya alif (mad), dan huruf akhirnya (fa) tidak diidghamkan = Mukhaffaf. Panjang 6 harakat.",
      example: "ق",
      highlight: "قَافْ"
    }
  },

  // --- 3.12 Mad Silah Qashirah ---
  {
    id: 46,
    type: "ayat",
    category: "mad",
    subtopic: "mad_silah_qashirah",
    question: "Hukum apa yang berlaku pada Ha dhamir (هُ/هِ) yang tidak bertemu hamzah?",
    arabic: "إِنَّهُ كَانَ",
    options: ["Mad Thabi'i", "Mad Silah Thawilah", "Mad Silah Qashirah", "Mad Badal"],
    answer: 2,
    explanation: {
      title: "Mad Silah Qashirah",
      text: "Ha dhamir (هُ) tidak bertemu hamzah di kata berikutnya. Ha dhamir dipanjangkan 2 harakat (setara mad thabi'i).",
      example: "إِنَّهُ كَانَ",
      highlight: "هُ كَ"
    }
  },
  {
    id: 47,
    type: "teori",
    category: "mad",
    subtopic: "mad_silah_qashirah",
    question: "Mad Silah Qashirah hanya berlaku untuk?",
    options: [
      "Semua huruf Ha",
      "Ha dhamir (kata ganti orang ketiga laki-laki) yang tidak bertemu hamzah",
      "Ha di awal kata",
      "Ha di akhir ayat"
    ],
    answer: 1,
    explanation: {
      title: "Mad Silah Qashirah",
      text: "Mad Silah hanya untuk Ha dhamir (هُ/هِ), yaitu kata ganti orang ke-3 laki-laki. Qashirah karena tidak bertemu hamzah, panjangnya 2 harakat.",
      example: "إِنَّهُ كَانَ",
      highlight: "هُ"
    }
  },

  // --- 3.13 Mad Silah Thawilah ---
  {
    id: 48,
    type: "ayat",
    category: "mad",
    subtopic: "mad_silah_thawilah",
    question: "Ha dhamir bertemu hamzah di kata berikutnya. Apa hukum madnya?",
    arabic: "عِندَهُ أُمُّ الْكِتَابِ",
    options: ["Mad Silah Qashirah", "Mad Wajib Muttasil", "Mad Silah Thawilah", "Mad Jaiz Munfasil"],
    answer: 2,
    explanation: {
      title: "Mad Silah Thawilah",
      text: "Ha dhamir (هُ) bertemu hamzah (أُ) di kata berikutnya. Dipanjangkan 4–5 harakat, sama seperti Mad Jaiz Munfasil.",
      example: "عِندَهُ أُمُّ الْكِتَابِ",
      highlight: "هُ أُ"
    }
  },
  {
    id: 49,
    type: "teori",
    category: "mad",
    subtopic: "mad_silah_thawilah",
    question: "Perbedaan Mad Silah Qashirah dan Mad Silah Thawilah adalah?",
    options: [
      "Qashirah lebih panjang",
      "Thawilah bertemu hamzah, Qashirah tidak bertemu hamzah",
      "Qashirah bertemu hamzah, Thawilah tidak",
      "Keduanya sama saja"
    ],
    answer: 1,
    explanation: {
      title: "Mad Silah Thawilah vs Qashirah",
      text: "Thawilah = panjang, karena Ha dhamir bertemu hamzah (dipanjang 4–5 harakat). Qashirah = pendek, Ha dhamir tidak bertemu hamzah (2 harakat).",
      example: "عِندَهُ أُمُّ",
      highlight: "هُ أُ"
    }
  },

  // --- 3.14 Mad Tamkin ---
  {
    id: 50,
    type: "ayat",
    category: "mad",
    subtopic: "mad_tamkin",
    question: "Ya bertasydid bertemu Ya sukun di kata yang sama disebut?",
    arabic: "أُمِّيِّينَ",
    options: ["Mad Wajib Muttasil", "Mad Tamkin", "Mad Badal", "Mad Thabi'i"],
    answer: 1,
    explanation: {
      title: "Mad Tamkin",
      text: "Ya bertasydid (يِّ) bertemu Ya sukun (يْ). Waw sebelumnya membentuk mad tamkin, dibaca 2 harakat untuk menempatkan (tamkin) kedua Ya dengan benar.",
      example: "أُمِّيِّينَ",
      highlight: "يِّيـ"
    }
  },
  {
    id: 51,
    type: "teori",
    category: "mad",
    subtopic: "mad_tamkin",
    question: "Mad Tamkin berfungsi untuk?",
    options: [
      "Membedakan kalimat tanya",
      "Memisahkan dua Ya agar tidak bercampur bunyinya",
      "Mengganti tanwin",
      "Memanjangkan huruf mad di akhir ayat"
    ],
    answer: 1,
    explanation: {
      title: "Mad Tamkin",
      text: "Tamkin artinya 'menempatkan'. Mad ini bertujuan memisahkan dua Ya (yang bertasydid dan yang sukun) agar pengucapannya tepat, panjang 2 harakat.",
      example: "حُيِّيتُم",
      highlight: "يِّيـ"
    }
  },

  // --- 3.15 Mad Farqi ---
  {
    id: 52,
    type: "teori",
    category: "mad",
    subtopic: "mad_farqi",
    question: "Mad Farqi berfungsi untuk?",
    options: [
      "Mengganti hamzah",
      "Membedakan antara kalimat tanya (istifham) dan bukan tanya",
      "Memanjangkan waw sukun",
      "Menunjukkan tasydid"
    ],
    answer: 1,
    explanation: {
      title: "Mad Farqi",
      text: "Farqi = pembeda. Mad ini memanjangkan bacaan hingga 6 harakat untuk membedakan antara kalimat tanya dan kalimat berita, saat dua hamzah bertemu.",
      example: "آللهُ خَيْرٌ",
      highlight: "آلـ"
    }
  },
  {
    id: 53,
    type: "ayat",
    category: "mad",
    subtopic: "mad_farqi",
    question: "Berapa harakat Mad Farqi pada lafaz 'آللهُ' dalam QS. An-Naml: 59?",
    arabic: "آللهُ خَيْرٌ",
    options: ["2 harakat", "4 harakat", "6 harakat", "Bebas"],
    answer: 2,
    explanation: {
      title: "Mad Farqi",
      text: "Mad Farqi wajib dibaca 6 harakat, untuk membedakan bahwa lafaz ini adalah kalimat tanya (istifham), bukan menyebut nama Allah biasa.",
      example: "آللهُ خَيْرٌ",
      highlight: "آللهُ"
    }
  },

  // ============================================================
  // 4. QALQALAH
  // ============================================================

  // --- 4.1 Qalqalah Sughra ---
  {
    id: 54,
    type: "ayat",
    category: "qalqalah",
    subtopic: "qalqalah_sughra",
    question: "Qalqalah pada huruf yang mati di tengah kata disebut?",
    arabic: "يَجْعَلُ",
    options: ["Qalqalah Kubra", "Qalqalah Sughra", "Izhar", "Ikhfa"],
    answer: 1,
    explanation: {
      title: "Qalqalah Sughra",
      text: "Jim (ج) sukun di tengah kata 'يَجْعَلُ'. Huruf qalqalah (ق ط ب ج د) yang mati di tengah kata = Qalqalah Sughra, pantulan ringan.",
      example: "يَجْعَلُ",
      highlight: "جْ"
    }
  },
  {
    id: 55,
    type: "ayat",
    category: "qalqalah",
    subtopic: "qalqalah_sughra",
    question: "Huruf Ba (ب) sukun di tengah kata pada lafaz ini menghasilkan hukum apa?",
    arabic: "أَبْصَارَهُمْ",
    options: ["Qalqalah Kubra", "Ikhfa Syafawi", "Qalqalah Sughra", "Idgham"],
    answer: 2,
    explanation: {
      title: "Qalqalah Sughra",
      text: "Ba (بْ) sukun di tengah kata adalah huruf qalqalah yang mati di tengah = Qalqalah Sughra. Dipantulkan ringan.",
      example: "أَبْصَارَهُمْ",
      highlight: "بْصَ"
    }
  },
  {
    id: 56,
    type: "teori",
    category: "qalqalah",
    subtopic: "qalqalah_sughra",
    question: "Huruf-huruf Qalqalah terkumpul dalam?",
    options: ["قُطُبُ جَدٍّ", "ء ه ع ح غ خ", "ي ن م و", "ب ت ث ج ح"],
    answer: 0,
    explanation: {
      title: "Huruf Qalqalah",
      text: "Lima huruf qalqalah: ق ط ب ج د terkumpul dalam singkatan 'قُطُبُ جَدٍّ' (Qutbun Jaddin).",
      example: "قَدْ / بَابٍ / جَعَلَ",
      highlight: "ق ط ب ج د"
    }
  },

  // --- 4.2 Qalqalah Kubra ---
  {
    id: 57,
    type: "ayat",
    category: "qalqalah",
    subtopic: "qalqalah_kubra",
    question: "Hukum pantulan di akhir ayat saat berhenti (waqaf) disebut?",
    arabic: "الْفَلَقِ",
    options: ["Qalqalah Sughra", "Izhar", "Qalqalah Kubra", "Tafkhim"],
    answer: 2,
    explanation: {
      title: "Qalqalah Kubra",
      text: "Qaf (ق) di akhir kata karena waqaf. Huruf qalqalah yang waqaf = Qalqalah Kubra, pantulan lebih kuat dari Sughra.",
      example: "الْفَلَقِ",
      highlight: "قِ (waqaf)"
    }
  },
  {
    id: 58,
    type: "ayat",
    category: "qalqalah",
    subtopic: "qalqalah_kubra",
    question: "Saat diwaqafkan pada lafaz 'الْأَحَدُ', hukum apa yang berlaku pada Dal?",
    arabic: "الْأَحَدُ",
    options: ["Qalqalah Sughra", "Qalqalah Kubra", "Mad 'Aridh", "Izhar"],
    answer: 1,
    explanation: {
      title: "Qalqalah Kubra",
      text: "Dal (د) di akhir kata. Saat diwaqafkan, Dal menjadi sukun karena waqaf = Qalqalah Kubra. Dipantulkan dengan kuat.",
      example: "الْأَحَدُ (waqaf)",
      highlight: "دُ → دْ"
    }
  },
  {
    id: 59,
    type: "teori",
    category: "qalqalah",
    subtopic: "qalqalah_kubra",
    question: "Qalqalah Kubra lebih kuat dari Sughra karena?",
    options: [
      "Terjadi di tengah kata",
      "Terjadi di akhir kata saat waqaf sehingga pantulannya lebih kuat",
      "Bertemu dengan huruf tertentu",
      "Karena huruf qalqalahnya bertasydid"
    ],
    answer: 1,
    explanation: {
      title: "Qalqalah Kubra",
      text: "Kubra = besar. Posisinya di akhir kata dan berhenti (waqaf) memberi penekanan lebih sehingga pantulannya lebih kuat dan terdengar jelas.",
      example: "الْفَلَقِ / أَحَدٌ",
      highlight: "قِ / دٌ (waqaf)"
    }
  },

  // ============================================================
  // 5. GHUNNAH
  // ============================================================

  // --- 5.1 Ghunnah Musyaddadah ---
  {
    id: 60,
    type: "ayat",
    category: "ghunnah",
    subtopic: "ghunnah_musyaddadah",
    question: "Hukum pada Nun bertasydid (نّ) disebut?",
    arabic: "إِنَّا",
    options: ["Izhar", "Ikhfa", "Ghunnah Musyaddadah", "Qalqalah"],
    answer: 2,
    explanation: {
      title: "Ghunnah Musyaddadah",
      text: "Setiap Nun atau Mim bertasydid wajib dibaca dengung (ghunnah) selama 2 harakat.",
      example: "إِنَّا",
      highlight: "نَّ"
    }
  },
  {
    id: 61,
    type: "ayat",
    category: "ghunnah",
    subtopic: "ghunnah_musyaddadah",
    question: "Mim bertasydid (مّ) pada lafaz berikut disebut?",
    arabic: "ثُمَّ",
    options: ["Idgham Mimi", "Ikhfa Syafawi", "Ghunnah Musyaddadah", "Izhar"],
    answer: 2,
    explanation: {
      title: "Ghunnah Musyaddadah",
      text: "Mim bertasydid (مَّ) wajib dibaca dengung 2 harakat, sama seperti Nun bertasydid.",
      example: "ثُمَّ",
      highlight: "مَّ"
    }
  },
  {
    id: 62,
    type: "teori",
    category: "ghunnah",
    subtopic: "ghunnah_musyaddadah",
    question: "Ghunnah Musyaddadah terjadi pada?",
    options: [
      "Semua huruf bertasydid",
      "Hanya Nun bertasydid",
      "Nun dan Mim bertasydid",
      "Semua huruf yang bertemu Nun sukun"
    ],
    answer: 2,
    explanation: {
      title: "Ghunnah Musyaddadah",
      text: "Ghunnah Musyaddadah hanya berlaku pada dua huruf: Nun (نّ) dan Mim (مّ) yang bertasydid. Dengung 2 harakat dari pangkal hidung.",
      example: "إِنَّا / ثُمَّ",
      highlight: "نّ / مّ"
    }
  },

  // --- 5.2 Ghunnah pada Idgham Bighunnah ---
  {
    id: 63,
    type: "ayat",
    category: "ghunnah",
    subtopic: "ghunnah_idgham_bighunnah",
    question: "Mengapa terjadi ghunnah saat Nun sukun bertemu Nun berikutnya?",
    arabic: "مِن نِّعْمَةٍ",
    options: [
      "Karena Nun sukun masuk ke Nun dengan dengung (Idgham Bighunnah)",
      "Karena ada dua Nun bertemu",
      "Karena Nun bertasydid",
      "Karena Iqlab"
    ],
    answer: 0,
    explanation: {
      title: "Ghunnah pada Idgham Bighunnah",
      text: "Nun sukun bertemu Nun (huruf idgham bighunnah). Nun sukun masuk ke Nun berikutnya disertai dengung ghunnah 2 harakat.",
      example: "مِن نِّعْمَةٍ",
      highlight: "نْ نِّ"
    }
  },
  {
    id: 64,
    type: "ayat",
    category: "ghunnah",
    subtopic: "ghunnah_idgham_bighunnah",
    question: "Tanwin bertemu huruf Waw menghasilkan ghunnah jenis apa?",
    arabic: "خَيْرٌ وَأَبْقَى",
    options: [
      "Ghunnah Musyaddadah",
      "Ghunnah pada Iqlab",
      "Ghunnah pada Idgham Bighunnah",
      "Ghunnah pada Ikhfa"
    ],
    answer: 2,
    explanation: {
      title: "Ghunnah pada Idgham Bighunnah",
      text: "Tanwin dhammah bertemu Waw (huruf idgham bighunnah). Tanwin masuk ke Waw disertai ghunnah dengung.",
      example: "خَيْرٌ وَأَبْقَى",
      highlight: "رٌ وَ"
    }
  },

  // --- 5.3 Ghunnah pada Ikhfa ---
  {
    id: 65,
    type: "ayat",
    category: "ghunnah",
    subtopic: "ghunnah_ikhfa",
    question: "Pada Ikhfa Haqiqi, apakah ada ghunnah?",
    arabic: "مَن كَانَ",
    options: [
      "Tidak ada ghunnah",
      "Ada ghunnah, karena Nun disamarkan disertai dengung",
      "Ghunnah hanya untuk Mim",
      "Ghunnah kuat seperti Idgham"
    ],
    answer: 1,
    explanation: {
      title: "Ghunnah pada Ikhfa",
      text: "Ikhfa Haqiqi menghasilkan ghunnah. Bunyi Nun disamarkan (antara izhar dan idgham) disertai dengung dari hidung.",
      example: "مَن كَانَ",
      highlight: "نْ كَ"
    }
  },
  {
    id: 66,
    type: "teori",
    category: "ghunnah",
    subtopic: "ghunnah_ikhfa",
    question: "Ghunnah pada Ikhfa bersifat?",
    options: [
      "Kuat, lebih dari Idgham",
      "Sedang, lebih lemah dari Idgham Bighunnah",
      "Tidak ada",
      "Sama persis dengan Ghunnah Musyaddadah"
    ],
    answer: 1,
    explanation: {
      title: "Ghunnah pada Ikhfa",
      text: "Tingkatan ghunnah: Ghunnah Musyaddadah > Idgham Bighunnah > Ikhfa > Iqlab. Ghunnah pada Ikhfa lebih lemah karena nun masih tersamar.",
      example: "مَن كَانَ / أَن تَقُولُوا",
      highlight: "نْ كَ"
    }
  },

  // --- 5.4 Ghunnah pada Iqlab ---
  {
    id: 67,
    type: "ayat",
    category: "ghunnah",
    subtopic: "ghunnah_iqlab",
    question: "Apakah terdapat ghunnah pada bacaan Iqlab?",
    arabic: "أَنۢبِئْهُمْ",
    options: [
      "Tidak ada, Iqlab hanya mengubah bunyi",
      "Ada ghunnah pada Mim pengganti Nun",
      "Ghunnah sangat kuat",
      "Ghunnah sama dengan Idgham Bilaghunnah"
    ],
    answer: 1,
    explanation: {
      title: "Ghunnah pada Iqlab",
      text: "Iqlab: Nun berubah jadi Mim tersembunyi. Mim ini disertai ghunnah (dengung), meski samar karena posisinya ikhfa terhadap Ba.",
      example: "أَنۢبِئْهُمْ",
      highlight: "نۢبِ"
    }
  },
  {
    id: 68,
    type: "teori",
    category: "ghunnah",
    subtopic: "ghunnah_iqlab",
    question: "Pada Iqlab, ghunnah muncul karena?",
    options: [
      "Nun bertasydid",
      "Bunyi Nun berubah menjadi Mim yang mengandung dengung",
      "Bertemu huruf halqi",
      "Bertemu huruf syamsiyah"
    ],
    answer: 1,
    explanation: {
      title: "Ghunnah pada Iqlab",
      text: "Ketika Nun/Tanwin berubah jadi Mim (iqlab), Mim itu sendiri membawa sifat ghunnah. Sehingga selalu ada dengung saat Iqlab.",
      example: "مِنۢ بَعْدِ",
      highlight: "نۢ بَ"
    }
  },

  // ============================================================
  // 6. LAM TA'RIF
  // ============================================================

  // --- 6.1 Lam Qamariyah ---
  {
    id: 69,
    type: "ayat",
    category: "lam_tarif",
    subtopic: "lam_qamariyah",
    question: "Alif Lam pada kata berikut dibaca jelas, disebut hukum?",
    arabic: "الْحَمْدُ",
    options: ["Alif Lam Syamsiyah", "Alif Lam Qamariyah", "Idgham", "Ikhfa"],
    answer: 1,
    explanation: {
      title: "Alif Lam Qamariyah",
      text: "Alif Lam bertemu Ha (ح) yang merupakan huruf qamariyah. Lam dibaca jelas, ditandai sukun (الْ).",
      example: "الْحَمْدُ",
      highlight: "الْحَ"
    }
  },
  {
    id: 70,
    type: "ayat",
    category: "lam_tarif",
    subtopic: "lam_qamariyah",
    question: "Lam Ta'rif pada lafaz 'الْقُرْآنُ' termasuk Qamariyah karena?",
    arabic: "الْقُرْآنُ",
    options: [
      "Qaf adalah huruf syamsiyah",
      "Qaf adalah huruf qamariyah sehingga Lam dibaca jelas",
      "Ada mad setelahnya",
      "Bertemu hamzah"
    ],
    answer: 1,
    explanation: {
      title: "Alif Lam Qamariyah",
      text: "Qaf (ق) termasuk 14 huruf qamariyah. Lam dibaca jelas (ada tanda sukun الْ).",
      example: "الْقُرْآنُ",
      highlight: "الْقُ"
    }
  },
  {
    id: 71,
    type: "teori",
    category: "lam_tarif",
    subtopic: "lam_qamariyah",
    question: "Mengapa dinamakan Lam Qamariyah?",
    options: [
      "Karena berhubungan dengan matahari",
      "Karena huruf Qamar (bulan) tidak melebur Lam, Lam tetap tampak jelas",
      "Karena dengungnya lebih kuat",
      "Karena ada di akhir kata"
    ],
    answer: 1,
    explanation: {
      title: "Alif Lam Qamariyah",
      text: "Qamar = bulan. Seperti bulan yang terlihat jelas di malam hari, Lam pada bacaan ini juga terlihat/terdengar jelas karena tidak melebur ke huruf berikutnya.",
      example: "الْبَقَرَةُ / الْكِتَابُ",
      highlight: "الْبَ / الْكِ"
    }
  },

  // --- 6.2 Lam Syamsiyah ---
  {
    id: 72,
    type: "ayat",
    category: "lam_tarif",
    subtopic: "lam_syamsiyah",
    question: "Alif Lam yang langsung masuk ke huruf Syin disebut?",
    arabic: "الشَّمْسُ",
    options: ["Alif Lam Qamariyah", "Alif Lam Syamsiyah", "Izhar", "Mad"],
    answer: 1,
    explanation: {
      title: "Alif Lam Syamsiyah",
      text: "Syin (ش) adalah huruf syamsiyah. Alif Lam tidak dibaca, langsung lebur ke huruf syamsiyah yang menjadi bertasydid.",
      example: "الشَّمْسُ",
      highlight: "الشَّ"
    }
  },
  {
    id: 73,
    type: "ayat",
    category: "lam_tarif",
    subtopic: "lam_syamsiyah",
    question: "Pada lafaz 'الرَّحِيمِ', Lam tidak dibaca karena?",
    arabic: "الرَّحِيمِ",
    options: [
      "Ra adalah huruf syamsiyah, Lam melebur ke Ra",
      "Ra adalah huruf qamariyah",
      "Ada mad setelahnya",
      "Karena Ra memantul"
    ],
    answer: 0,
    explanation: {
      title: "Alif Lam Syamsiyah",
      text: "Ra (ر) adalah huruf syamsiyah. Lam melebur ke Ra, sehingga Ra dibaca bertasydid (الرَّ).",
      example: "الرَّحِيمِ",
      highlight: "الرَّ"
    }
  },
  {
    id: 74,
    type: "teori",
    category: "lam_tarif",
    subtopic: "lam_syamsiyah",
    question: "Mengapa dinamakan Lam Syamsiyah?",
    options: [
      "Karena berhubungan dengan bulan",
      "Karena seperti matahari (syams) yang tersembunyi di siang hari — Lam tersembunyi/tidak terdengar",
      "Karena lebih panjang dari Qamariyah",
      "Karena ada dengung"
    ],
    answer: 1,
    explanation: {
      title: "Alif Lam Syamsiyah",
      text: "Syams = matahari. Seperti bintang yang tidak terlihat saat siang karena tertutup matahari, Lam tidak terdengar karena melebur ke huruf syamsiyah.",
      example: "التَّوْبَةُ / النَّاسِ",
      highlight: "التَّ / النَّ"
    }
  },

  // ============================================================
  // 7. RA TAFKHIM & TARQIQ
  // ============================================================

  // --- 7.1 & 7.3 Ra Tafkhim ---
  {
    id: 75,
    type: "ayat",
    category: "ra",
    subtopic: "ra_tafkhim",
    question: "Bagaimana cara membaca Ra berharakat fathah?",
    arabic: "رَبِّ الْعَالَمِينَ",
    options: ["Tarqiq (Tipis)", "Tafkhim (Tebal)", "Saktah", "Ikhfa"],
    answer: 1,
    explanation: {
      title: "Ra Tafkhim",
      text: "Ra berharakat fathah dibaca tebal (tafkhim). Fathah adalah di antara harakat yang mewajibkan Ra dibaca tebal.",
      example: "رَبِّ",
      highlight: "رَ"
    }
  },
  {
    id: 76,
    type: "ayat",
    category: "ra",
    subtopic: "ra_tafkhim",
    question: "Ra berharakat dhammah pada lafaz berikut dibaca?",
    arabic: "رُزِقُوا",
    options: ["Tarqiq (Tipis)", "Tafkhim (Tebal)", "Imalah", "Biasa saja"],
    answer: 1,
    explanation: {
      title: "Ra Tafkhim",
      text: "Ra berharakat dhammah wajib dibaca tebal (tafkhim). Dhammah termasuk harakat yang mewajibkan Ra tebal.",
      example: "رُزِقُوا",
      highlight: "رُ"
    }
  },
  {
    id: 77,
    type: "ayat",
    category: "ra",
    subtopic: "ra_tafkhim",
    question: "Ra sukun yang didahului huruf berharakat fathah dibaca?",
    arabic: "مَرْيَمَ",
    options: ["Tafkhim (Tebal)", "Tarqiq (Tipis)", "Imalah", "Qalqalah"],
    answer: 0,
    explanation: {
      title: "Ra Tafkhim",
      text: "Ra sukun (رْ) yang huruf sebelumnya berharakat fathah (مَ) dibaca tebal, karena fathah mendominasi.",
      example: "مَرْيَمَ",
      highlight: "مَرْ"
    }
  },

  // --- 7.2 & 7.4 Ra Tarqiq ---
  {
    id: 78,
    type: "ayat",
    category: "ra",
    subtopic: "ra_tarqiq",
    question: "Ra berharakat kasrah dibaca?",
    arabic: "رِزْقًا",
    options: ["Tafkhim (Tebal)", "Tarqiq (Tipis)", "Ghunnah", "Qalqalah"],
    answer: 1,
    explanation: {
      title: "Ra Tarqiq",
      text: "Ra berharakat kasrah wajib dibaca tipis (tarqiq).",
      example: "رِزْقًا",
      highlight: "رِ"
    }
  },
  {
    id: 79,
    type: "ayat",
    category: "ra",
    subtopic: "ra_tarqiq",
    question: "Ra sukun yang didahului kasrah asli pada lafaz 'فِرْعَوْنَ' dibaca?",
    arabic: "فِرْعَوْنَ",
    options: ["Tafkhim (Tebal)", "Tarqiq (Tipis)", "Jaiz (bebas)", "Imalah"],
    answer: 1,
    explanation: {
      title: "Ra Tarqiq",
      text: "Ra sukun (رْ) yang didahului kasrah asli (فِ) dibaca tipis (tarqiq). Kasrah asli adalah kasrah yang memang harakat aslinya, bukan kasrah tambahan.",
      example: "فِرْعَوْنَ",
      highlight: "فِرْ"
    }
  },

  // --- 7.5 Ra Jaiz ---
  {
    id: 80,
    type: "ayat",
    category: "ra",
    subtopic: "ra_jaiz",
    question: "Ra sukun didahului kasrah, tetapi setelahnya ada huruf isti'la (مِصْرَ). Hukum Ra-nya?",
    arabic: "مِصْرَ",
    options: ["Wajib Tafkhim", "Wajib Tarqiq", "Ra Jaiz — boleh tebal atau tipis", "Qalqalah"],
    answer: 2,
    explanation: {
      title: "Ra Jaiz (Boleh Tebal atau Tipis)",
      text: "Ra sukun, sebelumnya kasrah, setelahnya huruf isti'la (ص). Kasrah mendorong tarqiq, huruf isti'la mendorong tafkhim — hasilnya Jaiz (boleh keduanya).",
      example: "مِصْرَ",
      highlight: "صْرَ"
    }
  },
  {
    id: 81,
    type: "teori",
    category: "ra",
    subtopic: "ra_jaiz",
    question: "Huruf-huruf Isti'la yang memengaruhi Ra Jaiz adalah?",
    options: [
      "ق ط ب ج د",
      "خ ص ض ط ظ غ ق",
      "ي ن م و",
      "ء ه ع ح غ خ"
    ],
    answer: 1,
    explanation: {
      title: "Huruf Isti'la",
      text: "Tujuh huruf isti'la: خ ص ض ط ظ غ ق. Huruf-huruf ini bernada tinggi (tebal). Saat Ra sukun diikuti huruf isti'la setelah kasrah, muncul khilaf tebal/tipis.",
      example: "مِصْرَ / لِلْقِطْرِ",
      highlight: "ص / ط"
    }
  },

  // ============================================================
  // 8. AYAT-AYAT GHARIB
  // ============================================================

  // --- 8.1 Isymam ---
  {
    id: 82,
    type: "ayat",
    category: "gharib",
    subtopic: "isymam",
    question: "Terdapat bacaan monyong bibir tanpa suara pada kata 'Laa Ta'mannaa'. Disebut?",
    arabic: "لَا تَأْمَنَّا",
    options: ["Imalah", "Tashil", "Isymam", "Naql"],
    answer: 2,
    explanation: {
      title: "Isymam",
      text: "Isymam adalah isyarat bibir dimonyongkan (seperti dhammah) pada huruf yang disukunkan, tanpa suara. Terjadi pada QS. Yusuf: 11.",
      example: "لَا تَأْمَنَّا",
      highlight: "مَنَّا (pada Nun pertama)"
    }
  },
  {
    id: 83,
    type: "teori",
    category: "gharib",
    subtopic: "isymam",
    question: "Isymam dilakukan dengan cara?",
    options: [
      "Memanjangkan bacaan 6 harakat",
      "Mencucukan/memajukan bibir sebagai isyarat dhammah tanpa mengeluarkan suara",
      "Memiringkan fathah ke kasrah",
      "Berhenti sejenak tanpa nafas"
    ],
    answer: 1,
    explanation: {
      title: "Isymam",
      text: "Isymam artinya 'mencium'. Cara: setelah membaca huruf sebelum Nun yang disukunkan, bibir dimonyongkan sebagai isyarat bunyi dhammah — tanpa suara dan tanpa nafas baru.",
      example: "لَا تَأْمَنَّا",
      highlight: "أَمَنَّ"
    }
  },
  {
    id: 84,
    type: "teori",
    category: "gharib",
    subtopic: "isymam",
    question: "Isymam hanya terdapat di berapa tempat dalam Al-Qur'an riwayat Hafs?",
    options: ["1 tempat", "2 tempat", "5 tempat", "Banyak tempat"],
    answer: 0,
    explanation: {
      title: "Isymam",
      text: "Dalam riwayat Hafs dari 'Ashim, Isymam hanya terdapat di SATU tempat yaitu QS. Yusuf ayat 11 pada lafaz 'لَا تَأْمَنَّا'.",
      example: "لَا تَأْمَنَّا (QS. Yusuf: 11)",
      highlight: "تَأْمَنَّا"
    }
  },

  // --- 8.2 Imalah ---
  {
    id: 85,
    type: "ayat",
    category: "gharib",
    subtopic: "imalah",
    question: "Bacaan memiringkan bunyi fathah ke kasrah pada Surah Hud: 41 disebut?",
    arabic: "مَجْر۪ىٰهَا",
    options: ["Isymam", "Tashil", "Imalah", "Saktah"],
    answer: 2,
    explanation: {
      title: "Imalah",
      text: "Imalah = memiringkan. Fathah dibaca menuju kasrah sehingga terdengar antara 'a' dan 'e'. Hanya pada QS. Hud: 41.",
      example: "مَجْر۪ىٰهَا",
      highlight: "جْر۪ىٰ"
    }
  },
  {
    id: 86,
    type: "teori",
    category: "gharib",
    subtopic: "imalah",
    question: "Imalah dalam riwayat Hafs hanya terdapat di?",
    options: [
      "Surah Al-Kahfi",
      "Surah Hud ayat 41 pada lafaz مَجْرِيهَا",
      "Surah Yusuf",
      "Surah An-Naml"
    ],
    answer: 1,
    explanation: {
      title: "Imalah",
      text: "Dalam riwayat Hafs, Imalah hanya ada satu tempat: QS. Hud: 41 pada 'مَجْر۪ىٰهَا'. Harakat Ra dibaca miring antara fathah dan kasrah.",
      example: "بِسْمِ اللهِ مَجْر۪ىٰهَا",
      highlight: "مَجْر۪ىٰ"
    }
  },
  {
    id: 87,
    type: "teori",
    category: "gharib",
    subtopic: "imalah",
    question: "Suara yang dihasilkan dari Imalah terdengar seperti?",
    options: [
      "Murni huruf 'a'",
      "Murni huruf 'i'",
      "Antara 'a' dan 'e' (seperti 'e' pada kata 'sate')",
      "Seperti 'u'"
    ],
    answer: 2,
    explanation: {
      title: "Imalah",
      text: "Imalah menghasilkan bunyi yang condong antara fathah ('a') dan kasrah ('i'/'e'). Terdengar seperti 'e' dalam bahasa Indonesia pada kata 'sate' atau 'bale'.",
      example: "مَجْر۪ىٰهَا → 'majreyhaa'",
      highlight: "ر۪ىٰ"
    }
  },

  // --- 8.3 Saktah ---
  {
    id: 88,
    type: "teori",
    category: "gharib",
    subtopic: "saktah",
    question: "Berhenti sejenak tanpa bernafas disebut?",
    options: ["Waqaf", "Saktah", "Washal", "Naql"],
    answer: 1,
    explanation: {
      title: "Saktah",
      text: "Saktah = berhenti sejenak selama 2 harakat tanpa mengambil nafas baru, kemudian melanjutkan bacaan.",
      example: "كَلا بَلْ ۜ رَانَ",
      highlight: "بَلْ ۜ رَانَ"
    }
  },
  {
    id: 89,
    type: "ayat",
    category: "gharib",
    subtopic: "saktah",
    question: "Terdapat tanda saktah (ۜ) di antara 'مَرْقَدِنَا' dan 'هَذَا'. Artinya?",
    arabic: "مِن مَّرْقَدِنَا ۜ هَٰذَا",
    options: [
      "Berhenti dan ambil nafas",
      "Berhenti sejenak tanpa ambil nafas, lalu lanjutkan",
      "Boleh berhenti boleh tidak",
      "Harus disambung"
    ],
    answer: 1,
    explanation: {
      title: "Saktah",
      text: "Tanda (ۜ) menunjukkan saktah: berhenti sejenak ±2 harakat tanpa nafas. Ini di QS. Yasin: 52.",
      example: "مِن مَّرْقَدِنَا ۜ هَٰذَا",
      highlight: "نَا ۜ هَٰ"
    }
  },
  {
    id: 90,
    type: "teori",
    category: "gharib",
    subtopic: "saktah",
    question: "Dalam riwayat Hafs, ada berapa tempat saktah yang disepakati?",
    options: ["1 tempat", "2 tempat", "4 tempat", "6 tempat"],
    answer: 2,
    explanation: {
      title: "Saktah",
      text: "Dalam riwayat Hafs, terdapat 4 tempat saktah yang masyhur: (1) QS. Al-Kahfi: 1-2, (2) QS. Yasin: 52, (3) QS. Al-Qiyamah: 27, (4) QS. Al-Muthaffifin: 14.",
      example: "4 tempat saktah Hafs",
      highlight: "الكهف / يس / القيامة / المطففين"
    }
  },

  // --- 8.4 Tashil ---
  {
    id: 91,
    type: "ayat",
    category: "gharib",
    subtopic: "tashil",
    question: "Membaca hamzah kedua dengan samar antara hamzah dan alif disebut?",
    arabic: "ءَا۬عْجَمِيٌّ",
    options: ["Tashil", "Imalah", "Isymam", "Saktah"],
    answer: 0,
    explanation: {
      title: "Tashil",
      text: "Tashil = memudahkan. Hamzah kedua dari dua hamzah berdekatan dibaca samar, antara hamzah dan alif.",
      example: "ءَا۬عْجَمِيٌّ",
      highlight: "ءَا۬"
    }
  },
  {
    id: 92,
    type: "teori",
    category: "gharib",
    subtopic: "tashil",
    question: "Tashil terjadi pada kondisi apa?",
    options: [
      "Satu hamzah di awal kata",
      "Dua hamzah berdekatan, hamzah kedua dibaca dengan samar/lunak",
      "Hamzah bertemu mad",
      "Hamzah di akhir kata saat waqaf"
    ],
    answer: 1,
    explanation: {
      title: "Tashil",
      text: "Tashil terjadi saat ada dua hamzah dalam satu kata atau berdekatan. Hamzah kedua tidak dibaca penuh seperti hamzah, melainkan samar antara hamzah dan alif.",
      example: "ءَا۬عْجَمِيٌّ / أَأَنذَرْتَهُمْ",
      highlight: "ءَا۬ / أَأَ"
    }
  },
  {
    id: 93,
    type: "ayat",
    category: "gharib",
    subtopic: "tashil",
    question: "Pada 'أَأَنذَرْتَهُمْ', dalam riwayat tertentu hamzah kedua dibaca Tashil. Artinya?",
    arabic: "أَأَنذَرْتَهُمْ",
    options: [
      "Hamzah kedua dibaca penuh",
      "Hamzah kedua dibuang",
      "Hamzah kedua dibaca samar (antara hamzah dan alif)",
      "Hamzah kedua diganti Waw"
    ],
    answer: 2,
    explanation: {
      title: "Tashil",
      text: "Tashil: hamzah kedua (أَ yang kedua) tidak dibaca tegas seperti hamzah, melainkan dengan suara yang lebih lunak, antara bunyi hamzah dan alif.",
      example: "أَأَنذَرْتَهُمْ",
      highlight: "أَأَ"
    }
  },

  // --- 8.5 Naql ---
  {
    id: 94,
    type: "ayat",
    category: "gharib",
    subtopic: "naql",
    question: "Memindahkan harakat hamzah ke huruf sukun sebelumnya disebut?",
    arabic: "بِئْسَ الِاسْمُ",
    options: ["Imalah", "Tashil", "Saktah", "Naql"],
    answer: 3,
    explanation: {
      title: "Naql",
      text: "Naql = memindahkan. Harakat dari hamzah washol (ا) dipindahkan ke huruf sukun sebelumnya, sehingga hamzah tidak terbaca. Terjadi di QS. Al-Hujurat: 11.",
      example: "بِئْسَ الِاسْمُ → بِئْسَ لِاسْمُ",
      highlight: "الِاسْمُ"
    }
  },
  {
    id: 95,
    type: "teori",
    category: "gharib",
    subtopic: "naql",
    question: "Naql dalam riwayat Hafs terdapat di berapa tempat?",
    options: ["1 tempat", "2 tempat", "3 tempat", "Banyak tempat"],
    answer: 0,
    explanation: {
      title: "Naql",
      text: "Naql dalam riwayat Hafs hanya terjadi di SATU tempat: QS. Al-Hujurat: 11 pada lafaz 'بِئْسَ الِاسْمُ'. Harakat kasrah hamzah pindah ke lam.",
      example: "بِئْسَ الِاسْمُ",
      highlight: "الِاسْمُ"
    }
  },
  {
    id: 96,
    type: "ayat",
    category: "gharib",
    subtopic: "naql",
    question: "Setelah terjadi Naql pada 'بِئْسَ الِاسْمُ', bacaannya menjadi?",
    arabic: "بِئْسَ الِاسْمُ",
    options: [
      "بِئْسَ الاسْمُ (Alif Lam dibaca biasa)",
      "بِئْسَ لِسْمُ (Lam berharakat kasrah, hamzah tidak dibaca)",
      "بِئْسَ أَلِاسْمُ",
      "بِئْسَ لاسْمُ"
    ],
    answer: 1,
    explanation: {
      title: "Naql",
      text: "Harakat kasrah dari hamzah washal dipindah ke Lam sukun → Lam menjadi berharakat kasrah (لِ), dan hamzah washal tidak terbaca.",
      example: "بِئْسَ لِسْمُ",
      highlight: "لِسْمُ"
    }
  },

  // --- 8.6 Mad dan Qashr pada kata tertentu ---
  {
    id: 97,
    type: "ayat",
    category: "gharib",
    subtopic: "mad_qashr_khusus",
    question: "Pada lafaz 'أَنَا' (Ana/Saya), kapan alif akhirnya dibaca memanjang?",
    arabic: "أَنَا",
    options: [
      "Selalu dipanjangkan",
      "Dipanjangkan hanya saat washal (bersambung dengan kata berikutnya)",
      "Dipanjangkan hanya saat waqaf",
      "Tidak pernah dipanjangkan"
    ],
    answer: 2,
    explanation: {
      title: "Mad dan Qashr pada kata tertentu",
      text: "Lafaz 'أَنَا': alif akhirnya dipanjangkan saat waqaf (berhenti), dibaca 'Anaa'. Saat washal, alif bisa dibaca pendek atau dibuang tergantung riwayat.",
      example: "أَنَا (waqaf) → Anaa",
      highlight: "أَنَا"
    }
  },
  {
    id: 98,
    type: "ayat",
    category: "gharib",
    subtopic: "saktah",
    question: "Pada QS. Al-Haqqah: 28-29, terdapat bacaan Saktah Jaiz antara 'maaliyah' dan 'halaka'. Disebut saktah karena?",
    arabic: "مَالِيَهْ ۜ هَلَكَ",
    options: [
      "Berhenti lama",
      "Berhenti sejenak tanpa bernapas",
      "Langsung disambung tanpa berhenti",
      "Dipanjangkan 6 harakat"
    ],
    answer: 1,
    explanation: {
      title: "Saktah Jaiz",
      text: "Saktah pada 'مَالِيَهْ ۜ هَلَكَ' adalah saktah jaiz (boleh saktah, boleh waqaf). Saktah berarti berhenti sejenak ±2 harakat tanpa mengambil napas baru.",
      example: "مَالِيَهْ ۜ هَلَكَ",
      highlight: "يَهْ ۜ هَ"
    }
  },

  // --- 8.7 Bacaan Khilafiyah Riwayat ---
  {
    id: 99,
    type: "teori",
    category: "gharib",
    subtopic: "khilafiyah_riwayat",
    question: "Riwayat Hafs dari 'Ashim yang paling umum digunakan di Indonesia bersumber dari jalur?",
    options: [
      "Shathibiyah (Thariq Al-Shathibiyyah)",
      "Warsy",
      "Ad-Duri",
      "Al-Bazziy"
    ],
    answer: 0,
    explanation: {
      title: "Riwayat Hafs",
      text: "Hafs dari 'Ashim yang digunakan di Indonesia umumnya berasal dari jalur Shathibiyah. Ada juga jalur Thayyibah yang memiliki sedikit perbedaan pada beberapa hukum bacaan.",
      example: "Mushhaf Indonesia (standar Kemenag)",
      highlight: "Hafs 'an 'Ashim"
    }
  },
  {
    id: 100,
    type: "teori",
    category: "gharib",
    subtopic: "khilafiyah_riwayat",
    question: "Perbedaan antara riwayat Hafs dan Warsy yang paling mencolok adalah?",
    options: [
      "Warsy menggunakan lebih banyak Imalah dan Ra Tarqiq",
      "Hafs lebih banyak menggunakan Imalah",
      "Warsy tidak mengenal Mad Lazim",
      "Hafs tidak mengenal Tashil"
    ],
    answer: 0,
    explanation: {
      title: "Khilafiyah Riwayat",
      text: "Riwayat Warsy (digunakan di Afrika Barat/Utara) lebih banyak menerapkan Imalah pada huruf Ra dan memiliki lebih banyak Ra Tarqiq dibanding Hafs.",
      example: "Warsy: رَبِّ → bisa tarqiq; Hafs: tafkhim",
      highlight: "Warsy vs Hafs"
    }
  },

  // --- 8.8 Waqaf Gharib ---
  {
    id: 101,
    type: "teori",
    category: "gharib",
    subtopic: "waqaf_gharib",
    question: "Waqaf Lazim (م) artinya?",
    options: [
      "Boleh berhenti boleh tidak",
      "Wajib berhenti, makna berubah jika diteruskan",
      "Lebih baik berhenti",
      "Lebih baik tidak berhenti"
    ],
    answer: 1,
    explanation: {
      title: "Waqaf Lazim",
      text: "Waqaf Lazim ditandai (م). Harus berhenti di sini karena jika dilanjutkan, makna ayat berubah atau menjadi tidak tepat.",
      example: "وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللهُ ۗ وَالرَّاسِخُونَ",
      highlight: "إِلَّا اللهُ ۗ"
    }
  },
  {
    id: 102,
    type: "teori",
    category: "gharib",
    subtopic: "waqaf_gharib",
    question: "Tanda waqaf (لا) yang berarti 'tidak boleh berhenti' disebut?",
    options: ["Waqaf Lazim", "Waqaf Mamnu' (terlarang)", "Waqaf Jaiz", "Waqaf Hasan"],
    answer: 1,
    explanation: {
      title: "Waqaf Mamnu' / La Waqfa Fih",
      text: "Tanda (لا) = tidak boleh berhenti di sini karena berhenti akan memutus kalimat yang masih berhubungan erat. Harus diwashalkan.",
      example: "بِسْمِ اللهِ الرَّحْمَٰنِ لا الرَّحِيمِ",
      highlight: "لا"
    }
  },
  {
    id: 103,
    type: "teori",
    category: "gharib",
    subtopic: "waqaf_gharib",
    question: "Tanda waqaf Mu'anaqah (∴ ... ∴) artinya?",
    options: [
      "Boleh berhenti di salah satu titik tiga, tapi tidak keduanya",
      "Harus berhenti di kedua titik tiga",
      "Tidak boleh berhenti di keduanya",
      "Wajib berhenti di titik tiga pertama"
    ],
    answer: 0,
    explanation: {
      title: "Waqaf Mu'anaqah",
      text: "Tanda Mu'anaqah (∴ ∴) berarti boleh berhenti di SALAH SATU titik tiga saja, tidak boleh berhenti di keduanya. Keduanya memiliki makna yang saling berkaitan.",
      example: "QS. Al-Baqarah: 2",
      highlight: "∴ ... ∴"
    }
  },

  // --- 8.9 Bacaan lafadz tertentu yang tidak umum ---
  {
    id: 104,
    type: "ayat",
    category: "gharib",
    subtopic: "lafadz_khusus",
    question: "Lafaz 'بَسْطَةً' dalam QS. Al-Baqarah: 247 dibaca dengan Sin (س) bukan Shad (ص). Ini termasuk?",
    arabic: "بَسْطَةً",
    options: [
      "Kesalahan penulisan mushaf",
      "Bacaan khusus/gharib karena huruf ط (isti'la) membuat sin biasanya diucapkan shad",
      "Bacaan Imalah",
      "Bacaan Tashil"
    ],
    answer: 1,
    explanation: {
      title: "Bacaan Lafadz Khusus",
      text: "Meskipun huruf Tha (ط) setelahnya adalah huruf isti'la yang biasanya membuat Sin berubah jadi Shad, lafaz 'بَسْطَةً' dalam QS. Al-Baqarah: 247 tetap dibaca dengan Sin dalam riwayat Hafs.",
      example: "بَسْطَةً (QS. Al-Baqarah: 247)",
      highlight: "سْطَ"
    }
  },
  {
    id: 105,
    type: "ayat",
    category: "gharib",
    subtopic: "lafadz_khusus",
    question: "Cara baca lafaz 'الصِّرَاطَ' yang benar dalam riwayat Hafs adalah?",
    arabic: "الصِّرَاطَ",
    options: [
      "Dibaca السِّرَاطَ (dengan Sin)",
      "Dibaca الزِّرَاطَ (dengan Zay)",
      "Dibaca الصِّرَاطَ (dengan Shad, karena Tha isti'la mempengaruhi Sin)",
      "Dibaca dengan Isymam"
    ],
    answer: 2,
    explanation: {
      title: "Bacaan Lafadz Khusus — Shad pada Shiraat",
      text: "Dalam riwayat Hafs, 'الصِّرَاطَ' dibaca dengan Shad (ص) karena pengaruh huruf Tha (ط) setelahnya. Ini berbeda dengan sebagian riwayat lain yang membaca Sin atau Zay.",
      example: "الصِّرَاطَ الْمُسْتَقِيمَ",
      highlight: "الصِّرَا"
    }
  },
  {
    id: 106,
    type: "ayat",
    category: "gharib",
    subtopic: "lafadz_khusus",
    question: "Lafaz 'ءَامَنُوا' (amanuu) asalnya dua hamzah. Alif setelah hamzah pertama adalah?",
    arabic: "ءَامَنُوا",
    options: [
      "Alif biasa (bukan mad)",
      "Mad Badal — hamzah kedua diubah menjadi alif mad",
      "Mad Wajib Muttasil",
      "Tashil"
    ],
    answer: 1,
    explanation: {
      title: "Mad Badal pada Lafadz Khusus",
      text: "Asalnya 'أَأْمَنُوا' — dua hamzah. Hamzah kedua berharakat sukun diubah menjadi alif (mad badal) = 'آمَنُوا'. Panjang 2 harakat.",
      example: "ءَامَنُوا",
      highlight: "ءَا"
    }
  }
];

// ============================================================
// SUMMARY
// ============================================================
/*
 Total soal: 106 soal
 Distribusi:
 - Nun Sukun & Tanwin: 14 soal (Izhar 3, Idgham Bighunnah 3, Idgham Bilaghunnah 2, Iqlab 3, Ikhfa 3)
 - Mim Sukun: 7 soal (Izhar Syafawi 3, Ikhfa Syafawi 2, Idgham Mimi 2)
 - Mad: 32 soal (semua 15 subtopik tercakup)
 - Qalqalah: 6 soal (Sughra 3, Kubra 3)
 - Ghunnah: 9 soal (4 subtopik)
 - Lam Ta'rif: 6 soal (Qamariyah 3, Syamsiyah 3)
 - Ra: 7 soal (Tafkhim 3, Tarqiq 2, Jaiz 2)
 - Gharib: 23 soal (semua 9 subtopik tercakup)
*/

// Export untuk digunakan di aplikasi
if (typeof module !== "undefined") {
  module.exports = { chapters, questions };
}
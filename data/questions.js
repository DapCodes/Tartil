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
      "1. **Izhar Halqi**: Membaca Nun/Tanwin dengan jelas tanpa dengung. Disebut 'halqi' karena huruf-hurufnya keluar dari tenggorokan. Hurufnya ada 6: ء ه ع ح غ خ.",
      "2. **Idgham Bighunnah**: Memasukkan (meleburkan) Nun/Tanwin ke huruf berikutnya disertai dengung 2 harakat. Hurufnya ada 4: ي ن م و (disingkat 'Yanmu'). Berlaku jika Nun Sukun/Tanwin dan huruf sesudahnya berada di kata yang berbeda.",
      "3. **Idgham Bilaghunnah**: Memasukkan Nun/Tanwin ke huruf berikutnya tanpa dengung. Hurufnya ada 2: ل ر. Berlaku jika Nun Sukun/Tanwin dan huruf sesudahnya berada di kata yang berbeda.",
      "4. **Iqlab**: Mengubah bunyi Nun Sukun/Tanwin menjadi bunyi Mim (م) disertai dengung 2 harakat, saat bertemu Ba (ب). Iqlab berarti 'membalik'.",
      "5. **Ikhfa Haqiqi**: Menyamarkan bunyi Nun Sukun/Tanwin disertai dengung antara jelas dan samar, panjang 2-3 harakat. Berlaku pada 15 huruf sisa selain huruf Izhar, Idgham, dan Iqlab: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك."
    ],
    examples: [
      {
        title: "Izhar Halqi - bertemu Hamzah (ء)",
        arabic: "مَنْ آمَنَ",
        highlight: "نْ ء",
        explanation: "Nun mati bertemu Hamzah (ء). Huruf Hamzah termasuk huruf tenggorokan, sehingga Nun dibaca jelas tanpa dengung."
      },
      {
        title: "Izhar Halqi - bertemu Ha (ه)",
        arabic: "مِنْ هَادٍ",
        highlight: "نْ ه",
        explanation: "Nun mati bertemu Ha (ه). Huruf Ha termasuk huruf tenggorokan, sehingga Nun dibaca jelas tanpa dengung sama sekali."
      },
      {
        title: "Izhar Halqi - bertemu 'Ain (ع)",
        arabic: "مِنْ عِلْمٍ",
        highlight: "نْ ع",
        explanation: "Nun mati bertemu 'Ain (ع). Dibaca jelas tanpa mendengung karena 'Ain adalah huruf halqi (tenggorokan)."
      },
      {
        title: "Izhar Halqi - bertemu Ha (ح)",
        arabic: "مِنْ حَيْثُ",
        highlight: "نْ ح",
        explanation: "Nun mati bertemu Ha (ح). Dibaca jelas tanpa dengung karena Ha termasuk huruf tenggorokan."
      },
      {
        title: "Izhar Halqi - bertemu Ghain (غ)",
        arabic: "مِن غِلٍّ",
        highlight: "نْ غ",
        explanation: "Nun mati bertemu Ghain (غ). Dibaca jelas tanpa dengung karena Ghain termasuk huruf halqi."
      },
      {
        title: "Izhar Halqi - bertemu Kha (خ)",
        arabic: "مِنْ خَيْرٍ",
        highlight: "نْ خ",
        explanation: "Nun mati bertemu Kha (خ). Dibaca jelas tanpa dengung karena Kha termasuk huruf tenggorokan."
      },
      {
        title: "Idgham Bighunnah - bertemu Ya (ي)",
        arabic: "مَن يَعْمَلْ",
        highlight: "ن ي",
        explanation: "Nun mati bertemu Ya (ي) di kata berbeda. Suara nun lebur masuk ke Ya disertai dengung 2 harakat."
      },
      {
        title: "Idgham Bighunnah - bertemu Nun (ن)",
        arabic: "مِن نِعْمَةٍ",
        highlight: "ن ن",
        explanation: "Nun mati bertemu Nun (ن) di kata berbeda. Nun pertama lebur masuk ke Nun kedua dengan dengung 2 harakat."
      },
      {
        title: "Idgham Bighunnah - bertemu Mim (م)",
        arabic: "مِن مَّالٍ",
        highlight: "ن م",
        explanation: "Nun mati bertemu Mim (م) di kata berbeda. Suara nun lebur masuk ke Mim disertai dengung 2 harakat."
      },
      {
        title: "Idgham Bighunnah - bertemu Waw (و)",
        arabic: "مِن وَلِيٍّ",
        highlight: "ن و",
        explanation: "Nun mati bertemu Waw (و) di kata berbeda. Suara nun lebur masuk ke Waw disertai dengung 2 harakat."
      },
      {
        title: "Idgham Bighunnah - Tanwin bertemu Mim",
        arabic: "رَحِيمٌ مَّغْفُورٌ",
        highlight: "ٌ م",
        explanation: "Tanwin dhammah bertemu Mim (م). Bunyi tanwin lebur ke Mim dengan dengung 2 harakat."
      },
      {
        title: "Idgham Bilaghunnah - bertemu Lam (ل)",
        arabic: "مِن لَّدُنْهُ",
        highlight: "ن ل",
        explanation: "Nun mati bertemu Lam (ل) di kata berbeda. Suara nun masuk ke Lam tanpa dengung sama sekali."
      },
      {
        title: "Idgham Bilaghunnah - bertemu Ra (ر)",
        arabic: "مِن رَّبِّهِمْ",
        highlight: "ن ر",
        explanation: "Nun mati bertemu Ra (ر) di kata berbeda. Suara nun masuk ke Ra tanpa dengung."
      },
      {
        title: "Idgham Bilaghunnah - Tanwin bertemu Ra",
        arabic: "غَفُورٌ رَّحِيمٌ",
        highlight: "ٌ ر",
        explanation: "Tanwin dhammah bertemu Ra (ر). Bunyi tanwin lebur ke Ra tanpa dengung."
      },
      {
        title: "Idgham Bilaghunnah - Tanwin bertemu Lam",
        arabic: "هُدًى لِّلْمُتَّقِينَ",
        highlight: "ً ل",
        explanation: "Tanwin fathah bertemu Lam (ل). Bunyi tanwin lebur ke Lam tanpa dengung."
      },
      {
        title: "Iqlab - Nun mati bertemu Ba",
        arabic: "مِنۢ بَعْدِ",
        highlight: "نۢ ب",
        explanation: "Nun mati bertemu Ba (ب). Bunyi nun berubah menjadi mim sementara disertai dengung 2 harakat, lalu masuk ke Ba."
      },
      {
        title: "Iqlab - Tanwin bertemu Ba",
        arabic: "سَمِيعٌۢ بَصِيرٌ",
        highlight: "ٌۢ ب",
        explanation: "Tanwin dhammah bertemu Ba (ب). Bunyi tanwin berubah menjadi mim disertai dengung, lalu masuk ke Ba."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Ta (ت)",
        arabic: "مَنْ تَابَ",
        highlight: "نْ ت",
        explanation: "Nun mati bertemu Ta (ت). Bunyi nun dibaca samar antara Nun dan Ta, disertai dengung 2-3 harakat."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Tsa (ث)",
        arabic: "مَنْثُورًا",
        highlight: "نْث",
        explanation: "Nun mati bertemu Tsa (ث). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Jim (ج)",
        arabic: "مِنْ جُوعٍ",
        highlight: "نْ ج",
        explanation: "Nun mati bertemu Jim (ج). Bunyi nun samar disertai dengung 2-3 harakat."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Dal (د)",
        arabic: "مِنْ دُونِهِ",
        highlight: "نْ د",
        explanation: "Nun mati bertemu Dal (د). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Dzal (ذ)",
        arabic: "مُنذِرٌ",
        highlight: "نذ",
        explanation: "Nun mati bertemu Dzal (ذ). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Za (ز)",
        arabic: "مِنْ زَوَالٍ",
        highlight: "نْ ز",
        explanation: "Nun mati bertemu Za (ز). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Sin (س)",
        arabic: "مِنْ سُلْطَانٍ",
        highlight: "نْ س",
        explanation: "Nun mati bertemu Sin (س). Bunyi nun dibaca samar-samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Syin (ش)",
        arabic: "مِنْ شَرِّ",
        highlight: "نْ ش",
        explanation: "Nun mati bertemu Syin (ش). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Shad (ص)",
        arabic: "مِنْ صَلْصَالٍ",
        highlight: "نْ ص",
        explanation: "Nun mati bertemu Shad (ص). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Dhad (ض)",
        arabic: "مَنْضُودٍ",
        highlight: "نْض",
        explanation: "Nun mati bertemu Dhad (ض). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Tha (ط)",
        arabic: "مِنْطَقَةٍ",
        highlight: "نْط",
        explanation: "Nun mati bertemu Tha (ط). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Zha (ظ)",
        arabic: "مِنْ ظُلُمَاتٍ",
        highlight: "نْ ظ",
        explanation: "Nun mati bertemu Zha (ظ). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Fa (ف)",
        arabic: "مِنْ فَضْلِهِ",
        highlight: "نْ ف",
        explanation: "Nun mati bertemu Fa (ف). Bunyi nun dibaca samar disertai dengung."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Qaf (ق)",
        arabic: "مِنْ قَبْلُ",
        highlight: "نْ ق",
        explanation: "Nun mati bertemu Qaf (ق). Bunyi nun dibaca samar disertai dengung 2-3 harakat."
      },
      {
        title: "Ikhfa Haqiqi - bertemu Kaf (ك)",
        arabic: "مِنْ كُلِّ أَمْرٍ",
        highlight: "نْ ك",
        explanation: "Nun mati bertemu Kaf (ك). Bunyi nun dibaca samar disertai dengung."
      }
    ]
  },
  {
    id: "mim_sukun",
    title: "Mim Sukun",
    description: "Hukum yang terjadi apabila Mim Sukun (مْ) bertemu dengan huruf hijaiyah.",
    longDescription: "Hukum Mim Sukun mengatur cara pengucapan huruf Mim yang mati (sukun) saat bertemu dengan huruf hijaiyah lainnya. Berbeda dengan Nun Sukun, Mim Sukun hanya memiliki tiga hukum: Ikhfa Syafawi (ketemu Ba), Idgham Mimi (ketemu Mim), dan Izhar Syafawi (ketemu huruf selain Mim dan Ba). Disebut 'syafawi' karena mim diucapkan dari bibir (syafa = bibir).",
    materi: [
      "1. **Izhar Syafawi**: Mim sukun bertemu huruf selain Mim (م) dan Ba (ب) — yakni 26 huruf lainnya — dibaca jelas tanpa dengung. Mim tetap berbunyi jelas dari bibir.",
      "2. **Ikhfa Syafawi**: Mim sukun bertemu Ba (ب), bunyi mim dibaca samar dengan dengung 2 harakat dari bibir (tidak menutup rapat). Disebut ikhfa karena bunyi mim tidak jelas sempurna.",
      "3. **Idgham Mimi (Mutamatsilain)**: Mim sukun bertemu Mim (م), mim pertama dimasukkan ke mim kedua disertai dengung 2 harakat. Disebut juga Idgham Mutamatsilain karena dua huruf yang sama bertemu."
    ],
    examples: [
      {
        title: "Izhar Syafawi - bertemu Fa (ف)",
        arabic: "لَهُمْ فِيهَا",
        highlight: "مْ ف",
        explanation: "Mim mati bertemu Fa (ف). Dibaca jelas tanpa dengung karena Fa bukan Ba atau Mim."
      },
      {
        title: "Izhar Syafawi - bertemu Kaf (ك)",
        arabic: "وَأَنتُمْ كَارِهُونَ",
        highlight: "مْ ك",
        explanation: "Mim mati bertemu Kaf (ك). Dibaca jelas tanpa dengung."
      },
      {
        title: "Izhar Syafawi - bertemu Waw (و)",
        arabic: "هُمْ وَأَزْوَاجُهُمْ",
        highlight: "مْ و",
        explanation: "Mim mati bertemu Waw (و). Dibaca jelas tanpa dengung. (Perhatian: tidak termasuk Idgham meskipun Waw adalah huruf Idgham Bighunnah — itu hanya untuk Nun/Tanwin)."
      },
      {
        title: "Izhar Syafawi - bertemu Ha (ه)",
        arabic: "عَلَيْهِمْ هَآئِمِينَ",
        highlight: "مْ ه",
        explanation: "Mim mati bertemu Ha (ه). Dibaca jelas dari bibir tanpa dengung."
      },
      {
        title: "Ikhfa Syafawi - bertemu Ba (ب)",
        arabic: "تَرْمِيهِم بِحِجَارَةٍ",
        highlight: "مْ ب",
        explanation: "Mim mati bertemu Ba (ب). Bibir tidak menutup rapat, bunyi mim samar disertai dengung 2 harakat dari bibir."
      },
      {
        title: "Ikhfa Syafawi - Tanwin Mim bertemu Ba",
        arabic: "وَمَا هُمْ بِمُؤْمِنِينَ",
        highlight: "مْ بِ",
        explanation: "Mim mati bertemu Ba (ب). Dibaca samar dengan dengung di bibir, tidak jelas bunyi mimnya."
      },
      {
        title: "Idgham Mimi - bertemu Mim",
        arabic: "لَكُم مَّا كَسَبْتُمْ",
        highlight: "مْ م",
        explanation: "Mim mati bertemu Mim (م). Mim pertama lebur masuk ke Mim kedua yang bertasydid, dibaca dengan dengung 2 harakat."
      },
      {
        title: "Idgham Mimi - contoh lain",
        arabic: "أَعْلَمُ مَا تُبْدُونَ",
        highlight: "مُ م",
        explanation: "Mim mati bertemu Mim (م). Kedua mim digabung dengan dengung 2 harakat, disebut juga Idgham Mutamatsilain."
      }
    ]
  },
  {
    id: "mad",
    title: "Mad (Panjang Pendek)",
    description: "Memanjangkan bunyi huruf karena adanya huruf Mad (ا و ي).",
    longDescription: "Mad secara bahasa berarti memanjangkan. Dalam tajwid, Mad adalah memanjangkan suara saat mengucapkan huruf-huruf Mad (Alif, Waw, Ya). Mad dibagi menjadi dua besar: Mad Thabi'i (Asli) sebagai dasar, dan Mad Far'i (Cabang) yang merupakan pengembangan. Menguasai Mad sangat penting agar tidak salah dalam mengubah arti kata dalam Al-Qur'an. Satuan panjang mad diukur dengan 'harakat' (ketukan).",
    materi: [
      "1. **Mad Thabi'i (Asli)**: Mad paling dasar. Panjang 2 harakat. Terjadi jika: Alif (ا) didahului fathah, Waw (و) sukun didahului dhammah, atau Ya (ي) sukun didahului kasrah. Tidak ada sebab lain yang mengikutinya.",
      "2. **Mad Wajib Muttasil**: Mad Thabi'i bertemu Hamzah (ء) dalam SATU kata. Wajib dibaca panjang 4–5 harakat.",
      "3. **Mad Jaiz Munfasil**: Mad Thabi'i bertemu Hamzah (ء) di KATA yang berbeda. Boleh dibaca 2–5 harakat (umumnya 4-5 harakat dalam riwayat Hafs).",
      "4. **Mad 'Aridh Lissukun**: Mad Thabi'i yang diikuti huruf sukun karena waqaf (berhenti). Panjang boleh 2, 4, atau 6 harakat. Berlaku di akhir kalimat saat berhenti.",
      "5. **Mad Iwad**: Tanwin fathah (ً) di akhir kata dibaca waqaf (berhenti), suara tanwin diganti dengan alif panjang 2 harakat. Tidak berlaku pada Ta Marbuthah (ة).",
      "6. **Mad Badal**: Hamzah diikuti huruf Mad dalam satu kata, terjadi karena dua Hamzah bertemu — Hamzah kedua diganti huruf mad. Panjang 2 harakat (setara Mad Thabi'i).",
      "7. **Mad Lin (Mad Layyin)**: Huruf Waw atau Ya sukun didahului fathah, lalu diwaqafkan. Panjang 2, 4, atau 6 harakat saat waqaf. Disebut Lin karena lunak/lembut.",
      "8. **Mad Shilah Qashirah**: Ha dhamir (kata ganti orang ke-3 laki-laki, هُ/هِ) yang terletak di antara dua huruf hidup (berharakat), dibaca panjang 2 harakat seolah ada mad. Berlaku jika huruf sesudahnya bukan Hamzah.",
      "9. **Mad Shilah Thawilah**: Ha dhamir (هُ/هِ) terletak di antara dua huruf hidup, lalu diikuti Hamzah di kata berikutnya. Panjang 4–5 harakat.",
      "10. **Mad Lazim Kalimi Mutsaqqal**: Mad Thabi'i bertemu huruf bertasydid dalam satu kata. Panjang wajib 6 harakat.",
      "11. **Mad Lazim Kalimi Mukhaffaf**: Mad Thabi'i bertemu huruf sukun (bukan tasydid) dalam satu kata. Panjang wajib 6 harakat. Contoh sangat langka di Al-Qur'an.",
      "12. **Mad Lazim Harfi Mutsaqqal**: Terjadi pada huruf pembuka surah (fawatihus suwar) yang terdiri dari 3 huruf, huruf tengahnya mad dan huruf ketiga masuk (idgham) ke huruf berikutnya karena tasydid. Panjang 6 harakat.",
      "13. **Mad Lazim Harfi Mukhaffaf**: Terjadi pada huruf pembuka surah (fawatihus suwar) yang terdiri dari 3 huruf, huruf tengahnya mad dan huruf ketiga sukun (tidak idgham). Panjang 6 harakat.",
      "14. **Mad Farq**: Hamzah istifham (pertanyaan) masuk ke kata berawalan Alif Lam (ال), sehingga dua Hamzah bertemu, lalu Hamzah kedua diganti Alif panjang. Wajib dibaca 6 harakat untuk membedakan (farq = pembeda) antara kalimat berita dan tanya.",
      "15. **Mad Tamkin**: Dua huruf Ya bertemu — Ya pertama bertasydid dan berharakat kasrah, Ya kedua sukun. Dibaca 2 harakat dengan menekan (tamkin = menetapkan). Bisa juga terjadi antara Ya sukun sesudah kasrah bertemu Ya berharakat."
    ],
    examples: [
      {
        title: "Mad Thabi'i - Alif setelah fathah",
        arabic: "قَالَ",
        highlight: "قَا",
        explanation: "Alif (ا) didahului harakat fathah pada Qaf. Tidak ada sebab lain sesudahnya. Dibaca panjang 2 harakat."
      },
      {
        title: "Mad Thabi'i - Waw sukun setelah dhammah",
        arabic: "يَقُولُ",
        highlight: "قُو",
        explanation: "Waw (و) sukun didahului harakat dhammah. Dibaca panjang 2 harakat."
      },
      {
        title: "Mad Thabi'i - Ya sukun setelah kasrah",
        arabic: "كَرِيمٌ",
        highlight: "رِي",
        explanation: "Ya (ي) sukun didahului harakat kasrah. Dibaca panjang 2 harakat."
      },
      {
        title: "Mad Wajib Muttasil - dalam satu kata",
        arabic: "جَاءَ",
        highlight: "اءَ",
        explanation: "Mad Thabi'i (Alif) bertemu Hamzah (ء) dalam satu kata 'jaa-a'. Wajib dibaca panjang 4–5 harakat."
      },
      {
        title: "Mad Wajib Muttasil - contoh lain",
        arabic: "السَّمَاءَ",
        highlight: "مَاءَ",
        explanation: "Alif (mad) bertemu Hamzah dalam satu kata. Dibaca panjang 4–5 harakat."
      },
      {
        title: "Mad Jaiz Munfasil - dua kata berbeda",
        arabic: "يَا أَيُّهَا",
        highlight: "يَا أَ",
        explanation: "Mad Thabi'i (Ya pada 'yaa') bertemu Hamzah (ء) di kata 'ayyuhaa' yang berbeda. Dibaca panjang 2–5 harakat."
      },
      {
        title: "Mad Jaiz Munfasil - contoh lain",
        arabic: "إِنَّا أَنزَلْنَاهُ",
        highlight: "نَّا أَ",
        explanation: "Alif di akhir 'innaa' bertemu Hamzah di awal 'anzalnaa'. Dua kata terpisah. Dibaca 2–5 harakat."
      },
      {
        title: "Mad 'Aridh Lissukun - waqaf di akhir ayat",
        arabic: "الرَّحِيمِ",
        highlight: "حِيمِ",
        explanation: "Ya (ي) sukun setelah kasrah (Mad Thabi'i), lalu waqaf menjadikan Mim sukun. Dibaca 2, 4, atau 6 harakat."
      },
      {
        title: "Mad 'Aridh Lissukun - contoh waqaf",
        arabic: "نَسْتَعِينُ",
        highlight: "عِينُ",
        explanation: "Waw (و) sukun setelah dhammah, diikuti Nun. Saat waqaf, Nun menjadi sukun — timbul Mad 'Aridh Lissukun 2–6 harakat."
      },
      {
        title: "Mad Iwad - Tanwin fathah diwaqafkan",
        arabic: "عَلِيمًا",
        highlight: "لِيمًا",
        explanation: "Tanwin fathah (ً) di akhir kata. Saat waqaf, dibaca seperti alif — 'aliimaa' — panjang 2 harakat, bukan 'aliimann'."
      },
      {
        title: "Mad Iwad - contoh lain",
        arabic: "سَمِيعًا",
        highlight: "مِيعًا",
        explanation: "Tanwin fathah di akhir kata. Saat waqaf menjadi 'samiia' — panjang 2 harakat menggantikan bunyi tanwin."
      },
      {
        title: "Mad Badal - Hamzah diganti mad",
        arabic: "آمَنَ",
        highlight: "آ",
        explanation: "Asalnya 'ء-ء-مَنَ', Hamzah kedua diganti Alif panjang sehingga menjadi 'آمَنَ'. Dibaca 2 harakat (setara Mad Thabi'i)."
      },
      {
        title: "Mad Badal - contoh lain",
        arabic: "إِيمَانًا",
        highlight: "إِي",
        explanation: "Berasal dari dua Hamzah, yang kedua diganti Ya (karena kasrah sebelumnya). Dibaca 2 harakat."
      },
      {
        title: "Mad Lin - Waw sukun setelah fathah, lalu waqaf",
        arabic: "خَوْفٌ",
        highlight: "خَوْ",
        explanation: "Waw (و) sukun didahului fathah, ini adalah huruf Lin. Saat waqaf, dibaca panjang 2, 4, atau 6 harakat."
      },
      {
        title: "Mad Lin - Ya sukun setelah fathah, lalu waqaf",
        arabic: "الْبَيْتِ",
        highlight: "بَيْ",
        explanation: "Ya (ي) sukun didahului fathah. Saat diwaqafkan, menjadi Mad Lin — dibaca 2, 4, atau 6 harakat."
      },
      {
        title: "Mad Shilah Qashirah - Ha dhamir di antara dua huruf hidup",
        arabic: "إِنَّهُ كَانَ",
        highlight: "نَّهُ كَ",
        explanation: "Ha dhamir (هُ) di antara Nun (berharakat) dan Kaf (berharakat). Sesudahnya bukan Hamzah. Dibaca panjang 2 harakat seolah ada Waw kecil: 'innahuu kaana'."
      },
      {
        title: "Mad Shilah Qashirah - contoh lain",
        arabic: "لَهُ مَا",
        highlight: "لَهُ م",
        explanation: "Ha dhamir (هُ) di antara Lam dan Mim yang berharakat. Bukan diikuti Hamzah. Dibaca 2 harakat: 'lahuu maa'."
      },
      {
        title: "Mad Shilah Thawilah - Ha dhamir diikuti Hamzah",
        arabic: "وَمَنْ عِنْدَهُ أَجْرٌ",
        highlight: "هُ أَ",
        explanation: "Ha dhamir (هُ) di antara dua huruf hidup, lalu diikuti Hamzah (أ) di kata berikutnya. Dibaca panjang 4–5 harakat."
      },
      {
        title: "Mad Shilah Thawilah - contoh lain",
        arabic: "إِنَّهُ أَنَا اللَّهُ",
        highlight: "هُ أَ",
        explanation: "Ha dhamir diikuti Hamzah di kata berikutnya. Termasuk Mad Shilah Thawilah, panjang 4–5 harakat."
      },
      {
        title: "Mad Lazim Kalimi Mutsaqqal - mad bertemu tasydid",
        arabic: "وَلَا الضَّآلِّينَ",
        highlight: "آلِّ",
        explanation: "Alif (mad) diikuti huruf Lam yang bertasydid (لّ) dalam satu kata. Wajib dibaca 6 harakat."
      },
      {
        title: "Mad Lazim Kalimi Mutsaqqal - contoh lain",
        arabic: "الْحَاقَّةُ",
        highlight: "حَاقَّ",
        explanation: "Alif (mad) bertemu Qaf bertasydid (قّ) dalam satu kata. Wajib dibaca 6 harakat."
      },
      {
        title: "Mad Lazim Kalimi Mukhaffaf - mad bertemu sukun (bukan tasydid)",
        arabic: "آلْآنَ",
        highlight: "آلْ",
        explanation: "Alif (mad) bertemu Lam sukun (bukan tasydid) dalam satu kata. Wajib dibaca 6 harakat. Contoh langka: terdapat di QS Yunus: 51 dan 91."
      },
      {
        title: "Mad Lazim Harfi Mutsaqqal - huruf pembuka surah (idgham)",
        arabic: "الم",
        highlight: "لا",
        explanation: "Huruf Lam (ل) dibaca 'laam' — Mad Thabi'i (Alif) diikuti Mim yang masuk ke huruf Mim berikutnya (idgham). Panjang 6 harakat pada Lam."
      },
      {
        title: "Mad Lazim Harfi Mutsaqqal - contoh lain",
        arabic: "المص",
        highlight: "لا",
        explanation: "Lam dalam 'Alif Lam Mim Shad' — Lam dibaca 'laam', Alif di tengahnya mad, Mim masuk ke Shad (idgham). Panjang 6 harakat."
      },
      {
        title: "Mad Lazim Harfi Mukhaffaf - huruf pembuka surah (tidak idgham)",
        arabic: "ق",
        highlight: "قَا",
        explanation: "Huruf Qaf di awal QS Qaf dibaca 'qaaf' — Alif di tengah adalah Mad Thabi'i, lalu Fa di akhir sukun (tidak idgham). Panjang 6 harakat."
      },
      {
        title: "Mad Lazim Harfi Mukhaffaf - contoh lain",
        arabic: "ن",
        highlight: "نُو",
        explanation: "Huruf Nun di awal QS Al-Qalam dibaca 'nuun' — Waw di tengah adalah Mad Thabi'i, Nun akhir sukun. Panjang 6 harakat."
      },
      {
        title: "Mad Farq - Hamzah pertanyaan + Alif Lam",
        arabic: "قُلْ آللَّهُ أَذِنَ",
        highlight: "آللَّ",
        explanation: "Hamzah istifham (tanya) masuk ke kata 'Allah' yang diawali Alif Lam. Dua Hamzah bertemu, Hamzah kedua diganti Alif panjang. Dibaca 6 harakat untuk membedakan kalimat tanya dan berita."
      },
      {
        title: "Mad Farq - contoh lain",
        arabic: "آلذَّكَرَيْنِ",
        highlight: "آلذَّ",
        explanation: "Hamzah istifham bertemu Alif Lam pada kata 'al-dzakarayn'. Dibaca 6 harakat sebagai tanda pertanyaan. Terdapat di QS Al-An'am: 143–144."
      },
      {
        title: "Mad Tamkin - Ya tasydid kasrah bertemu Ya sukun",
        arabic: "حُيِّيتُم",
        highlight: "يِّيْ",
        explanation: "Ya pertama bertasydid berharakat kasrah (يِّ), Ya kedua sukun (يْ). Dibaca dengan menekan 2 harakat sebelum melanjutkan."
      },
      {
        title: "Mad Tamkin - contoh lain",
        arabic: "النَّبِيِّينَ",
        highlight: "بِيِّيْ",
        explanation: "Ya bertasydid kasrah bertemu Ya sukun. Dibaca tegas 2 harakat — 'al-nabiyyiina'."
      }
    ]
  },
  {
    id: "ra",
    title: "Ra Tafkhim & Tarqiq",
    description: "Hukum menebalkan atau menipiskan bunyi huruf Ra (ر).",
    longDescription: "Hukum Ra mengatur kapan huruf Ra (ر) harus dibaca tebal (Tafkhim) atau tipis (Tarqiq). Ini sangat bergantung pada harakat huruf Ra itu sendiri, harakat huruf sebelumnya, dan apakah ada huruf Isti'la sesudahnya. Membedakan ketebalan Ra memberikan keindahan dan ketepatan dalam pelafalan Al-Qur'an. Ada juga kondisi Ra Jaiz (boleh tebal atau tipis).",
    materi: [
      "1. **Ra Tafkhim - Berharakat Fathah (رَ)**: Ra yang berharakat fathah wajib dibaca tebal (tafkhim).",
      "2. **Ra Tafkhim - Berharakat Dhammah (رُ)**: Ra yang berharakat dhammah wajib dibaca tebal.",
      "3. **Ra Tafkhim - Sukun sesudah Fathah**: Ra sukun (رْ) yang didahului huruf berharakat fathah wajib dibaca tebal.",
      "4. **Ra Tafkhim - Sukun sesudah Dhammah**: Ra sukun (رْ) yang didahului huruf berharakat dhammah wajib dibaca tebal.",
      "5. **Ra Tafkhim - Sukun sesudah kasrah tidak asli (kasrah bukan harakat asli)**: Ra sukun yang didahului kasrah tidak asli (kasrah sebagai pembantu bacaan, bukan harakat asli kata) tetap dibaca tebal. Contoh: hamzah washal.",
      "6. **Ra Tarqiq - Berharakat Kasrah (رِ)**: Ra yang berharakat kasrah wajib dibaca tipis (tarqiq).",
      "7. **Ra Tarqiq - Sukun sesudah Kasrah Asli**: Ra sukun yang didahului huruf berharakat kasrah asli (harakat asli kata tersebut) dibaca tipis.",
      "8. **Ra Jaiz (Boleh Tebal atau Tipis) - Ra sukun didahului kasrah, sesudahnya huruf Isti'la**: Ra sukun yang didahului kasrah, namun huruf sesudah Ra adalah huruf Isti'la (خ ص ض ط ظ غ ق), boleh dibaca tebal atau tipis. Membaca tebal lebih kuat dari sisi huruf Isti'la, membaca tipis mengikuti kasrah sebelumnya.",
      "9. **Ra Tarqiq pada Waqaf**: Ra yang di akhir kata saat waqaf, jika Ra-nya berharakat kasrah atau didahului kasrah asli, dibaca tipis."
    ],
    examples: [
      {
        title: "Ra Tafkhim - berharakat Fathah",
        arabic: "رَسُولُ اللَّهِ",
        highlight: "رَ",
        explanation: "Huruf Ra (ر) berharakat fathah (رَ). Wajib dibaca tebal, seperti mengucapkan 'ra' dengan mulut agak membuka penuh."
      },
      {
        title: "Ra Tafkhim - berharakat Fathah (contoh lain)",
        arabic: "رَبِّ الْعَالَمِينَ",
        highlight: "رَ",
        explanation: "Ra di awal kata 'Rabbi' berharakat fathah. Wajib dibaca tebal."
      },
      {
        title: "Ra Tafkhim - berharakat Dhammah",
        arabic: "رُزِقُوا",
        highlight: "رُ",
        explanation: "Huruf Ra (ر) berharakat dhammah (رُ). Wajib dibaca tebal."
      },
      {
        title: "Ra Tafkhim - berharakat Dhammah (contoh lain)",
        arabic: "رُبَمَا",
        highlight: "رُ",
        explanation: "Ra di awal kata 'rubamaa' berharakat dhammah. Wajib dibaca tebal."
      },
      {
        title: "Ra Tafkhim - Sukun sesudah Fathah",
        arabic: "مَرْيَمَ",
        highlight: "رْ",
        explanation: "Ra sukun (رْ) didahului huruf Mim berharakat fathah (مَ). Karena sebelumnya fathah, Ra dibaca tebal."
      },
      {
        title: "Ra Tafkhim - Sukun sesudah Fathah (contoh lain)",
        arabic: "الْأَرْضِ",
        highlight: "رْ",
        explanation: "Ra sukun didahului Alif berharakat fathah (أَ). Ra dibaca tebal."
      },
      {
        title: "Ra Tafkhim - Sukun sesudah Dhammah",
        arabic: "يُرْسَلُ",
        highlight: "رْ",
        explanation: "Ra sukun (رْ) didahului Ya berharakat dhammah (يُ). Karena sebelumnya dhammah, Ra dibaca tebal."
      },
      {
        title: "Ra Tafkhim - Sukun sesudah Dhammah (contoh lain)",
        arabic: "قُرْآنٌ",
        highlight: "رْ",
        explanation: "Ra sukun didahului Qaf berharakat dhammah (قُ). Ra wajib dibaca tebal."
      },
      {
        title: "Ra Tafkhim - Sukun sesudah kasrah tidak asli (Hamzah Washal)",
        arabic: "ارْجِعِي",
        highlight: "رْ",
        explanation: "Ra sukun setelah Alif Washal yang berbunyi kasrah sementara (kasrah tidak asli). Ra tetap dibaca tebal karena kasrah tersebut bukan harakat asli kata."
      },
      {
        title: "Ra Tafkhim - Sukun sesudah kasrah tidak asli (contoh lain)",
        arabic: "امْرَأَةً",
        highlight: "رَ",
        explanation: "Ra di sini berharakat fathah, dibaca tebal. Sementara pada 'imri-in' (اِمْرِئٍ), kasrah pada Ra asli, sehingga tarqiq."
      },
      {
        title: "Ra Tarqiq - berharakat Kasrah",
        arabic: "رِزْقًا",
        highlight: "رِ",
        explanation: "Huruf Ra (ر) berharakat kasrah (رِ). Wajib dibaca tipis, seperti mengucapkan 'ri' dengan posisi bibir sedikit maju."
      },
      {
        title: "Ra Tarqiq - berharakat Kasrah (contoh lain)",
        arabic: "رِجَالٌ",
        highlight: "رِ",
        explanation: "Ra berharakat kasrah di awal kata 'rijaalun'. Wajib dibaca tipis."
      },
      {
        title: "Ra Tarqiq - Sukun sesudah Kasrah Asli",
        arabic: "فِرْعَوْنَ",
        highlight: "رْ",
        explanation: "Ra sukun (رْ) didahului Fa berharakat kasrah asli (فِ). Kasrah ini adalah harakat asli kata, sehingga Ra dibaca tipis."
      },
      {
        title: "Ra Tarqiq - Sukun sesudah Kasrah Asli (contoh lain)",
        arabic: "مِرْيَةٍ",
        highlight: "رْ",
        explanation: "Ra sukun didahului Mim berharakat kasrah asli (مِ). Ra dibaca tipis."
      },
      {
        title: "Ra Tarqiq - saat Waqaf, Ra berharakat kasrah",
        arabic: "النَّاسِ",
        highlight: "سِ",
        explanation: "Meski ini bukan Ra, contoh prinsip: Ra yang berharakat kasrah saat waqaf tetap dibaca tipis — seperti kata 'al-qaadiri' bila diwaqafkan pada Ra kasrah-nya."
      },
      {
        title: "Ra Jaiz - Ra sukun sesudah kasrah, diikuti huruf Isti'la (Shad ص)",
        arabic: "فِرْصَةً",
        highlight: "رْص",
        explanation: "Ra sukun didahului kasrah (فِ), lalu diikuti Shad (ص) yang merupakan huruf Isti'la. Boleh dibaca tebal (mengikuti huruf Isti'la) atau tipis (mengikuti kasrah sebelumnya). Keduanya benar."
      },
      {
        title: "Ra Jaiz - Ra sukun sesudah kasrah, diikuti huruf Isti'la (Qaf ق)",
        arabic: "إِرْقِ",
        highlight: "رْق",
        explanation: "Ra sukun setelah kasrah (إِ), diikuti Qaf (ق) huruf Isti'la. Boleh tebal atau tipis. Contoh dari QS Al-A'raf: 'irqaa'."
      },
      {
        title: "Ra Jaiz - Ra sukun sesudah kasrah, diikuti Tha (ط)",
        arabic: "مِرْطَقٌ",
        highlight: "رْط",
        explanation: "Ra sukun setelah kasrah, diikuti Tha (ط) yang termasuk huruf Isti'la. Boleh dibaca tebal maupun tipis."
      }
    ]
  },
    {
    id: "gharib",
    title: "Ayat-Ayat Gharib",
    description: "Bacaan-bacaan khusus yang tidak umum atau berbeda dari kaidah standar dalam riwayat Hafs.",
    longDescription: "Gharib berarti asing atau jarang. Dalam Al-Qur'an riwayat Hafs dari Ashim, terdapat beberapa kata yang cara membacanya keluar dari kaidah umum (pengecualian). Ada 6 jenis utama: Imalah (bunyi 'e'), Isymam (isyarat bibir), Saktah (berhenti tanpa napas), Tashil (hamzah diperlunak), Naql (harakat dipindah), dan Badal Gharib (penggantian bunyi). Seluruh bacaan gharib ini harus dipelajari dan dihafal karena tidak bisa diturunkan dari kaidah biasa.",
    materi: [
      "1. **Imalah**: Memiringkan bunyi fathah (a) ke arah kasrah (i) sehingga bunyinya seperti 'e' (antara 'a' dan 'i'). Dalam riwayat Hafs, hanya ada SATU bacaan Imalah, yaitu kata 'Majreha' (مَجْر۪ىٰهَا) di QS Hud: 41. Kata ini dibaca 'Majre-ha', bukan 'Majra-ha'.",
      "2. **Isymam**: Memajukan atau mencucukan bibir (seperti akan mengucapkan 'u' atau 'o') tanpa mengeluarkan suara, sebagai isyarat bahwa huruf yang diwaqafkan itu asalnya berharakat dhammah. Dalam riwayat Hafs, Isymam hanya terjadi pada kata 'Laa Taamannaa' (لَا تَأْمَنَّا) di QS Yusuf: 11.",
      "3. **Saktah**: Berhenti sejenak kira-kira 2 harakat tanpa mengambil napas, kemudian melanjutkan bacaan. Dalam riwayat Hafs, Saktah terjadi di 4 tempat: (1) QS Al-Kahfi: 1-2 antara 'Iwijaa' dan 'Qayyimaa', (2) QS Yasin: 52 antara 'Marqadinaa' dan 'Haadzaa', (3) QS Al-Qiyamah: 27 antara 'Man' dan 'Raaq', (4) QS Al-Muthaffifin: 14 antara 'Bal' dan 'Raana'.",
      "4. **Tashil**: Membaca Hamzah kedua dengan bunyi yang diperlunak — antara Hamzah (ء) dan Alif (ا), sehingga tidak penuh seperti Hamzah biasa dan tidak hilang seperti Mad. Dalam riwayat Hafs, hanya terjadi pada kata 'A'ajamiyyun' (ءَاعْجَمِيٌّ) di QS Fussilat: 44.",
      "5. **Naql**: Memindahkan harakat Hamzah (ء) ke huruf sukun sebelumnya, lalu Hamzah dihilangkan. Dalam riwayat Hafs, hanya terjadi pada satu tempat: kata 'Bel'aa' (بِئْسَ الِاسْمُ) — yakni Alif Lam pada kata 'Al-Ismu' (الِاسْمُ) yang dibaca menyambung: 'Bil-ismul'.",
      "6. **Badal Gharib (Shilah Ha Dhamir khusus)**: Ada beberapa kata dalam Al-Qur'an yang penulisannya tidak standar atau ada pergantian huruf yang tidak sesuai kaidah umum. Contohnya: kata 'Arjihii' (أَرْجِهْ) di QS Al-A'raf: 111 dan QS Asy-Syu'ara: 36, dibaca dengan Ha yang dipanjangkan meski penulisannya sukun."
    ],
    examples: [
      {
        title: "Imalah - Satu-satunya dalam Hafs",
        arabic: "بِسْمِ اللَّهِ مَجْر۪ىٰهَا",
        highlight: "مَجْر۪ىٰ",
        explanation: "Kata 'Majreha' di QS Hud: 41. Satu-satunya bacaan Imalah dalam riwayat Hafs. Harakat fathah pada Ra dikiringkan ke arah kasrah, sehingga berbunyi 'majre-ha' bukan 'majra-ha'. Bunyinya seperti huruf 'e' pada kata 'sate'."
      },
      {
        title: "Isymam - QS Yusuf: 11",
        arabic: "لَا تَأْمَنَّا عَلَىٰ يُوسُفَ",
        highlight: "تَأْمَنَّا",
        explanation: "Kata 'Laa Taamannaa' di QS Yusuf: 11. Saat membaca Nun yang pertama (نّ), bibir dimajukan seolah akan mengucapkan 'u' tanpa ada suara tambahan. Ini adalah isyarat bahwa asalnya berharakat dhammah. Hanya ada satu Isymam dalam riwayat Hafs."
      },
      {
        title: "Saktah - QS Al-Muthaffifin: 14",
        arabic: "كَلَّا ۖ بَلْ ۜ رَانَ",
        highlight: "بَلْ ۜ رَ",
        explanation: "Berhenti sejenak (2 harakat) tanpa mengambil napas antara kata 'Bal' dan 'Raana'. Tanda saktah ditunjukkan dengan simbol (ۜ). Jika tidak saktah, 'Bal Raana' bisa terdengar seperti 'Barraan' yang berbeda maknanya."
      },
      {
        title: "Saktah - QS Al-Kahfi: 1-2",
        arabic: "الْحَمْدُ لِلَّهِ ... عِوَجَا ۜ قَيِّمًا",
        highlight: "عِوَجَا ۜ قَ",
        explanation: "Saktah antara akhir ayat 1 (kata 'Iwajaa') dan awal ayat 2 (kata 'Qayyimaa') di QS Al-Kahfi. Berhenti sejenak tanpa napas untuk memisahkan dua kata agar tidak rancu maknanya."
      },
      {
        title: "Saktah - QS Yasin: 52",
        arabic: "مَن بَعَثَنَا مِن مَّرْقَدِنَا ۜ هَٰذَا",
        highlight: "مَرْقَدِنَا ۜ هَٰ",
        explanation: "Saktah antara 'Marqadinaa' dan 'Haadzaa' di QS Yasin: 52. Berhenti sejenak tanpa napas agar kalimat tidak salah baca dan maknanya tetap benar."
      },
      {
        title: "Saktah - QS Al-Qiyamah: 27",
        arabic: "وَقِيلَ مَنْ ۜ رَاقٍ",
        highlight: "مَنْ ۜ رَا",
        explanation: "Saktah antara 'Man' dan 'Raaq' di QS Al-Qiyamah: 27. Tanpa saktah, dua kata ini bisa terbaca 'Marraaq' yang bermakna berbeda. Berhenti sejenak memisahkan maknanya: 'Siapakah yang bisa menyembuhkan?'"
      },
      {
        title: "Tashil - QS Fussilat: 44",
        arabic: "ءَاعْجَمِيٌّ وَعَرَبِيٌّ",
        highlight: "ءَاعْ",
        explanation: "Kata 'A'ajamiyyun' di QS Fussilat: 44. Ada dua Hamzah berurutan — Hamzah pertama dibaca penuh, Hamzah kedua dibaca Tashil (diperlunak, antara Hamzah dan Alif). Hanya satu Tashil dalam riwayat Hafs."
      },
      {
        title: "Naql - QS Al-Hujurat: 11",
        arabic: "بِئْسَ الِاسْمُ",
        highlight: "الِاسْمُ",
        explanation: "Kata 'Al-Ismu' (الِاسْمُ) bila disambung dengan kata sebelumnya 'bi'sa', harakat Hamzah Washal (kasrah) dipindahkan ke Lam sukun sebelumnya, sehingga dibaca 'bil-ismul-fusuuqu'. Hamzah Washal-nya hilang karena sudah tersambung."
      },
      {
        title: "Badal Gharib - Arjihii QS Al-A'raf: 111",
        arabic: "قَالُوا أَرْجِهْ وَأَخَاهُ",
        highlight: "أَرْجِهْ",
        explanation: "Kata 'Arjih' (أَرْجِهْ) ditulis dengan Ha sukun, namun dalam riwayat Hafs dibaca 'Arji-hii' — Ha-nya dipanjangkan 2 harakat seolah ada Waw/Ya kecil sesudahnya. Ini adalah kekhususan bacaan yang tidak bisa diambil dari kaidah umum."
      }
    ]
  },
  {
    id: "qalqalah",
    title: "Qalqalah",
    description: "Memantulkan bunyi huruf Qalqalah (ق ط ب ج د) yang berharakat sukun atau waqaf.",
    longDescription: "Qalqalah berarti getaran atau pantulan suara. Dalam tajwid, hukum ini berlaku ketika salah satu dari 5 huruf Qalqalah berharakat sukun (mati) baik di tengah kata maupun di akhir kata saat waqaf. Lima huruf Qalqalah disingkat 'Quthbu Jaddin' (قُطْبُ جَدٍّ): Qaf (ق), Tha (ط), Ba (ب), Jim (ج), Dal (د). Terdapat tiga tingkatan: Sughra (kecil/ringan), Kubra (besar/kuat), dan Akbar (terkuat/di akhir saat bertasydid).",
    materi: [
      "1. **Huruf Qalqalah** ada 5: ق (Qaf), ط (Tha), ب (Ba), ج (Jim), د (Dal). Diingat dengan singkatan 'Quthbu Jaddin' (قُطْبُ جَدٍّ) atau 'Baju Di Toko'.",
      "2. **Qalqalah Sughra (Kecil)**: Salah satu huruf Qalqalah berharakat sukun di TENGAH kata (bukan karena waqaf). Dipantulkan dengan ringan/kecil. Suara memantul tapi tidak terlalu kuat.",
      "3. **Qalqalah Kubra (Besar)**: Salah satu huruf Qalqalah berada di AKHIR kata dan dibaca waqaf (berhenti), sementara huruf tersebut berharakat (bukan sukun asli). Dipantulkan dengan kuat/besar karena disukun-kan saat waqaf.",
      "4. **Qalqalah Akbar (Terbesar)**: Salah satu huruf Qalqalah berada di AKHIR kata, berharakat tasydid (syiddah), dan dibaca waqaf. Ini adalah pantulan terkuat karena ada penekanan tasydid sebelum waqaf. Beberapa ulama memasukkan ini sebagai bagian dari Kubra dengan pantulan maksimal."
    ],
    examples: [
      {
        title: "Qalqalah Sughra - Dal (د) di tengah kata",
        arabic: "يَدْخُلُونَ",
        highlight: "دْ",
        explanation: "Huruf Dal (د) berharakat sukun di tengah kata 'yadkhuluna'. Dal dipantulkan ringan karena sukun asli di tengah kata — ini Qalqalah Sughra."
      },
      {
        title: "Qalqalah Sughra - Qaf (ق) di tengah kata",
        arabic: "يَقْطَعُونَ",
        highlight: "قْ",
        explanation: "Huruf Qaf (ق) sukun di tengah kata 'yaqtha'uuna'. Dipantulkan ringan — Qalqalah Sughra."
      },
      {
        title: "Qalqalah Sughra - Tha (ط) di tengah kata",
        arabic: "يَطْغَوْنَ",
        highlight: "طْ",
        explanation: "Huruf Tha (ط) sukun di tengah kata 'yathghawna'. Dipantulkan ringan — Qalqalah Sughra."
      },
      {
        title: "Qalqalah Sughra - Ba (ب) di tengah kata",
        arabic: "أَبْصَارَهُمْ",
        highlight: "بْ",
        explanation: "Huruf Ba (ب) sukun di tengah kata 'absharahum'. Dipantulkan ringan — Qalqalah Sughra."
      },
      {
        title: "Qalqalah Sughra - Jim (ج) di tengah kata",
        arabic: "يَجْعَلُونَ",
        highlight: "جْ",
        explanation: "Huruf Jim (ج) sukun di tengah kata 'yaj'aluuna'. Dipantulkan ringan — Qalqalah Sughra."
      },
      {
        title: "Qalqalah Kubra - Dal (د) di akhir saat waqaf",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        highlight: "دٌ",
        explanation: "Huruf Dal (د) di akhir kata 'Ahad', saat waqaf disukun-kan. Pantulan kuat karena berhenti di akhir kalimat — Qalqalah Kubra."
      },
      {
        title: "Qalqalah Kubra - Qaf (ق) di akhir saat waqaf",
        arabic: "وَالْفَجْرِ وَلَيَالٍ عَشْرٍ",
        highlight: "قِ",
        explanation: "Huruf Qaf di akhir kata saat waqaf — dipantulkan kuat. Contoh lain: kata 'Al-Khalaaq' (الْخَلَّاقُ) saat diwaqafkan."
      },
      {
        title: "Qalqalah Kubra - Ba (ب) di akhir saat waqaf",
        arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ",
        highlight: "هَبٍ",
        explanation: "Kata 'Lahab' diakhiri huruf Ba (ب). Saat waqaf, Ba disukun-kan dan dipantulkan kuat — Qalqalah Kubra."
      },
      {
        title: "Qalqalah Kubra - Jim (ج) di akhir saat waqaf",
        arabic: "مِن شَرِّ مَا خَلَجَ",
        highlight: "لَجَ",
        explanation: "Huruf Jim (ج) di akhir kata, dipantulkan kuat saat waqaf — Qalqalah Kubra."
      },
      {
        title: "Qalqalah Kubra - Tha (ط) di akhir saat waqaf",
        arabic: "وَالنَّجْمِ إِذَا هَوَىٰ... وَمَا طَغَىٰ",
        highlight: "طَ",
        explanation: "Tha (ط) di akhir kata saat waqaf dipantulkan kuat. Contoh: kata 'Basth' (بَسْطَ) saat waqaf pada Tha."
      },
      {
        title: "Qalqalah Akbar - Dal bertasydid di akhir saat waqaf",
        arabic: "وَدَّ كَثِيرٌ مِّنْ أَهْلِ الْكِتَابِ",
        highlight: "وَدَّ",
        explanation: "Kata 'Wadda' diakhiri Dal bertasydid (دَّ). Saat diwaqafkan, Dal dipantulkan dengan sangat kuat karena ada penekanan tasydid — Qalqalah Akbar (pantulan terkuat)."
      },
      {
        title: "Qalqalah Akbar - Qaf bertasydid di akhir saat waqaf",
        arabic: "وَتَبَّ... الْحَقُّ",
        highlight: "حَقُّ",
        explanation: "Kata 'Al-Haqq' diakhiri Qaf bertasydid (قّ). Saat waqaf dipantulkan sangat kuat — Qalqalah Akbar."
      },
      {
        title: "Qalqalah Akbar - Ba bertasydid di akhir saat waqaf",
        arabic: "رَبَّكَ فَكَبِّرْ",
        highlight: "كَبِّ",
        explanation: "Huruf Ba bertasydid (بّ) dalam kata 'fakkabbir'. Jika diwaqafkan pada Ba, dipantulkan sangat kuat — Qalqalah Akbar."
      }
    ]
  },
  {
    id: "ghunnah",
    title: "Ghunnah",
    description: "Dengung yang keluar dari rongga hidung (Al-Khaisyum) dengan panjang 2 harakat.",
    longDescription: "Ghunnah adalah bunyi dengung yang berasal dari rongga hidung (bukan mulut atau tenggorokan). Ghunnah adalah sifat wajib yang melekat pada huruf Nun (ن) dan Mim (م). Dalam kondisi-kondisi tertentu, dengung ini wajib diperdengarkan selama 2 harakat. Ghunnah hadir dalam beberapa hukum tajwid: Ghunnah Musyaddadah (Nun/Mim bertasydid), Idgham Bighunnah, Ikhfa Haqiqi, Iqlab, Ikhfa Syafawi, dan Idgham Mimi.",
    materi: [
      "1. **Ghunnah Musyaddadah - Nun Tasydid (نّ)**: Nun yang bertasydid wajib dibaca mendengung selama 2 harakat. Ini adalah ghunnah yang paling jelas dan kuat.",
      "2. **Ghunnah Musyaddadah - Mim Tasydid (مّ)**: Mim yang bertasydid wajib dibaca mendengung selama 2 harakat. Sama kuatnya dengan Nun tasydid.",
      "3. **Ghunnah pada Idgham Bighunnah**: Saat Nun sukun/Tanwin bertemu huruf (ي ن م و) di kata berbeda, bunyi Nun/Tanwin lebur dan digantikan dengung 2 harakat.",
      "4. **Ghunnah pada Ikhfa Haqiqi**: Saat Nun sukun/Tanwin bertemu salah satu dari 15 huruf Ikhfa, bunyi Nun/Tanwin disamarkan disertai dengung 2-3 harakat.",
      "5. **Ghunnah pada Iqlab**: Saat Nun sukun/Tanwin bertemu Ba (ب), bunyi Nun berubah menjadi Mim sementara lalu dibaca dengung 2 harakat.",
      "6. **Ghunnah pada Ikhfa Syafawi**: Saat Mim sukun bertemu Ba (ب), bunyi Mim dibaca samar disertai dengung 2 harakat dari bibir.",
      "7. **Ghunnah pada Idgham Mimi (Mutamatsilain)**: Saat Mim sukun bertemu Mim (م), Mim pertama lebur ke Mim kedua disertai dengung 2 harakat."
    ],
    examples: [
      {
        title: "Ghunnah Musyaddadah - Nun Tasydid",
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        highlight: "إِنَّ",
        explanation: "Nun bertasydid (نّ) pada kata 'inna'. Wajib mendengung selama 2 harakat dari hidung. Ini ghunnah paling kuat dan jelas."
      },
      {
        title: "Ghunnah Musyaddadah - Nun Tasydid (contoh lain)",
        arabic: "فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
        highlight: "إِنَّ",
        explanation: "Nun tasydid pada 'inna'. Dengung 2 harakat wajib diperdengarkan dengan jelas dari rongga hidung."
      },
      {
        title: "Ghunnah Musyaddadah - Mim Tasydid",
        arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
        highlight: "ثُمَّ",
        explanation: "Mim bertasydid (مّ) pada kata 'tsumma'. Wajib mendengung selama 2 harakat dari hidung."
      },
      {
        title: "Ghunnah Musyaddadah - Mim Tasydid (contoh lain)",
        arabic: "أَمَّن يُجِيبُ الْمُضْطَرَّ",
        highlight: "أَمَّ",
        explanation: "Mim bertasydid pada 'amma'. Dengung 2 harakat wajib — Ghunnah Musyaddadah."
      },
      {
        title: "Ghunnah pada Idgham Bighunnah - Nun + Ya",
        arabic: "مَن يَقُولُ",
        highlight: "ن يَ",
        explanation: "Nun mati bertemu Ya (ي) di kata berbeda. Bunyi Nun hilang, tergantikan dengung 2 harakat sebelum membaca Ya. Ghunnah ini berasal dari hidung."
      },
      {
        title: "Ghunnah pada Idgham Bighunnah - Tanwin + Mim",
        arabic: "غَفُورٌ مَّحِيمٌ",
        highlight: "ٌ مَّ",
        explanation: "Tanwin dhammah bertemu Mim. Bunyi tanwin lebur ke Mim disertai dengung 2 harakat dari hidung."
      },
      {
        title: "Ghunnah pada Idgham Bighunnah - Nun + Nun",
        arabic: "مِن نِّعْمَةٍ",
        highlight: "ن نِّ",
        explanation: "Nun mati bertemu Nun (ن). Nun pertama lebur ke Nun kedua disertai dengung 2 harakat. Ghunnah terdengar jelas."
      },
      {
        title: "Ghunnah pada Ikhfa Haqiqi - Nun + Ta",
        arabic: "مَنْ تَابَ",
        highlight: "نْ تَ",
        explanation: "Nun mati bertemu Ta (ت). Bunyi Nun tidak jelas (samar) namun disertai dengung 2-3 harakat dari hidung. Posisi lidah sudah bersiap ke Ta, tapi dengung tetap terdengar."
      },
      {
        title: "Ghunnah pada Ikhfa Haqiqi - Tanwin + Kaf",
        arabic: "عَلِيمٌ كَبِيرٌ",
        highlight: "ٌ كَ",
        explanation: "Tanwin dhammah bertemu Kaf (ك). Bunyi tanwin disamarkan dengan dengung dari hidung selama 2-3 harakat sebelum masuk ke Kaf."
      },
      {
        title: "Ghunnah pada Iqlab - Nun + Ba",
        arabic: "مِنۢ بَعْدِ",
        highlight: "نۢ بَ",
        explanation: "Nun mati bertemu Ba (ب). Bunyi Nun berubah menjadi Mim sementara, lalu dengung 2 harakat terdengar dari hidung sebelum masuk ke Ba."
      },
      {
        title: "Ghunnah pada Iqlab - Tanwin + Ba",
        arabic: "سَمِيعٌۢ بَصِيرٌ",
        highlight: "ٌۢ بَ",
        explanation: "Tanwin dhammah bertemu Ba (ب). Tanwin berubah menjadi bunyi Mim sementara disertai dengung 2 harakat dari hidung."
      },
      {
        title: "Ghunnah pada Ikhfa Syafawi - Mim + Ba",
        arabic: "تَرْمِيهِم بِحِجَارَةٍ",
        highlight: "مْ بِ",
        explanation: "Mim mati bertemu Ba (ب). Mim dibaca samar — bibir tidak menutup rapat — disertai dengung 2 harakat dari hidung. Dengungnya dari bibir dan hidung sekaligus."
      },
      {
        title: "Ghunnah pada Ikhfa Syafawi - contoh lain",
        arabic: "وَمَا هُمْ بِمُؤْمِنِينَ",
        highlight: "مْ بِ",
        explanation: "Mim mati bertemu Ba (ب). Bunyi mim samar dengan dengung 2 harakat — Ikhfa Syafawi disertai Ghunnah."
      },
      {
        title: "Ghunnah pada Idgham Mimi - Mim + Mim",
        arabic: "لَكُم مَّا كَسَبْتُمْ",
        highlight: "مْ مَّ",
        explanation: "Mim mati bertemu Mim (م). Mim pertama lebur ke Mim kedua disertai dengung 2 harakat dari hidung. Ini disebut Idgham Mimi atau Mutamatsilain."
      },
      {
        title: "Ghunnah pada Idgham Mimi - contoh lain",
        arabic: "أَعْلَمُ مَا فِي",
        highlight: "مُ مَ",
        explanation: "Mim mati bertemu Mim berharakat. Kedua Mim digabung dengan dengung 2 harakat — Idgham Mimi disertai Ghunnah."
      }
    ]
  },
  {
    id: "lam_tarif",
    title: "Lam Ta'rif (Alif Lam)",
    description: "Hukum Alif Lam (ال) di awal kata: dibaca jelas (Qamariyah) atau lebur (Syamsiyah).",
    longDescription: "Lam Ta'rif adalah huruf Alif (ا) dan Lam (ل) yang masuk pada kata benda (Isim) sebagai kata sandang — seperti 'the' dalam bahasa Inggris. Terbagi menjadi dua: Al-Qamariyah (Lam dibaca jelas karena huruf sesudahnya bukan golongan matahari) dan Al-Syamsiyah (Lam melebur/hilang ke huruf sesudahnya yang bertasydid). Cara mudah mengingat: huruf Syamsiyah adalah huruf yang 'menelan' Lam, sedangkan huruf Qamariyah membiarkan Lam tetap jelas.",
    materi: [
      "1. **Lam Qamariyah**: Alif Lam (ال) bertemu salah satu dari 14 huruf Qamariyah — Lam dibaca JELAS dengan tanda sukun (لْ). Huruf Qamariyah: ا ب ج ح خ ع غ ف ق ك م و ه ي. Diingat dengan kalimat 'Abghi Haqqa Ak-ha-ka Wafa' (اِبْغِ حَقَّ أَخَاكَ وَفَا).",
      "2. **Lam Syamsiyah**: Alif Lam (ال) bertemu salah satu dari 14 huruf Syamsiyah — Lam MELEBUR dan menghilang masuk ke huruf sesudahnya yang menjadi bertasydid. Huruf Syamsiyah: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. Diingat bahwa huruf-huruf ini sama dengan makharijnya yang dekat dengan Lam."
    ],
    examples: [
      {
        title: "Lam Qamariyah - bertemu Alif (ا)",
        arabic: "الْأَرْضُ",
        highlight: "الْأَ",
        explanation: "Alif Lam bertemu Alif (ا). Lam dibaca jelas dengan sukun: 'al-ardhu'. Alif termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Ba (ب)",
        arabic: "الْبَيْتِ",
        highlight: "الْبَ",
        explanation: "Alif Lam bertemu Ba (ب). Lam dibaca jelas: 'al-bayt'. Ba termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Jim (ج)",
        arabic: "الْجَنَّةُ",
        highlight: "الْجَ",
        explanation: "Alif Lam bertemu Jim (ج). Lam dibaca jelas: 'al-jannah'. Jim termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Ha (ح)",
        arabic: "الْحَمْدُ لِلَّهِ",
        highlight: "الْحَ",
        explanation: "Alif Lam bertemu Ha (ح). Lam dibaca jelas dengan sukun: 'al-hamdu'. Ha termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Kha (خ)",
        arabic: "الْخَيْرِ",
        highlight: "الْخَ",
        explanation: "Alif Lam bertemu Kha (خ). Lam dibaca jelas: 'al-khayri'. Kha termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu 'Ain (ع)",
        arabic: "الْعَالَمِينَ",
        highlight: "الْعَ",
        explanation: "Alif Lam bertemu 'Ain (ع). Lam dibaca jelas: 'al-'aalamiin'. 'Ain termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Ghain (غ)",
        arabic: "الْغَيْبِ",
        highlight: "الْغَ",
        explanation: "Alif Lam bertemu Ghain (غ). Lam dibaca jelas: 'al-ghaybi'. Ghain termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Fa (ف)",
        arabic: "الْفَاتِحَةِ",
        highlight: "الْفَ",
        explanation: "Alif Lam bertemu Fa (ف). Lam dibaca jelas: 'al-faatihah'. Fa termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Qaf (ق)",
        arabic: "الْقُرْآنُ",
        highlight: "الْقُ",
        explanation: "Alif Lam bertemu Qaf (ق). Lam dibaca jelas: 'al-qur'aan'. Qaf termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Kaf (ك)",
        arabic: "الْكِتَابُ",
        highlight: "الْكِ",
        explanation: "Alif Lam bertemu Kaf (ك). Lam dibaca jelas: 'al-kitaab'. Kaf termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Mim (م)",
        arabic: "الْمُتَّقِينَ",
        highlight: "الْمُ",
        explanation: "Alif Lam bertemu Mim (م). Lam dibaca jelas: 'al-muttaqiin'. Mim termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Waw (و)",
        arabic: "الْوَارِثُونَ",
        highlight: "الْوَ",
        explanation: "Alif Lam bertemu Waw (و). Lam dibaca jelas: 'al-waaritsuun'. Waw termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Ha (ه)",
        arabic: "الْهُدَى",
        highlight: "الْهُ",
        explanation: "Alif Lam bertemu Ha (ه). Lam dibaca jelas: 'al-hudaa'. Ha termasuk huruf Qamariyah."
      },
      {
        title: "Lam Qamariyah - bertemu Ya (ي)",
        arabic: "الْيَوْمِ",
        highlight: "الْيَ",
        explanation: "Alif Lam bertemu Ya (ي). Lam dibaca jelas: 'al-yawmi'. Ya termasuk huruf Qamariyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Ta (ت)",
        arabic: "التَّوَّابُ",
        highlight: "التَّ",
        explanation: "Alif Lam bertemu Ta (ت). Lam melebur hilang, Ta menjadi bertasydid: 'at-tawwaab'. Ta termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Tsa (ث)",
        arabic: "الثَّمَرَاتِ",
        highlight: "الثَّ",
        explanation: "Alif Lam bertemu Tsa (ث). Lam melebur ke Tsa: 'ats-tsamaraat'. Tsa termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Dal (د)",
        arabic: "الدِّينُ",
        highlight: "الدِّ",
        explanation: "Alif Lam bertemu Dal (د). Lam melebur ke Dal: 'ad-diin'. Dal termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Dzal (ذ)",
        arabic: "الذِّكْرُ",
        highlight: "الذِّ",
        explanation: "Alif Lam bertemu Dzal (ذ). Lam melebur ke Dzal: 'adz-dzikr'. Dzal termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Ra (ر)",
        arabic: "الرَّحِيمِ",
        highlight: "الرَّ",
        explanation: "Alif Lam bertemu Ra (ر). Lam melebur ke Ra: 'ar-rahiim'. Ra termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Za (ز)",
        arabic: "الزَّكَاةَ",
        highlight: "الزَّ",
        explanation: "Alif Lam bertemu Za (ز). Lam melebur ke Za: 'az-zakaah'. Za termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Sin (س)",
        arabic: "السَّمِيعُ",
        highlight: "السَّ",
        explanation: "Alif Lam bertemu Sin (س). Lam melebur ke Sin: 'as-samii''. Sin termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Syin (ش)",
        arabic: "الشَّمْسُ",
        highlight: "الشَّ",
        explanation: "Alif Lam bertemu Syin (ش). Lam melebur ke Syin: 'asy-syams'. Syin termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Shad (ص)",
        arabic: "الصَّلَاةَ",
        highlight: "الصَّ",
        explanation: "Alif Lam bertemu Shad (ص). Lam melebur ke Shad: 'ash-shalaah'. Shad termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Dhad (ض)",
        arabic: "الضَّالِّينَ",
        highlight: "الضَّ",
        explanation: "Alif Lam bertemu Dhad (ض). Lam melebur ke Dhad: 'adh-dhaallin'. Dhad termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Tha (ط)",
        arabic: "الطَّرِيقِ",
        highlight: "الطَّ",
        explanation: "Alif Lam bertemu Tha (ط). Lam melebur ke Tha: 'ath-thariq'. Tha termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Zha (ظ)",
        arabic: "الظَّالِمُونَ",
        highlight: "الظَّ",
        explanation: "Alif Lam bertemu Zha (ظ). Lam melebur ke Zha: 'azh-zhaalimun'. Zha termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Lam (ل)",
        arabic: "اللَّيْلِ",
        highlight: "اللَّ",
        explanation: "Alif Lam bertemu Lam (ل). Lam pertama melebur ke Lam kedua yang bertasydid: 'al-layl'. Lam termasuk huruf Syamsiyah."
      },
      {
        title: "Lam Syamsiyah - bertemu Nun (ن)",
        arabic: "النَّاسِ",
        highlight: "النَّ",
        explanation: "Alif Lam bertemu Nun (ن). Lam melebur ke Nun: 'an-naas'. Nun termasuk huruf Syamsiyah."
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
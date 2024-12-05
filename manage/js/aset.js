const questions = [
    {
        "question": "Dalam proses pengambilan keputusan, saya suka...",
        "options": [
            "Melontarkan gagasan yang memancing keterlibatan anggota",
            "Mengusahakan agar pendapat saya diterima",
            "Menciptakan suasana agar orang tidak berani mengungkapkan pendapatnya",
            "Mempercayakan keputusan pada kelompok"
        ]
    },
    {
        "question": "Ketika Anda diminta saran oleh teman yang sudah berhasil dalam usahanya, Anda akan menyarankan...",
        "options": [
            "Meningkatkan kemampuan dan pengetahuan",
            "Memanfaatkan orang lain yang lebih berpengalaman dan berpengetahuan luas",
            "Berusaha memperoleh dukungan dari pihak luar",
            "Bekerjasama dengan orang yang berwawasan luas"
        ]
    },
    {
        "question": "Seorang teman ingin meminjam mobil Anda untuk keperluannya, sementara Anda tahu dia tidak memiliki surat izin mengemudi. Sikap Anda adalah...",
        "options": [
            "Menolak permintaannya dengan alasan mobil akan saya gunakan",
            "Meminjamkannya dengan perasaan cemas",
            "Ragu-ragu untuk memenuhi permintaannya",
            "Menolak permintaannya karena ingin mematuhi peraturan"
        ]
    },
    {
        "question": "Atasan Anda menetapkan target tugas harus selesai pada deadline tanggal 27 bulan ini, maka...",
        "options": [
            "Anda akan selesaikan tepat pada tanggal 27.",
            "Kalau tugas lain menumpuk, Anda akan meminta izin untuk menyelesaikan barang satu atau dua hari sesudah deadline.",
            "Anda mencoba menyelesaikan tanggal 26 jika memungkinkan.",
            "Anda menegosiasikan deadline yang ditetapkan atasan tersebut dengan baik-baik agar tidak terlalu memberatkan."
        ]
    },
    {
        "question": "Anda sedang mengemudi kendaraan, tiba-tiba handphone Anda berdering, apa yang akan Anda lakukan?",
        "options": [
            "Menepi untuk mengangkat handphone",
            "Menyuruh rekan yang di samping Anda untuk mengangkatnya",
            "Membiarkannya saja sampai ke tempat tujuan",
            "Mematikan handphone karena mengganggu konsentrasi saat berkendara"
        ]
    },
    {
        "question": "Suatu hari, pimpinan Anda sedang berada di luar kota sementara ada dokumen penting dan mendesak yang harus ditandatangani. Pimpinan sudah memberikan izin kepada Anda untuk memalsukan tanda tangannya. Sikap Anda adalah...",
        "options": [
            "Mengikuti perintah pimpinan.",
            "Menunggu hingga pimpinan datang.",
            "Meminta orang lain untuk memalsukan tanda tangan itu.",
            "Menyusul pimpinan ke luar kota walau pekerjaan harus terbengkalai."
        ]
    },
    {
        "question": "Anda ditugaskan untuk memimpin sebuah proyek yang melibatkan anggota tim dari berbagai departemen. Salah satu anggota tim secara konsisten tidak memberikan kontribusi yang berarti. Tindakan Anda adalah...",
        "options": [
            "Membiarkannya saja karena tidak ingin menimbulkan konflik.",
            "Membicarakan masalah ini secara pribadi dengan anggota tim tersebut.",
            "Melaporkan masalah ini kepada atasan langsung.",
            "Mengganti anggota tim tersebut dengan orang lain."
        ]
    },
    {
        "question": "Anda menemukan kesalahan dalam laporan yang akan segera diserahkan kepada klien. Kesalahan ini cukup signifikan dan dapat mempengaruhi keputusan klien. Tindakan Anda adalah...",
        "options": [
            "Mengabaikan kesalahan tersebut karena deadline sudah dekat.",
            "Meminta rekan kerja untuk memeriksa kembali laporan tersebut.",
            "Melaporkan kesalahan tersebut kepada atasan dan meminta petunjuk.",
            "Memperbaiki kesalahan tersebut sendiri dan memastikan laporan sudah akurat."
        ]
    },
    {
        "question": "Perusahaan Anda sedang mengalami kesulitan keuangan. Atasan Anda meminta Anda untuk bekerja lembur tanpa tambahan gaji. Tindakan Anda adalah...",
        "options": [
            "Menerima permintaan atasan tanpa banyak bertanya.",
            "Menolak permintaan atasan karena merasa tidak adil.",
            "Mengajukan negosiasi terkait tambahan gaji atau kompensasi lain.",
            "Mencari pekerjaan baru."
        ]
    },
    {
        "question": "Anda memiliki ide baru yang dapat meningkatkan efisiensi kerja di departemen Anda. Namun, atasan Anda kurang antusias dengan ide tersebut. Tindakan Anda adalah...",
        "options": [
            "Menyerah dan tidak melanjutkan ide tersebut.",
            "Membuktikan bahwa ide tersebut efektif dengan melakukan percobaan kecil.",
            "Mencari dukungan dari rekan kerja lain untuk meyakinkan atasan.",
            "Menyampaikan ide tersebut kepada atasan yang berbeda."
        ]
    },
    {
        "question": "Anda diundang ke acara ulang tahun rekan kerja. Namun, Anda tidak terlalu mengenal rekan kerja tersebut. Tindakan Anda adalah...",
        "options": [
            "Menolak undangan karena merasa tidak nyaman.",
            "Menghadiri acara dan berusaha untuk bersosialisasi.",
            "Mengirimkan ucapan selamat ulang tahun melalui pesan.",
            "Meminta teman lain untuk mewakili Anda."
        ]
    },
    {
        "question": "Anda ditugaskan untuk memberikan presentasi penting di depan klien. Namun, sehari sebelum presentasi, Anda jatuh sakit dan suara Anda serak. Apa yang akan Anda lakukan?",
        "options": [
            "Tetap memaksakan diri untuk presentasi.",
            "Meminta rekan kerja untuk menggantikan Anda.",
            "Memberitahu klien dan meminta penjadwalan ulang.",
            "Merekam presentasi dan memutarnya saat presentasi."
        ]
    },
    {
        "question": "Anda mengetahui bahwa rekan kerja Anda sedang mengalami kesulitan pribadi yang cukup serius. Bagaimana cara Anda merespons situasi ini?",
        "options": [
            "Mengabaikan masalah tersebut agar tidak mengganggu pekerjaan.",
            "Menawarkan bantuan secara terbuka.",
            "Berbicara dengan atasan tentang masalah tersebut.",
            "Meminta saran dari rekan kerja lain."
        ]
    },
    {
        "question": "Perusahaan Anda sedang merancang produk baru. Anda memiliki ide yang sangat inovatif, tetapi berpotensi menimbulkan risiko yang cukup besar. Apa yang akan Anda lakukan?",
        "options": [
            "Menyembunyikan ide tersebut.",
            "Menyampaikan ide tersebut kepada atasan dan meminta pendapatnya.",
            "Melakukan riset lebih lanjut untuk meminimalisir risiko.",
            "Menyajikan ide tersebut dalam rapat tim untuk mendapatkan masukan."
        ]
    },
    {
        "question": "Anda ditugaskan untuk memimpin sebuah proyek yang sangat penting. Namun, Anda merasa tidak memiliki cukup pengalaman untuk mengerjakan proyek tersebut. Apa yang akan Anda lakukan?",
        "options": [
            "Menolak tugas tersebut.",
            "Menerima tugas tersebut dan berusaha menyelesaikannya sendiri.",
            "Meminta bantuan dari rekan kerja yang lebih berpengalaman.",
            "Mencari informasi dan pelatihan tambahan."
        ]
    },
    {
        "question": "Anda melihat seorang rekan kerja melakukan kesalahan yang dapat merugikan perusahaan. Apa yang akan Anda lakukan?",
        "options": [
            "Mengabaikan kesalahan tersebut.",
            "Membicarakan masalah ini dengan rekan kerja tersebut secara pribadi.",
            "Melaporkan kesalahan tersebut kepada atasan.",
            "Mencari cara untuk memperbaiki kesalahan tersebut tanpa diketahui orang lain."
        ]
    },
    {
        "question": "Anda diminta untuk memberikan umpan balik negatif kepada seorang rekan kerja. Bagaimana cara Anda menyampaikannya?",
        "options": [
            "Menyampaikan secara langsung dan terbuka.",
            "Menyampaikan secara tidak langsung melalui email.",
            "Meminta atasan untuk menyampaikannya.",
            "Mengabaikan masalah tersebut."
        ]
    },
    {
        "question": "Perusahaan Anda sedang mengalami reorganisasi. Anda khawatir akan kehilangan pekerjaan. Apa yang akan Anda lakukan?",
        "options": [
            "Mengabaikan kekhawatiran tersebut dan fokus pada pekerjaan.",
            "Mulai mencari pekerjaan baru.",
            "Membicarakan kekhawatiran Anda dengan atasan.",
            "Meningkatkan kinerja Anda."
        ]
    },
    {
        "question": "Anda ditugaskan untuk memimpin sebuah tim proyek yang terdiri dari anggota dengan latar belakang budaya yang berbeda. Bagaimana Anda akan mengatasi potensi konflik budaya dalam tim?",
        "options": [
            "Mengabaikan perbedaan budaya dan fokus pada tugas.",
            "Menunjuk seorang pemimpin tim yang berasal dari budaya mayoritas.",
            "Memfasilitasi komunikasi terbuka dan saling pengertian.",
            "Meminta anggota tim untuk menyesuaikan diri dengan budaya mayoritas."
        ]
    },
    {
        "question": "Anda sedang bekerja pada proyek yang sangat mendesak. Namun, Anda juga memiliki tanggung jawab keluarga yang penting. Bagaimana Anda akan menyeimbangkan keduanya?",
        "options": [
            "Mengabaikan tanggung jawab keluarga untuk fokus pada pekerjaan.",
            "Meminta bantuan rekan kerja untuk menyelesaikan pekerjaan.",
            "Meminta cuti untuk menyelesaikan urusan keluarga.",
            "Mencari solusi yang memungkinkan Anda menyelesaikan keduanya."
        ]
    },
    {
        "question": "Anda mengetahui bahwa rekan kerja Anda sedang mengalami kesulitan pribadi. Bagaimana Anda akan merespons situasi ini?",
        "options": [
            "Mengabaikan masalah tersebut.",
            "Menawarkan bantuan secara terbuka.",
            "Berbicara dengan atasan tentang masalah tersebut.",
            "Meminta saran dari rekan kerja lain."
        ]
    },
    {
        "question": "Anda dihadapkan pada situasi di mana Anda harus membuat keputusan yang sulit. Bagaimana Anda akan mengambil keputusan tersebut?",
        "options": [
            "Mengambil keputusan berdasarkan intuisi.",
            "Mengambil keputusan berdasarkan pendapat orang lain.",
            "Mengambil keputusan berdasarkan data dan fakta.",
            "Mengambil keputusan berdasarkan perasaan."
        ]
    },
    {
        "question": "Anda sedang bekerja pada proyek yang kompleks. Bagaimana Anda akan mengorganisir pekerjaan Anda?",
        "options": [
            "Menunda pekerjaan hingga deadline semakin dekat.",
            "Memulai dengan tugas yang paling mudah.",
            "Membuat daftar tugas dan memprioritaskannya.",
            "Bekerja secara acak tanpa perencanaan."
        ]
    },
    {
        "question": "Anda ingin meningkatkan keterampilan kepemimpinan Anda. Apa yang akan Anda lakukan?",
        "options": [
            "Mengikuti pelatihan kepemimpinan.",
            "Membaca buku-buku tentang kepemimpinan.",
            "Mengamati pemimpin yang sukses.",
            "Semua jawaban di atas."
        ]
    },
    {
        "question": "Anda ingin meningkatkan produktivitas kerja Anda. Apa yang akan Anda lakukan?",
        "options": [
            "Bekerja lebih lama setiap hari.",
            "Mengabaikan gangguan seperti telepon dan email.",
            "Menggunakan teknik manajemen waktu yang efektif.",
            "Semua jawaban di atas."
        ]
    },
    {
        "question": "Anda ingin membangun hubungan yang baik dengan rekan kerja. Apa yang akan Anda lakukan?",
        "options": [
            "Selalu berusaha untuk menyenangkan semua orang.",
            "Berkomunikasi secara terbuka dan jujur.",
            "Menghindari konflik dengan rekan kerja.",
            "Selalu bersedia membantu rekan kerja."
        ]
    },
    {
        "question": "Anda merasa kurang nyaman karena pegawai di lingkungan unit kerja Anda mayoritas berasal dari daerah tertentu.",
        "options": [
            "Sangat Setuju",
            "Setuju",
            "Ragu-ragu",
            "Tidak Setuju",
            "Sangat Tidak Setuju"
        ]
    },
    {
        "question": "Saya bersabar jika teman saya di tempat kerja suka sombong dan memamerkan mobil baru miliknya.",
        "options": [
            "Sangat Setuju",
            "Setuju",
            "Ragu-ragu",
            "Tidak Setuju",
            "Sangat Tidak Setuju"
        ]
    },
    {
        "question": "Anda lebih baik menyelesaikan pekerjaan rumah tangga terlebih dahulu daripada mengikuti meeting tempat kerja.",
        "options": [
            "Sangat Setuju",
            "Setuju",
            "Ragu-ragu",
            "Tidak Setuju",
            "Sangat Tidak Setuju"
        ]
    },
    {
        "question": "Di tempat Anda tinggal akan diadakan lomba 17 Agustus. Ketua RT meminta Anda agar tidak memiliki panitia lomba yang berbeda agama.",
        "options": [
            "Sangat Setuju",
            "Setuju",
            "Ragu-ragu",
            "Tidak Setuju",
            "Sangat Tidak Setuju"
        ]
    },
    {
        "question": "Saya percaya bahwa saya bisa melakukan suatu pekerjaan yang cukup berat walaupun saya kerjakan sendiri.",
        "options": [
            "Sangat Setuju",
            "Setuju",
            "Ragu-ragu",
            "Tidak Setuju",
            "Sangat Tidak Setuju"
        ]
    },
    {
        "question": "Anda bersikap tenang ketika memiliki teman yang berbeda adat dan budaya di tempat Anda bekerja.",
        "options": [
            "Sangat Setuju",
            "Setuju",
            "Ragu-ragu",
            "Tidak Setuju",
            "Sangat Tidak Setuju"
        ]
    },
    {
        "question": "Saya selalu bisa menahan emosi ketika ada yang menolak pendapat saya dalam rapat kantor",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju", "Sangat tidak setuju"]
    },
    {
        "question": "Anda akan menunda cuti liburan Anda ketika mengetahui kantor kekurangan pegawai karena rekan kantor yang beragama Nasrani juga mengajukan cuti untuk merayakan Natal",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju", "Sangat tidak setuju"]
    },
    {
        "question": "Jika ada konflik saya tetap bisa menjaga emosi saya.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju", "Sangat tidak setuju"]
    },
    {
        "question": "Anda menolak pekerjaan yang diberikan atasan ketika hari libur dan melemparkan pekerjaan kepada teman yang lain karena selama sepekan Anda sudah bekerja keras di kantor.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju", "Sangat tidak setuju"]
    },
    {
        "question": "Pada saat atasan menegur Anda dengan membentak di depan rekan kantor, Anda akan segera mengundurkan diri.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju", "Sangat tidak setuju"]
    },
    {
        "question": "Keberagaman tidak akan menjadi masalah selama kita bisa saling menghargai keberagaman dan menjunjung tinggi toleransi.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Saya bisa mengendalikan diri tidak ikut campur ketika ada teman sekantor saya berselisih paham tentang perbedaan.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Anda menikah dengan orang yang latar belakang budayanya berbeda sehingga Anda membutuhkan waktu cukup lama untuk beradaptasi.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Saya tetap berkepala dingin saat rekan saya bersitegang masalah politik di ruang kantor.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Anda bisa bekerja dalam keadaan tidak nyaman.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Di tempat Anda tinggal akan diadakan lomba 17 Agustus. Ketua RT meminta Anda agar tidak memiliki panitia lomba yang berbeda agama.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Jika ada konflik saya tetap bisa menjaga emosi saya.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Saya bersabar jika teman saya di tempat kerja suka sombong dan memamerkan barang-barang elektronik miliknya.",
        "options": ["Sangat Setuju", "Setuju", "Ragu-ragu", "Tidak setuju"]
    },
    {
        "question": "Anda tinggal di suatu lingkungan di mana pengumpulan sampah terhenti karena kerusakan mobil pengangkut sampah. Akibatnya, beberapa warga membuang sampah sembarangan ke sungai. Sebagai pihak yang peduli dengan kesehatan lingkungan, Anda dihadapkan pada beberapa pilihan tindakan.",
        "options": [
            "Mengingatkan warga agar tidak membuang sampah ke sungai karena akan menimbulkan banjir.",
            "Membicarakan persoalan tersebut dengan ketua RT dan tokoh masyarakat untuk mencari solusinya.",
            "Menyewa mobil yang dapat mengangkut sampah untuk mengangkut sampah yang menumpuk.",
            "Memarahi warga tersebut dengan nada keras agar tidak mengulangi lagi perbuatannya."
        ]
    },
    {
        "question": "Situasi ini sangat serius dan melibatkan keselamatan pasien. Sebagai seorang bidan yang bertugas membantu dokter dalam operasi bedah, Anda memiliki tanggung jawab besar untuk memastikan keselamatan pasien.",
        "options": [
            "Menegur dokter tersebut",
            "Melaporkan kepada atasan bahwa dokter dalam keadaan mabuk",
            "Membiarkannya yang penting pelaksanaan tercapai",
            "Tetap membantu dokter tersebut dan bila terjadi apa-apa Anda punya alasan supaya tidak disalahkan"
        ]
    },
    {
        "question": "Pandangan Anda tentang keterlibatan masyarakat dalam penyelenggaraan kesehatan di Puskesmas adalah...",
        "options": [
            "Masyarakat memiliki potensi-potensi yang dapat dikolaborasikan dengan kegiatan kesehatan sesuai prosedur dan aturan yang berlaku",
            "Masyarakat merupakan partner puskesmas dalam memajukan kesehatan, sehingga perlu diikutkan dalam perencanaan puskesmas.",
            "Masyarakat dan puskesmas perlu bekerja sama dengan membuat kontrak kesepakatan yang nyata dalam dokumen yang dapat dipertanggungjawabkan.",
            "Masyarakat akan datang jika ada undangan dari puskesmas"
        ]
    },
    {
        "question": "Anda telah bekerja keras pada suatu tugas, namun kemudian atasan Anda memberikan kritik yang tajam terhadap hasil kerja Anda. Pertanyaannya adalah, reaksi mana yang paling mungkin Anda lakukan?",
        "options": [
            "Menerima kritikan apa adanya dan mencari sumber referensi baru yang mendukung",
            "Menahan diri, mencermati kritikan tersebut untuk melakukan perbaikan.",
            "Meminta penjelasan dan dukungan atasan, dan mencari strategi baru untuk perbaikan",
            "Tidak membalas kritikan tersebut dan juga tidak melakukan perbaikan karena tidak ada gunanya."
        ]
    },
    {
        "question": "Di klinik tempat Anda bekerja, masih banyak pasien yang merokok di area klinik meskipun sudah ada larangan. Sebagai pegawai klinik, solusi apa yang akan Anda berikan?",
        "options": [
            "Saya akan lebih aktif dalam memperingatkan pasien yang kedapatan sering merokok di area klinik.",
            "Bersama seluruh komponen klinik, untuk memberikan contoh perilaku baik tidak merokok.",
            "Meminta kepala klinik agar turun langsung menangani masalah ini dan memberikan sanksi.",
            "Memarahi dengan membentak pasien agar tidak merokok dan mengulangi perbuatannya tersebut."
        ]
    },
    {
        "question": "Ketika ada pelanggan yang mengeluh tentang pelayanan di tempat kerja Anda, tindakan apa yang akan Anda ambil?",
        "options": [
            "Mencatat dan menyampaikan keluhan tersebut pada atasan saya.",
            "Mencoba membantu pelanggan menyelesaikan persoalan.",
            "Menjelaskan aturan dan prosedur yang berlaku pada pelanggan.",
            "Menjelaskan peran saya dalam menangani keluhan pelanggan."
        ]
    },
    {
        "question": "Anda bekerja di apotek sebagai bagian penjualan. Saat apoteker belum datang, ada pelanggan yang ingin membeli obat racikan yang kebetulan Anda tahu cara membuatnya. Pertanyaannya adalah, apa yang akan Anda lakukan?",
        "options": [
            "Mencoba menghubungi apoteker dan menanyakan waktu kedatangannya.",
            "Langsung membuatkannya obat karena merasa kasihan.",
            "Memintanya untuk menunggu apoteker datang.",
            "Menjelaskan bahwa apoteker belum datang."
        ]
    },
    {
        "question": "Anda ditunjuk sebagai ketua rapat pelayanan kesehatan masyarakat di puskesmas. Saat rapat berlangsung, ada peserta yang menerima telepon. Tindakan apa yang akan Anda lakukan?",
        "options": [
            "Menegurnya supaya keluar dari rapat",
            "Membiarkannya menerima telepon",
            "Berbisik kepadanya supaya berhenti menerima telepon.",
            "Membiarkannya."
        ]
    },
    {
        "question": "Anda sebagai seorang bidan yang dianggap kompeten diminta untuk menggantikan bidan lain yang sakit dalam mengkoordinasikan panitia peringatan HUT RI di rumah sakit. Tindakan yang paling tepat untuk Anda lakukan adalah...",
        "options": [
            "Mengkoordinasikan dan bersinergi dengan pihak-pihak yang terlibat dalam kepanitiaan",
            "Menerima tugas itu, dan menjalankannya setelah tugas-tugas lain yang datang terlebih dahulu",
            "Walaupun dengan berat hati akan bekerja dan menjalankan tugas itu apa adanya",
            "Menolaknya karena bukan tugas dan tanggung jawab saya"
        ]
    },
    {
        "question": "Anda bekerja di suatu tempat (mungkin rumah sakit atau klinik) dan ada situasi di mana:",
        "options": [
            "Menggantikan teman Anda, dengan mengurusi kepentingan pelanggan tersebut.",
            "Melanjutkan tugas teman yang kelelahan, supaya kantor tidak terbengkalai.",
            "Menyelesaikan tugas Anda sampai selesai, baru membantu teman yang kelelahan.",
            "Membiarkan saja karena bukan tugas saya."
        ]
    },
    {
        "question": "Saat atasan Anda memberi tugas mendadak, padahal Anda sudah memiliki banyak pekerjaan, apa yang akan Anda lakukan?",
        "options": [
            "Menerima tugas tersebut dan menyelesaikannya setelah tugas utama selesai.",
            "Meminta atasan mempertimbangkan kembali tugas tersebut.",
            "Menolak karena merasa tidak mampu menyelesaikannya.",
            "Mengeluh kepada rekan kerja tentang tugas tambahan tersebut."
        ]
    },
    {
        "question": "Anda menyadari bahwa rekan kerja Anda sering menghindari tanggung jawab dalam tim. Apa tindakan Anda?",
        "options": [
            "Mengingatkannya secara langsung dengan sopan.",
            "Membiarkan, karena itu bukan tanggung jawab Anda.",
            "Melaporkan kepada atasan.",
            "Mengambil alih tanggung jawab yang seharusnya menjadi miliknya."
        ]
    },
    {
        "question": "Ketika ada rekan kerja yang menyampaikan pendapatnya dengan keras di dalam rapat, Anda akan...",
        "options": [
            "Mendengarkan pendapatnya dan mencoba memahami sudut pandangnya.",
            "Meminta rekan kerja tersebut untuk berbicara dengan nada yang lebih tenang.",
            "Mengabaikan pendapatnya karena cara penyampaiannya kurang sopan.",
            "Mengkritiknya secara terbuka di depan semua peserta rapat."
        ]
    },
    {
        "question": "Anda menemukan teman sekantor menggunakan peralatan kantor untuk keperluan pribadi. Apa yang akan Anda lakukan?",
        "options": [
            "Mengabaikan karena itu bukan urusan Anda.",
            "Memberitahunya bahwa itu melanggar aturan kantor.",
            "Melaporkan ke atasan untuk tindakan lebih lanjut.",
            "Menggunakan peralatan tersebut juga karena semua orang melakukannya."
        ]
    },
    {
        "question": "Seorang pelanggan mengeluh tentang pelayanan Anda, padahal Anda sudah bekerja sesuai prosedur. Apa langkah Anda?",
        "options": [
            "Mendengarkan keluhan pelanggan dengan sabar dan mencari solusinya.",
            "Menjelaskan bahwa Anda sudah bekerja sesuai prosedur.",
            "Mengabaikan keluhan pelanggan karena itu bukan kesalahan Anda.",
            "Menyalahkan pelanggan atas kesalahpahaman yang terjadi."
        ]
    },
    {
        "question": "Rekan kerja Anda sering terlambat datang ke kantor, dan itu memengaruhi pekerjaan tim. Apa yang akan Anda lakukan?",
        "options": [
            "Memberikan saran agar dia lebih disiplin.",
            "Melaporkannya kepada atasan.",
            "Membiarkan, karena itu bukan urusan Anda.",
            "Menggantikannya dalam menyelesaikan pekerjaannya."
        ]
    },
    {
        "question": "Anda diminta mengerjakan tugas tambahan di luar deskripsi pekerjaan Anda. Apa yang Anda lakukan?",
        "options": [
            "Menerima tugas tersebut sebagai bentuk tanggung jawab.",
            "Menolak karena merasa itu bukan bagian dari pekerjaan Anda.",
            "Menerima, tetapi dengan syarat mendapatkan kompensasi tambahan.",
            "Melaporkan hal ini ke HR untuk mendapatkan kejelasan tugas."
        ]
    },
    {
        "question": "Ketika Anda sedang sibuk bekerja, atasan Anda meminta Anda mengerjakan hal lain yang mendesak. Apa yang akan Anda lakukan?",
        "options": [
            "Segera mengerjakan tugas mendesak tersebut.",
            "Meminta waktu untuk menyelesaikan pekerjaan yang sedang dikerjakan.",
            "Menolak karena pekerjaan Anda juga penting.",
            "Meminta rekan kerja lain untuk mengerjakan tugas tersebut."
        ]
    },
    {
        "question": "Saat rekan kerja Anda meminta bantuan di tengah-tengah kesibukan Anda, apa yang akan Anda lakukan?",
        "options": [
            "Membantu sebisa mungkin sambil tetap menyelesaikan pekerjaan sendiri.",
            "Menolak karena Anda juga sedang sibuk.",
            "Meminta rekan lain untuk membantunya.",
            "Menunda pekerjaan Anda untuk membantunya."
        ]
    },
    {
        "question": "Ketika terjadi konflik antar rekan kerja di kantor, Anda akan...",
        "options": [
            "Menengahi dan mencari solusi yang adil.",
            "Meminta atasan untuk menyelesaikan konflik tersebut.",
            "Menghindari terlibat karena itu bukan urusan Anda.",
            "Mendukung salah satu pihak yang Anda anggap benar."
        ]
    },
    {
        "question": "Anda melihat seorang pelanggan membuang sampah sembarangan di lingkungan kerja Anda. Apa tindakan Anda?",
        "options": [
            "Menegurnya dengan sopan agar tidak mengulangi perbuatannya.",
            "Mengabaikan karena tidak ingin menimbulkan konflik.",
            "Membersihkan sampah tersebut tanpa menegurnya.",
            "Melaporkan kepada pihak keamanan."
        ]
    },
    {
        "question": "Ketika seorang rekan kerja Anda berbicara buruk tentang atasan di depan Anda, bagaimana reaksi Anda?",
        "options": [
            "Mengabaikan pembicaraannya dan fokus pada pekerjaan.",
            "Mengingatkan bahwa pembicaraan seperti itu tidak produktif.",
            "Ikut berbicara buruk tentang atasan untuk menyenangkan rekan Anda.",
            "Melaporkan pembicaraan tersebut kepada atasan."
        ]
    },
    {
        "question": "Anda menemukan informasi penting terkait proyek tim yang akan sangat membantu, tetapi rekan kerja Anda tidak mengetahuinya. Apa yang Anda lakukan?",
        "options": [
            "Menggunakan informasi tersebut tanpa memberitahukan tim.",
            "Menyimpan informasi itu untuk kepentingan pribadi.",
            "Menunggu hingga rekan kerja Anda menemukannya sendiri.",
            "Membagikan informasi tersebut kepada tim."
        ]
    },
    {
        "question": "Jika Anda diminta untuk memimpin sebuah proyek besar, tetapi Anda merasa kurang pengalaman, apa yang akan Anda lakukan?",
        "options": [
            "Menerima tetapi meminta bantuan dari rekan kerja yang lebih berpengalaman.",
            "Menerima tantangan tersebut dan belajar selama proses berjalan.",
            "Mendelegasikan semua tugas kepada tim tanpa terlibat langsung.",
            "Menolak karena merasa tidak siap."
        ]
    },
    {
        "question": "Anda bekerja dalam sebuah tim, tetapi ada anggota yang sering tidak hadir. Apa yang akan Anda lakukan?",
        "options": [
            "Mengabaikannya karena bukan tanggung jawab Anda.",
            "Berbicara langsung dengan anggota tersebut untuk mencari solusinya.",
            "Menyampaikan masalah ini kepada atasan.",
            "Mengerjakan tugasnya untuk menjaga kinerja tim."
        ]
    },
    {
        "question": "Anda sedang menyelesaikan pekerjaan penting, tetapi ada rekan kerja yang terus mengajak berbicara. Apa yang Anda lakukan?",
        "options": [
            "Menghentikan percakapan dengan sopan dan kembali fokus bekerja.",
            "Membiarkan pembicaraan terus berlangsung meskipun pekerjaan terganggu.",
            "Meminta rekan kerja untuk berbicara nanti setelah pekerjaan selesai.",
            "Melaporkannya kepada atasan."
        ]
    },
    {
        "question": "Ketika Anda membuat kesalahan dalam pekerjaan, apa yang akan Anda lakukan?",
        "options": [
            "Mengakui kesalahan dan mencari solusi untuk memperbaikinya.",
            "Melaporkan kesalahan tersebut kepada atasan dan meminta bimbingan.",
            "Mengabaikan kesalahan dan berharap tidak ada yang memperhatikan.",
            "Menyalahkan rekan kerja atas kesalahan tersebut."
        ]
    },
    {
        "question": "Jika ada pelanggan yang marah karena pelayanan Anda, bagaimana Anda merespons?",
        "options": [
            "Mengabaikan pelanggan tersebut karena sikapnya tidak sopan.",
            "Membela diri dengan nada tinggi agar pelanggan memahami kondisi Anda.",
            "Meminta maaf dan mencari solusi untuk masalahnya.",
            "Menjelaskan bahwa Anda tidak bersalah dalam situasi tersebut."
        ]
    },
    {
        "question": "Seorang pelanggan ingin membeli produk, tetapi Anda tahu stok produk tersebut habis. Apa yang akan Anda lakukan?",
        "options": [
            "Menyarankan alternatif produk lain yang serupa.",
            "Mengabaikan pelanggan tersebut.",
            "Memberitahu dengan sopan bahwa stok sedang kosong.",
            "Menyalahkan pemasok atas kekosongan stok."
        ]
    },
    {
        "question": "Anda melihat rekan kerja membuat kesalahan, tetapi dia tidak menyadarinya. Apa yang akan Anda lakukan?",
        "options": [
            "Melaporkan kesalahannya kepada atasan.",
            "Mencari cara untuk memperbaiki kesalahannya sendiri tanpa memberitahunya.",
            "Memberitahunya secara langsung agar dia dapat memperbaiki kesalahannya.",
            "Membiarkan karena bukan tanggung jawab Anda."
        ]
    },
    {
        "question": "Ketika Anda menghadiri rapat dan seseorang menyampaikan ide yang kurang realistis, apa yang akan Anda lakukan?",
        "options": [
            "Memberikan tanggapan yang konstruktif dan alternatif solusi.",
            "Menyetujui ide tersebut meskipun Anda tahu itu tidak realistis.",
            "Membiarkan ide tersebut tanpa komentar.",
            "Menolak ide tersebut dengan tegas tanpa memberikan alasan."
        ]
    },
    {
        "question": "Jika Anda melihat seorang rekan kerja mengambil barang milik kantor untuk keperluan pribadi, apa yang akan Anda lakukan?",
        "options": [
            "Mengabaikan karena tidak ingin menciptakan konflik.",
            "Menegurnya dengan sopan dan mengingatkan tentang aturan kantor.",
            "Melaporkan kejadian tersebut kepada atasan.",
            "Ikut menggunakan barang kantor untuk kepentingan pribadi."
        ]
    },
    {
        "question": "Anda diminta untuk menyampaikan presentasi yang belum Anda siapkan. Apa yang akan Anda lakukan?",
        "options": [
            "Berusaha menyampaikan presentasi sebaik mungkin meskipun tanpa persiapan.",
            "Mengalihkan tanggung jawab kepada rekan kerja.",
            "Menolak karena merasa tidak siap.",
            "Meminta waktu tambahan untuk mempersiapkan materi presentasi."
        ]
    },
    {
        "question": "Jika Anda diminta menggantikan rekan kerja yang sedang sakit untuk menghadiri pertemuan penting, apa yang akan Anda lakukan?",
        "options": [
            "Menolak karena itu bukan tugas Anda.",
            "Menerima tugas tersebut sebagai bentuk tanggung jawab.",
            "Meminta orang lain menggantikan tugas tersebut.",
            "Menerima tetapi hanya menghadiri tanpa berkontribusi aktif."
        ]
    },
    {
        "question": "Anda menemukan informasi penting yang dapat membantu meningkatkan kinerja tim. Apa yang akan Anda lakukan?",
        "options": [
            "Menggunakan informasi tersebut untuk kepentingan pribadi.",
            "Menunggu hingga tim menemukannya sendiri.",
            "Segera membagikan informasi tersebut kepada tim.",
            "Mengabaikan informasi tersebut karena Anda sibuk."
        ]
    },
    {
        "question": "Ketika Anda menerima kritik dari atasan yang kurang tepat, bagaimana Anda menanggapinya?",
        "options": [
            "Menerima kritik tersebut dengan lapang dada dan mencari penjelasan lebih lanjut.",
            "Langsung membantah kritik tersebut di depan atasan.",
            "Mengabaikan kritik tersebut karena Anda merasa tidak bersalah.",
            "Mengeluhkan kritik tersebut kepada rekan kerja Anda."
        ]
    },
    {
        "question": "Rekan kerja Anda meminta bantuan dalam tugas yang sebenarnya di luar kemampuan Anda. Apa yang akan Anda lakukan?",
        "options": [
            "Mencoba membantu sebisa mungkin dan belajar hal baru.",
            "Mengabaikan permintaannya.",
            "Menolak dengan alasan Anda tidak mampu melakukannya.",
            "Menyarankan dia mencari bantuan dari orang lain."
        ]
    },
    {
        "question": "Jika Anda mendengar pelanggan memberikan kritik terhadap perusahaan, bagaimana Anda menanggapinya?",
        "options": [
            "Mendengarkan dengan seksama dan menyampaikan kepada pihak terkait.",
            "Mengabaikan kritik pelanggan tersebut.",
            "Membela perusahaan tanpa mendengar kritiknya.",
            "Menunjukkan bahwa kritik pelanggan itu tidak relevan."
        ]
    },
    {
        "question": "Saat atasan memberikan instruksi yang tidak jelas, apa langkah Anda?",
        "options": [
            "Meminta penjelasan lebih rinci untuk memastikan pemahaman.",
            "Mengerjakan sesuai interpretasi Anda sendiri.",
            "Menunggu atasan memberikan penjelasan tambahan.",
            "Mengabaikan instruksi karena merasa bingung."
        ]
    },
    {
        "question": "Rekan kerja Anda mengalami kesulitan dalam proyek bersama, apa yang akan Anda lakukan?",
        "options": [
            "Menyarankan dia mencari solusi sendiri.",
            "Melaporkan kesulitan tersebut kepada atasan.",
            "Membantu rekan kerja Anda agar proyek tetap berjalan lancar.",
            "Menyarankan dia mencari solusi sendiri."
        ]
    },
    {
        "question": "Jika Anda mendapati bahwa ada dokumen penting yang hilang, apa yang akan Anda lakukan?",
        "options": [
            "Segera melaporkan kejadian tersebut kepada pihak terkait.",
            "Mengabaikan masalah tersebut dan berharap dokumen ditemukan.",
            "Menyalahkan rekan kerja atas hilangnya dokumen tersebut.",
            "Mencari dokumen tersebut sendiri tanpa melibatkan orang lain."
        ]
    },
    {
        "question": "Anda menghadiri pelatihan kerja, namun materi yang disampaikan sulit dipahami. Apa yang akan Anda lakukan?",
        "options": [
            "Bertanya kepada pengajar untuk penjelasan lebih rinci.",
            "Mengeluhkan pelatihan kepada rekan-rekan Anda.",
            "Mencatat poin-poin penting dan mencari informasi tambahan sendiri.",
            "Mengabaikan materi tersebut karena terlalu sulit."
        ]
    },
    {
        "question": "Jika Anda diberi tugas yang melibatkan teknologi baru yang belum Anda kuasai, apa yang akan Anda lakukan?",
        "options": [
            "Menyelesaikan tugas tanpa menggunakan teknologi tersebut.",
            "Meminta bantuan rekan kerja yang lebih berpengalaman.",
            "Mempelajari teknologi tersebut agar dapat menyelesaikan tugas.",
            "Menolak tugas tersebut karena merasa tidak mampu."
        ]
    },
    {
        "question": "Saat Anda menghadapi tekanan kerja yang berat, bagaimana cara Anda mengatasinya?",
        "options": [
            "Mengatur waktu dengan lebih baik untuk mengelola beban kerja.",
            "Mengeluh kepada atasan tentang beban kerja Anda.",
            "Mengabaikan tekanan tersebut dan bekerja seperti biasa.",
            "Meminta bantuan rekan kerja untuk menyelesaikan sebagian tugas."
        ]
    },
    {
        "question": "Anda ditugaskan bekerja dengan rekan yang kurang Anda sukai. Apa yang akan Anda lakukan?",
        "options": [
            "Bekerja secara profesional demi kepentingan tim.",
            "Mengeluhkan situasi tersebut kepada atasan.",
            "Mengabaikan tugas yang melibatkan rekan tersebut.",
            "Meminta untuk dipindahkan ke tim lain."
        ]
    },
    {
        "question": "Jika Anda diminta memberikan umpan balik kepada rekan kerja, bagaimana Anda menyampaikannya?",
        "options": [
            "Memberikan kritik langsung tanpa memperhatikan perasaannya.",
            "Menyampaikan pujian meskipun sebenarnya Anda tidak setuju.",
            "Memberikan umpan balik secara konstruktif dan sopan.",
            "Menghindari memberikan umpan balik karena takut menyinggung."
        ]
    },
    {
        "question": "Ketika menghadapi kendala dalam menyelesaikan tugas, apa yang akan Anda lakukan?",
        "options": [
            "Mencari solusi sendiri dengan berusaha lebih keras.",
            "Menunda penyelesaian tugas hingga kendala teratasi.",
            "Mengabaikan tugas tersebut karena sulit diselesaikan.",
            "Meminta bantuan rekan kerja atau atasan."
        ]
    },
    {
        "question": "Rekan kerja Anda mendapatkan pujian atas pekerjaan yang Anda kerjakan bersama. Apa reaksi Anda?",
        "options": [
            "Memberikan ucapan selamat kepada rekan Anda.",
            "Merasa kecewa tetapi tidak mengungkapkannya.",
            "Mengeluh kepada rekan kerja lain tentang hal tersebut.",
            "Meminta pengakuan kepada atasan atas kontribusi Anda."
        ]
    },
    {
        "question": "Anda diminta untuk mengambil keputusan penting dalam waktu singkat. Apa langkah Anda?",
        "options": [
            "Menghindari keputusan dan menyerahkannya kepada orang lain.",
            "Membuat keputusan tanpa memikirkan konsekuensinya.",
            "Meminta waktu tambahan untuk menganalisis situasi.",
            "Mengambil keputusan berdasarkan informasi yang tersedia."
        ]
    },
    {
        "question": "Ketika Anda bekerja dalam tim, ada anggota yang tidak aktif. Bagaimana Anda menanganinya?",
        "options": [
            "Mengabaikannya karena itu bukan tanggung jawab Anda.",
            "Melaporkannya kepada atasan.",
            "Mendorongnya untuk berkontribusi lebih aktif.",
            "Mengerjakan tugasnya untuk menyelamatkan kinerja tim."
        ]
    },
    {
        "question": "Jika Anda menghadapi pelanggan yang marah karena pelayanan tidak memuaskan, apa yang akan Anda lakukan?",
        "options": [
            "Menyalahkan pihak lain atas masalah tersebut.",
            "Mengabaikan pelanggan karena bukan tugas Anda.",
            "Mendengarkan keluhan pelanggan dengan sabar dan mencari solusi.",
            "Meminta pelanggan untuk menyampaikan keluhan secara tertulis."
        ]
    },
    {
        "question": "Saat Anda menghadiri pelatihan, rekan Anda terus berbicara sehingga mengganggu suasana. Apa yang akan Anda lakukan?",
        "options": [
            "Mengabaikan gangguan tersebut dan tetap fokus.",
            "Menegurnya dengan sopan agar tidak mengganggu.",
            "Melaporkannya kepada pengajar pelatihan.",
            "Ikut berbicara karena merasa tidak bisa konsentrasi."
        ]
    },
    {
        "question": "Jika Anda diminta untuk menyelesaikan pekerjaan tambahan dengan tenggat waktu singkat, apa yang akan Anda lakukan?",
        "options": [
            "Menyusun prioritas untuk menyelesaikan tugas dengan efisien.",
            "Mengerjakan tugas tanpa perencanaan sehingga hasilnya kurang maksimal.",
            "Menolak tugas tersebut karena beban kerja sudah banyak.",
            "Meminta perpanjangan tenggat waktu."
        ]
    },
    {
        "question": "Ketika Anda menyadari adanya kesalahan pada laporan yang telah diserahkan, apa langkah Anda?",
        "options": [
            "Menyalahkan rekan kerja atas kesalahan tersebut.",
            "Segera menginformasikan kesalahan tersebut kepada atasan.",
            "Membiarkan karena kesalahan itu kecil dan tidak akan diketahui.",
            "Membuat laporan baru tanpa memberitahu atasan."
        ]
    },
    {
        "question": "Jika seorang rekan kerja tidak setuju dengan ide Anda dalam rapat, bagaimana Anda menyikapinya?",
        "options": [
            "Berdebat untuk mempertahankan ide Anda.",
            "Mengabaikan ketidaksetujuan tersebut dan tetap melanjutkan ide Anda.",
            "Mendengarkan alasannya dan mencari solusi bersama.",
            "Meminta atasan untuk memutuskan ide siapa yang lebih baik."
        ]
    },

]

//1,2,3,4,5,6,8,9,11,12

const Nilai = [
    {"A": 1, "B": 3, "C": 2, "D": 4},
    {"A": 1, "B": 4, "C": 3, "D": 2},
    {"A": 1, "B": 2, "C": 3, "D": 4},
    {"A": 3, "B": 2, "C": 4, "D": 1},
    {"A": 1, "B": 4, "C": 3, "D": 2},
    {"A": 2, "B": 4, "C": 3, "D": 1},
    {"A": 2, "B": 3, "C": 4, "D": 1},
    {"A": 1, "B": 4, "C": 3, "D": 2},
    {"A": 1, "B": 3, "C": 4, "D": 4},
    {"A": 1, "B": 2, "C": 3, "D": 4},
    {"A": 1, "B": 4, "C": 3, "D": 2},
    {"A": 4, "B": 3, "C": 2, "D": 1},
    {"A": 3, "B": 2, "C": 4, "D": 3},
    {"A": 2, "B": 1, "C": 4, "D": 3},
    {"A": 1, "B": 2, "C": 3, "D": 4},
    {"A": 1, "B": 4, "C": 3, "D": 2},
    {"A": 2, "B": 3, "C": 4, "D": 1},
    {"A": 1, "B": 3, "C": 4, "D": 2},
    {"A": 3, "B": 3, "C": 3, "D": 4},
    {"A": 2, "B": 3, "C": 4, "D": 4},
    {"A": 2, "B": 4, "C": 3, "D": 3},
    {"A": 1, "B": 2, "C": 3, "D": 4,},
    {"A": 1, "B": 2, "C": 3, "D": 4,},
    {"A": 1, "B": 2, "C": 3, "D": 4,},
    {"A": 1, "B": 2, "C": 3, "D": 4,},
    {"A": 5, "B": 4, "C": 3, "D": 1,},
    {"A": 5, "B": 4, "C": 3, "D": 1,},
    {"A": 5, "B": 4, "C": 3, "D": 1,},
    {"A": 5, "B": 4, "C": 3, "D": 1,},
    {"A": 5, "B": 4, "C": 3, "D": 2,},
    {"A": 1, "B": 2, "C": 3, "D": 4,},
    {"A": 1, "B": 2, "C": 3, "D": 4,},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 1, "B": 2, "C": 3, "D": 4},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 4, "B": 5, "C": 3, "D": 1},
    {"A": 4, "B": 5, "C": 2, "D": 1},
    {"A": 5, "B": 4, "C": 3, "D": 2},
    {"A": 5, "B": 4, "C": 3, "D": 1},
    {"A": 4, "B": 5, "C": 3, "D": 2},
    {"A": 4, "B": 2, "C": 5, "D": 3},
    {"A": 4, "B": 2, "C": 5, "D": 1},
    {"A": 5, "B": 4, "C": 3, "D": 1},
    {"A": 4, "B": 5, "C": 3, "D": 1},
    {"A": 5, "B": 4, "C": 2, "D": 1},
    {"A": 5, "B": 2, "C": 4, "D": 3},
    {"A": 5, "B": 4, "C": 2, "D": 1},
    {"A": 3, "B": 5, "C": 4, "D": 1},
    {"A": 5, "B": 4, "C": 2, "D": 1},
    {"A": 5, "B": 4, "C": 2, "D": 3},
    {
        "A": 5,
        "B": 2,
        "C": 4,
        "D": 3
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 2,
        "C": 3,
        "D": 4
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 2,
        "C": 4,
        "D": 3
    },
    {
        "A": 3,
        "B": 5,
        "C": 2,
        "D": 4
    },
    {
        "A": 2,
        "B": 1,
        "C": 3,
        "D": 5
    },
    {
        "A": 4,
        "B": 5,
        "C": 2,
        "D": 1
    },
    {
        "A": 2,
        "B": 5,
        "C": 4,
        "D": 3
    },
    {
        "A": 5,
        "B": 2,
        "C": 4,
        "D": 3
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 1
    },
    {
        "A": 2,
        "B": 3,
        "C": 5,
        "D": 4
    },
    {
        "A": 5,
        "B": 2,
        "C": 4,
        "D": 1
    },
    {
        "A": 4,
        "B": 3,
        "C": 5,
        "D": 2
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 1
    },
    {
        "A": 2,
        "B": 5,
        "C": 4,
        "D": 1
    },
    {
        "A": 4,
        "B": 2,
        "C": 1,
        "D": 5
    },
    {
        "A": 2,
        "B": 5,
        "C": 3,
        "D": 4
    },
    {
        "A": 1,
        "B": 2,
        "C": 5,
        "D": 3
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 1
    },
    {
        "A": 5,
        "B": 2,
        "C": 3,
        "D": 4
    },
    {
        "A": 5,
        "B": 2,
        "C": 3,
        "D": 1
    },
    {
        "A": 5,
        "B": 4,
        "C": 3,
        "D": 1
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 4
    },
    {
        "A": 5,
        "B": 2,
        "C": 3,
        "D": 4
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 4
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 4,
        "C": 3,
        "D": 1
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 4
    },
    {
        "A": 4,
        "B": 3,
        "C": 5,
        "D": 2
    },
    {
        "A": 5,
        "B": 3,
        "C": 4,
        "D": 2
    },
    {
        "A": 5,
        "B": 2,
        "C": 4,
        "D": 3
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 4
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 3,
        "C": 4,
        "D": 2
    },
    {
        "A": 5,
        "B": 2,
        "C": 3,
        "D": 4
    },{
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 4,
        "C": 2,
        "D": 3
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 4
    },
    {
        "A": 4,
        "B": 3,
        "C": 5,
        "D": 2
    },
    {
        "A": 5,
        "B": 3,
        "C": 4,
        "D": 2
    },
    {
        "A": 5,
        "B": 2,
        "C": 4,
        "D": 3
    },
    {
        "A": 5,
        "B": 3,
        "C": 2,
        "D": 4
    },
		
]
export { questions, Nilai };

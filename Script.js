function showDetail(nomor) {
  const detailBox = document.getElementById("isiLayanan");

  const layanan = {
    1: {
      judul: "Layanan 1: Pencatatan Biodata WNI Dalam Wilayah NKRI",
      persyaratan: "1. Fotokopi KK\n2. Fotokopi Akta Kelahiran\n3. Formulir F-1.01",
      penjelasan: "Layanan ini digunakan untuk mencatat biodata penduduk WNI yang tinggal dalam wilayah NKRI..."
    },
    2: {
      judul: "Layanan 2: [Isi Judulnya]",
      persyaratan: "[Tulis Persyaratannya]",
      penjelasan: "[Tulis Penjelasan Tambahan jika ada]"
    },
    // Tambahkan layanan 3–15 di sini
  };

  const data = layanan[nomor];

  if (data) {
    detailBox.innerHTML = `
      <h3>${data.judul}</h3>
      <strong>Persyaratan:</strong><br>
      <pre>${data.persyaratan}</pre>
      <strong>Penjelasan:</strong><br>
      <p>${data.penjelasan}</p>
    `;
  } else {
    detailBox.innerHTML = "<p>Layanan ini belum diisi. Silakan update di script.js.</p>";
  }
}
const layanan = {
  1: {
    judul: "Layanan 1: Pencatatan Biodata Penduduk WNI Dalam Wilayah NKRI",
    persyaratan: `1. Pengisian Formulir F-1.01
2. Fotokopi KK (Kartu Keluarga)
3. Dokumen pendukung lain jika diperlukan`,
    penjelasan: `Layanan ini untuk pencatatan data individu WNI yang berada di dalam wilayah NKRI dan belum pernah tercatat dalam sistem administrasi kependudukan.`
  },
  2: {
    judul: "Layanan 2: Pencatatan Biodata Penduduk WNI Luar Wilayah NKRI",
    persyaratan: `1. Formulir F-1.01
2. Dokumen imigrasi (paspor, visa)
3. Surat keterangan dari perwakilan RI di luar negeri`,
    penjelasan: `Digunakan untuk pencatatan biodata WNI yang tinggal di luar negeri agar tetap tercatat dalam sistem kependudukan nasional.`
  },
  3: {
    judul: "Layanan 3: Pendaftaran Penduduk Datang dari Luar Negeri",
    persyaratan: `1. Formulir F-1.02
2. Surat pindah dari negara asal
3. Paspor dan visa masuk ke Indonesia`,
    penjelasan: `Layanan ini digunakan untuk WNI yang kembali dari luar negeri dan ingin mencatatkan kepindahan ke Indonesia.`
  },
  4: {
    judul: "Layanan 4: Perubahan Data Penduduk",
    persyaratan: `1. Formulir F-1.03
2. Dokumen pendukung perubahan data (akta, ijazah, dll)
3. KK dan KTP-el`,
    penjelasan: `Layanan ini untuk memperbarui data seperti nama, gelar, pendidikan, pekerjaan, status kawin, dll.`
  },
  5: {
    judul: "Layanan 5: Penerbitan KTP-el",
    persyaratan: `1. Usia 17 tahun atau sudah/pernah menikah
2. KK terbaru
3. Telah melakukan perekaman biometrik`,
    penjelasan: `Layanan ini untuk penerbitan KTP elektronik pertama kali bagi penduduk WNI.`
  },
  6: {
    judul: "Layanan 6: Penerbitan Kartu Identitas Anak (KIA)",
    persyaratan: `1. Usia 0-17 tahun belum kawin
2. Akta kelahiran
3. KK dan pas foto (untuk usia >5 tahun)`,
    penjelasan: `KIA diberikan kepada anak sebagai tanda pengenal dan bagian dari administrasi kependudukan.`
  },
  7: {
    judul: "Layanan 7: Pindah Datang Antar Kabupaten/Kota",
    persyaratan: `1. Surat pindah dari daerah asal (Formulir F-1.04)
2. KK lama
3. KTP-el`,
    penjelasan: `Layanan ini digunakan ketika penduduk pindah antar kabupaten/kota dan harus mengurus dokumen kepindahan.`
  },
  8: {
    judul: "Layanan 8: Pindah Datang Antar Provinsi",
    persyaratan: `1. Surat pindah (F-1.05)
2. KTP-el
3. KK`,
    penjelasan: `Mirip layanan 7, tetapi untuk perpindahan antar provinsi di Indonesia.`
  },
  9: {
    judul: "Layanan 9: Pindah Datang dari Luar Negeri",
    persyaratan: `1. Dokumen imigrasi (paspor, visa)
2. Surat keterangan pindah luar negeri
3. KK keluarga yang dituju`,
    penjelasan: `Layanan untuk WNI yang kembali dari luar negeri dan menetap di Indonesia.`
  },
  10: {
    judul: "Layanan 10: Pencatatan Kelahiran",
    persyaratan: `1. Surat kelahiran dari fasilitas kesehatan
2. KK dan KTP orang tua
3. Buku nikah/akta perkawinan`,
    penjelasan: `Digunakan untuk mencatat kelahiran anak agar mendapatkan akta kelahiran.`
  },
  11: {
    judul: "Layanan 11: Pencatatan Kematian",
    persyaratan: `1. Surat kematian dari rumah sakit/puskesmas
2. KTP dan KK almarhum
3. Surat pernyataan ahli waris`,
    penjelasan: `Untuk mencatat kematian penduduk dan diterbitkan akta kematian.`
  },
  12: {
    judul: "Layanan 12: Pencatatan Perkawinan",
    persyaratan: `1. Surat nikah dari KUA atau catatan sipil
2. KK dan KTP
3. Formulir permohonan`,
    penjelasan: `Digunakan untuk mencatat status perkawinan di data kependudukan.`
  },
  13: {
    judul: "Layanan 13: Pencatatan Perceraian",
    persyaratan: `1. Putusan pengadilan
2. Akta nikah/perkawinan
3. KK dan KTP`,
    penjelasan: `Untuk mengubah status kawin menjadi cerai dalam data kependudukan.`
  },
  14: {
    judul: "Layanan 14: Penerbitan KK Baru",
    persyaratan: `1. Formulir permohonan KK
2. Dokumen pendukung (akta, KTP, surat pindah, dll)
3. KTP kepala keluarga`,
    penjelasan: `Digunakan untuk penerbitan KK baru karena pindah, nikah, cerai, atau perubahan anggota keluarga.`
  },
  15: {
    judul: "Layanan 15: Penerbitan Akta Perubahan Nama",
    persyaratan: `1. Putusan pengadilan
2. Akta lahir lama
3. KTP dan KK`,
    penjelasan: `Untuk mengganti atau memperbaiki nama dalam dokumen kependudukan.`
  },
};

function showDetail(nomor) {
  const detailBox = document.getElementById("isiLayanan");
  const data = layanan[nomor];

  if (data) {
    detailBox.innerHTML = `
      <h3>${data.judul}</h3>
      <strong>Persyaratan:</strong><br>
      <pre>${data.persyaratan}</pre>
      <strong>Penjelasan:</strong><br>
      <p>${data.penjelasan}</p>
    `;
  } else {
    detailBox.innerHTML = "<p>Layanan ini belum diisi.</p>";
  }
}

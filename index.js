// Menanyakan nama
var nama = prompt("Siapa Nama mu ");
// Menanyakan mau atau tidak masuk universitas
var univ = prompt("Mau Masuk universitas ga? ");
if (univ === "mau" || "Mau") {
  // Menanyakan nilai akhir
  var nilai = prompt("Berapakah nilai akhir SMA/SMK mu");
  //   Jika nilai kurang dari 30
  if (nilai < 30) {
    alert("Tidak mungkin masuk univ");
  }
  //   Jika nilai kurang dari 50
  else if (nilai < 50) {
    // Melakukan perhitungan chanceGetUniv
    var chanceGetUniv = Math.floor(Math.random() * 100);
    // Jika chanceGetUniv kurang dari 50
    if (chanceGetUniv < 50) {
      alert(`hmm kemungkinan kamu ${nama} kecil masuk UNIV`);
    }
    // Jika chanceGetUniv lebih dari 50
    else {
      alert(`hmm kemungkinan kamu ${nama} bisa masuk UNIV`);
    }
  } else {
    // Menetapkan chanceGetUniv di sini untuk digunakan dalam kondisi berikutnya
    var chanceGetUniv = Math.floor(Math.random() * 100);
    // Jika nilai lebih dari 60 dan chanceGetUniv lebih dari 70
    if (nilai > 60 && chanceGetUniv > 70) {
      alert(`hei ${nama} pasti masuk UNIV dengan ${nilai} mu yang besar itu`);
    }
    // Jika nilai lebih dari 80 dan chanceGetUniv lebih dari 70
    else if (nilai > 80 || chanceGetUniv > 70) {
      alert(`hei ${nama} pasti masuk UNIV dengan ${nilai} mu yang besar itu`);
    }
    // Menambahkan kondisi sendiri jika chanceGetUniv kurang dari 70 tetap nilai di atas 50. Agar semua nilai bisa menampilkan pesan
    else if (chanceGetUniv < 70) {
      alert(
        `Nilai kamu ${nilai} tetapi chance kamu hanya ${chanceGetUniv} sorry`
      );
    }
  }
}
// Jika pada pertanyaan "Mau masuk universitas" dijawab selain mau atau Mau
else {
  alert("Ok deh goodluck!!");
}

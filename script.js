// ==========================================
// 1. LOGIKA UNTUK FORM LOGIN (index.html)
// ==========================================
function cekLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" && password === "") {
        alert("Peringatan: Username dan Password wajib diisi!");
    } else if (username === "") {
        alert("Peringatan: Username tidak boleh kosong!");
    } else if (password === "") {
        alert("Peringatan: Password tidak boleh kosong!");
    } else {
        alert("Login berhasil! Selamat datang, " + username);
    }
}

// ==========================================
// 2. LOGIKA UNTUK FORM REGISTER (register.html)
// ==========================================
function cekRegister() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let kelas = document.getElementById("kelas").value;

    // Pengecekan Peringatan
    if (username === "") {
        alert("Peringatan: User ID / Username tidak boleh kosong!");
    } else if (password === "") {
        alert("Peringatan: Password tidak boleh kosong!");
    } else if (password.length < 8) {
        alert("Peringatan: Password minimal 8 karakter!");
    } else if (confirmPassword === "") {
        alert("Peringatan: Konfirmasi password harus diisi!");
    } else if (password !== confirmPassword) {
        alert("Peringatan: Password dan Konfirmasi Password tidak cocok!");
    } else if (kelas === "") {
        alert("Peringatan: Silakan pilih Kelas!");
    } else {
        alert("Registrasi Berhasil! Data Anda sudah valid.");
    }
}

// ==========================================
// 3. TUGAS EVALUASI MODUL (BAGIAN V)
// ==========================================

// Task V.3: Function Baru
function tampilkanPesan() {
    alert("Selamat belajar JavaScript!");
}

// Task V.4: Logika Nilai (Cek di Console Browser / F12)
let nilai = 75;
if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Belum Lulus");
}
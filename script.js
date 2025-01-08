// Fungsi untuk menampilkan sapaan berdasarkan waktu
function greeting() {
    const today = new Date();
    const hour = today.getHours();
    let greetingMessage = "";

    if (hour < 12) {
        greetingMessage = "Selamat Pagi!";
    } else if (hour < 18) {
        greetingMessage = "Selamat Sore!";
    } else {
        greetingMessage = "Selamat Malam!";
    }

    document.getElementById("greeting").innerHTML = `<h3>${greetingMessage}</h3>`;
}

greeting();

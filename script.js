// 1. Fungsi Cek Password
function checkPassword() {
    const pass = document.getElementById('passInput').value;
    const correctPass = "rifan dzikri fathulhuda"; // Ganti dengan tanggal jadian/ultah

    if (pass === correctPass) {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        playMusic();
    } else {
        alert("Ops! Kodenya salah, coba ingat-ingat lagi ❤️");
    }
}

// 2. Kontrol Musik
const music = document.getElementById('bgMusic');
function playMusic() {
    music.play().catch(() => {
        console.log("Autoplay dicegah browser, klik tombol musik manual.");
    });
}

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// 3. Efek Konfeti Sederhana (Manual)
function makeConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = "❤️";
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.transition = 'transform 3s linear, opacity 3s';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '0';
        }, 100);

        setTimeout(() => confetti.remove(), 3000);
    }
    alert("I Love You Too! 💖");
}
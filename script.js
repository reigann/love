document.addEventListener('DOMContentLoaded', () => {
    const heartIcon = document.querySelector('.heart-icon');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Event klik icon hati
    heartIcon.addEventListener('click', async () => {
        await Swal.fire({
            title: "Aku sayang kamu ❤️",
            imageUrl: "images/foto.jpeg",
            imageWidth: 200,
            imageHeight: 200,
            showConfirmButton: false,
            timer: 3000
        });
        await Swal.fire({
            title: "Cinta kamu ❤️",
            imageUrl: "images/foto2.jpeg",
            imageWidth: 200,
            imageHeight: 200,
            showConfirmButton: false,
            timer: 2000
        });
        await Swal.fire({
            title: "Kangen kamu banget 😘",
            imageUrl: "images/foto3.jpeg",
            imageWidth: 200,
            imageHeight: 200,
            showConfirmButton: false,
            timer: 2000
        });

        backgroundMusic.play(); // Memutar musik setelah animasi popup selesai

        // Tampilkan pesan terakhir dengan animasi getar
        Swal.fire({
            title: "Aku bakal selalu sayang kamu ❤️",
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                popup: 'shake-animation'
            }
        });

        // Munculkan efek hujan cinta
        createLoveRain();
    });
});

// Fungsi untuk menambahkan elemen jatuh (hujan cinta)
function createLoveRain() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerText = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(heart);

        // Hapus hati setelah animasinya selesai
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

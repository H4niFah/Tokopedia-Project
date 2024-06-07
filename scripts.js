function promo() {
    var kode = prompt("Masukan kode Promo:");

    // Check if username and password are correct
    if (kode === "123") {
        alert("Selamat anda mendapatkan diskon 20%");
        // Redirect to another page or perform other actions here
    } else {
        alert("Kode yang anda masukan tidak tersedia");
    }
}
// cek usia
function checkAge() {
    // Tampilkan dialog konfirmasi
    var isOver17 = confirm("Apakah Anda berusia 17 tahun atau lebih?");

    // Jika pengguna mengonfirmasi bahwa umurnya di atas 17 tahun, lanjutkan
    if (isOver17) {
        window.location.href = "login.html";
        alert("Selamat datang di situs web kami!");
        // Tambahkan kode untuk melanjutkan ke situs web di sini
    } else {
        // Jika pengguna tidak mengonfirmasi, arahkan mereka ke halaman lain
        alert("Maaf anda masih di bawah umur untuk melakukan transaksi")        
    }
}

// Kategori
const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
    const categoryCarousel = document.querySelector('.category-carousel');

    leftButton.addEventListener('click', () => {
        categoryCarousel.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        categoryCarousel.scrollBy({ left: 200, behavior: 'smooth' });
    });

// Fungsi untuk menampilkan popup
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Fungsi untuk menutup popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
// Tampilkan popup setelah 2 detik
setTimeout(showPopup, 2000);

// fungsi ketika menekan tombol beli sekarang di index
function tdaftar(){
    alert("Maaf anda tidak bisa melanjutkan, mohon untuk login terlebih dahulu")
}

// untuk halaman login
function promptLogin() {
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");

    // Check if username and password are correct
    if (username === "user" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html";
        // Redirect to another page or perform other actions here
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

// Halaman detail produk
document.addEventListener('DOMContentLoaded', function() {
    const stockElement = document.getElementById('stock');
    const buyNowBtn = document.getElementById('buyNowBtn');
    const addToCartBtn = document.getElementById('addToCartBtn');

    // Example stock value
    let stock = 12;

    // Update stock text
    function updateStockText() {
        stockElement.textContent = stock > 0 ? `Tersedia (${stock} stok)` : 'Habis';
    }

    // Event listener for "Beli Sekarang" button
    buyNowBtn.addEventListener('click', function() {
        if (stock > 0) {
            stock--;
            updateStockText();
            alert('Produk berhasil dibeli!');
        } else {
            alert('Stok habis!');
        }
    });

    // Event listener for "Tambah ke Keranjang" button
    addToCartBtn.addEventListener('click', function() {
        if (stock > 0) {
            alert('Produk ditambahkan ke keranjang!');
        } else {
            alert('Stok habis!');
        }
    });

    // Initial stock text update
    updateStockText();
});


// Untuk halaman Hubungi Kami
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if(name && email && subject && message) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function() {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
        
        // Reset form
        document.getElementById('contactForm').reset();
    }
});


// alert
// confirm
// prompt

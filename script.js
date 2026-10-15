const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });
}

let cartCount = 0;
let wishlistCount = 0;

const cartBadge = document.querySelector('.cart-badge');
const wishlistBadge = document.querySelector('.wishlist-badge');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        if (cartBadge) {
            cartBadge.textContent = cartCount;
        }
        showNotification('Mahsulot savatga qo\'shildi!');
    });
});

const wishBtns = document.querySelectorAll('.wishlist-btn');

wishBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
            wishlistCount++;
            showNotification('Mahsulot saralanganlarga qo\'shildi!');
        } else {
            wishlistCount = Math.max(0, wishlistCount - 1);
            showNotification('Mahsulot saralanganlardan olib tashlandi!');
        }
        if (wishlistBadge) {
            wishlistBadge.textContent = wishlistCount;
        }
    });
});

const subscribeBtn = document.getElementById('subscribeBtn');

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        showNotification('Aksiyalarga muvaffaqiyatli a\'zo bo\'ldingiz!');
    });
}

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
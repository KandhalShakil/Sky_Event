// Initialize Swiper
const homeSlider = new Swiper('.home-slider', {
  effect: "cube",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var cube = new Swiper(".gallery-slider", {
  effect: "cube",
  grabCursor: true,
  slidesPerView: "auto",
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 50,
    shadowScale: 1,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

// Modal functions
function showModal(modalId) {
  closeAllModals();
  const modal = document.getElementById(modalId);
  modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
}

// Toggle password visibility
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const toggleIcon = input.nextElementSibling.querySelector('i');

  if (input.type === "password") {
    input.type = "text";
    toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = "password";
    toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

// Toggle navbar on mobile
function toggleNavbar() {
  document.querySelector('.navbar').classList.toggle('active');
}

// Event booking functions
function Event_open(packageName) {
  document.getElementById('packageName').textContent = `You have selected the ${packageName} Package`;
  showModal('bookingModal');
}

// Popup functions
function pop(text) {
  document.querySelector('.massage').textContent = text;
  document.getElementsByClassName("popup")[0].style.display = "block";
}

function closePop() {
  document.getElementsByClassName('popup')[0].style.display = "none";
}

// Form validation functions
function check() {
  let name = document.getElementsByClassName('input')[0].value;
  let email = document.getElementsByClassName('input')[1].value;
  let number = document.getElementsByClassName('input')[2].value;
  let subject = document.getElementsByClassName('input')[3].value;
  let Query = document.getElementsByTagName('textarea')[0].value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || number === "" || subject === "" || query === "") {
    pop("All fields are required");
  } else if (!pattern.test(email)) {
    pop("Please enter a valid email address");
  } else if (number.length !== 10) {
    pop("Please enter a valid 10-digit phone number");
  } else {
    pop('Thank you for reaching out! We will get back to you as soon as possible.');
    // Clear form
    document.querySelector('.contact form').reset();
  }
}

function Event_check() {
  const name = document.getElementById('booking-name').value;
  const email = document.getElementById('booking-email').value;
  const phone = document.getElementById('booking-phone').value;
  const date = document.getElementById('booking-date').value;
  const guests = document.getElementById('booking-guests').value;
  const payment = document.getElementById('booking-payment').value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const today = new Date();
  const eventDate = new Date(date);

  if (!name || !email || !phone || !date || !guests || !payment) {
    pop("Please fill all fields");
  } else if (!pattern.test(email)) {
    pop("Please enter a valid email address");
  } else if (phone.length !== 10) {
    pop("Please enter a valid 10-digit phone number");
  } else if (eventDate < today) {
    pop("Please choose a future date");
  } else {
    pop("Thanks for choosing our site! Your booking has been confirmed.");
    closeModal('bookingModal');
    // Clear form
    document.getElementById('booking-name').value = "";
    document.getElementById('booking-email').value = "";
    document.getElementById('booking-phone').value = "";
    document.getElementById('booking-date').value = "";
    document.getElementById('booking-guests').value = "";
    document.getElementById('booking-payment').selectedIndex = 0;
  }
}

// Login/register functions
function login_check() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (!username || !password) {
    pop('Please fill all fields');
  } else {
    pop('Login successful! Welcome back.');
    closeModal('loginModal');
    // Update UI
    document.querySelector('.login-btn').textContent = `Hi, ${username}`;
    document.querySelector('.login-btn').style.backgroundColor = 'transparent';
    document.querySelector('.login-btn').style.border = '2px solid var(--accent)';
    document.querySelector('.login-btn').disabled = true;
  }
}

function register_check() {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm').value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !password || !confirmPassword) {
    pop('Please fill all fields');
  } else if (password !== confirmPassword) {
    pop('Passwords do not match');
  } else if (!pattern.test(email)) {
    pop('Please enter a valid email address');
  } else {
    pop('Registration successful! Welcome to Sky Event.');
    closeModal('registerModal');
    // Update UI
    document.querySelector('.login-btn').textContent = `Hi, ${name}`;
    document.querySelector('.login-btn').style.backgroundColor = 'transparent';
    document.querySelector('.login-btn').style.border = '2px solid var(--accent)';
  }
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeAllModals();
  }
});

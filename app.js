let pass = false;

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#menu-bars').onclick = () => {
    document.querySelector('.navbar').classList.toggle('active');
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "cube",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 50,
    shadowScale: 1,
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

// Theme toggle function
function toggle(i) {
  if (i.className == 'fas fa-sun') {
    i.className = 'fas fa-moon';
    document.querySelector(":root").style.setProperty("--theme-color", "lightgray");
    document.querySelector(":root").style.setProperty("--text-color", "black");
    document.querySelector(":root").style.setProperty("--image", "url('https://img.freepik.com/free-photo/top-view-frame-with-white-paper-flowers-background_23-2148427802.jpg')");
  } else if (i.className == 'fas fa-moon') {
    i.className = 'fas fa-sun';
    document.querySelector(":root").style.setProperty("--text-color", "white");
    document.querySelector(":root").style.setProperty("--theme-color", "black");
    document.querySelector(":root").style.setProperty("--image", "url('https://www.baltana.com/files/wallpapers-16/Black-Background-Design-High-Definition-Wallpaper-40665.jpg')");
  }
}

// Event booking functions
function Event_open(text) {
  document.getElementsByClassName("pack_info")[0].innerHTML = "You have Chose " + text + " Package";
  document.getElementsByClassName("Event_booking")[0].style.display = 'block';
  document.getElementsByClassName('main')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('header')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "none";
  document.getElementsByClassName('header')[0].style.pointerEvents = "none";
}

function close_booking() {
  document.getElementsByClassName('Event_booking')[0].style.display = "none";
  document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
}

// Popup functions
function pop(text) {
  document.getElementsByClassName("massage")[0].innerHTML = text;
  document.getElementsByClassName("popup")[0].style.display = "block";
}

function closePop() {
  document.getElementsByClassName('popup')[0].style.display = "none";
  if (pass) {
    document.getElementsByClassName('Event_booking')[0].style.display = "none";
    document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
    document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
  }
}

// Form validation functions
function check() {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let name = document.getElementsByClassName('input')[0].value;
  let email = document.getElementsByClassName('input')[1].value;
  let number = document.getElementsByClassName('input')[2].value;
  let subject = document.getElementsByClassName('input')[3].value;
  let Query = document.getElementsByTagName('textarea')[0].value;

  if (name == "" || email == "" || number == "" || subject == "" || Query == "") {
    pop("All fields are required");
  } else {
    if (!pattern.test(email)) {
      pop("Please enter valid email")
    } else if (number.length != 10) {
      pop("Please enter a valid number")
    } else {
      pop('Thank you for reaching out! We will get back to you as soon as possible.')
      document.getElementsByClassName('input')[0].value = "";
      document.getElementsByClassName('input')[1].value = "";
      document.getElementsByClassName('input')[2].value = "";
      document.getElementsByClassName('input')[3].value = "";
      document.getElementsByTagName('textarea')[0].value = "";
    }
  }
}

function Event_check() {
  let name = document.getElementsByClassName("Event_input")[0].value;
  let email = document.getElementsByClassName("Event_input")[1].value;
  let phone = document.getElementsByClassName("Event_input")[2].value;
  let type = document.getElementsByClassName("Event_input")[3].value;
  let date = document.getElementsByClassName("Event_input")[4].value;
  let guest = document.getElementsByClassName("Event_input")[5].value;
  let payment = document.getElementsByClassName("Event_input")[6].value;

  let popup = document.getElementsByClassName('popup')[0]
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  today_date = new Date();

  if (name != "" && guest != "" && payment != "" && email != "" && phone != "" && type != "" && date != "") {
    event_date = new Date(date);
    if (phone.length != 10) {
      pop("Please Enter Valid Number")
    } else if (!pattern.test(email)) {
      pop("Please Enter Email")
    } else if (today_date.getTime() >= event_date.getTime()) {
      pop("Please Choose valid Date")
    }
    else {
      document.getElementsByClassName("alert")[0].innerHTML = ""
      pop("Thanks for choosing our site")
      pass = true;
      document.getElementsByClassName("Event_input")[0].value = "";
      document.getElementsByClassName("Event_input")[1].value = "";
      document.getElementsByClassName("Event_input")[2].value = "";
      document.getElementsByClassName("Event_input")[3].value = "";
      document.getElementsByClassName("Event_input")[4].value = "";
      document.getElementsByClassName("Event_input")[5].value = "";
      document.getElementsByClassName("Event_input")[6].value = "";
    }
  } else {
    pop("Plese Fill Blank Filed")
  }
}

// Login/register functions
function login_register() {
  document.getElementsByClassName('login-box')[0].style.display = "block";
  document.getElementsByClassName('main')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('header')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "none";
  document.getElementsByClassName('header')[0].style.pointerEvents = "none";
}

function close_login() {
  document.getElementsByClassName('login-box')[0].style.display = "none";
  document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
}

function close_register() {
  document.getElementsByClassName('register-box')[0].style.display = "none";
  document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
}

function show() {
  var x = document.getElementsByClassName('login_input')[1];
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function register_pass_show() {
  let x = document.getElementsByClassName('login_input')[4]
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function register_con_show() {
  let x = document.getElementsByClassName('login_input')[5]
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function login_check() {
  let x = document.getElementsByClassName('login_input')[0].value;
  let y = document.getElementsByClassName('login_input')[1].value;
  if (x == "" || y == "") {
    pop('Please Fill All Fields');
    document.getElementsByClassName('check')[0].checked = false;
    document.getElementsByClassName('login_input')[1].type = 'password';
  } else {
    document.getElementsByClassName('login-box')[0].style.display = "none";
    document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
    document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
    document.getElementsByClassName('login')[0].style.backgroundColor = 'none'
    document.getElementsByClassName('login')[0].style.pointer = 'default'
    document.getElementsByClassName('login')[0].innerHTML = "HELLO , " + x;
    document.getElementsByClassName('login')[0].onclick = 'none';
  }
}

function register_check() {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let name = document.getElementsByClassName('login_input')[2].value;
  let mail = document.getElementsByClassName('login_input')[3].value;
  document.getElementsByClassName('login_input')[4].type = 'text';
  let password = document.getElementsByClassName('login_input')[4].value
  document.getElementsByClassName('login_input')[4].type = 'password';
  document.getElementsByClassName('login_input')[5].type = 'text';
  let con_password = document.getElementsByClassName('login_input')[5].value;
  document.getElementsByClassName('login_input')[5].type = 'password';

  document.getElementsByClassName('check')[1].checked = false;
  document.getElementsByClassName('check')[2].checked = false;
  document.getElementsByClassName('login_input')[4].type = 'password';
  document.getElementsByClassName('login_input')[5].type = 'password';

  if (name == "" || mail == "" || con_password == "" || password == "") {
    pop('Plese Fill All Fields');
  } else if (con_password != password) {
    pop('Plese enter same password')
  } else if (!pattern.test(mail)) {
    pop("Please enter valid email")
  } else {
    document.getElementsByClassName('register-box')[0].style.display = "none";
    document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
    document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
    document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('login')[0].style.backgroundColor = 'none'
    document.getElementsByClassName('login')[0].style.pointer = 'defualt'
    document.getElementsByClassName('login')[0].innerHTML = "HELLO , " + name;
    document.getElementsByClassName('login')[0].onclick = 'none';
  }
}

function change() {
  if (document.getElementsByClassName("login-box")[0].style.display == "none") {
    document.getElementsByClassName("login-box")[0].style.display = "block";
    document.getElementsByClassName("register-box")[0].style.display = "none";
  } else {
    document.getElementsByClassName("register-box")[0].style.display = "block";
    document.getElementsByClassName("login-box")[0].style.display = "none"
  }
}

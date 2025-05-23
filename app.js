pass = false
function toggle(i) {
  if (i.className == 'fas fa-sun') {
    i.className = 'fas fa-moon';
    document.querySelector(":root").style.setProperty("--theme-color", "lightgray");
    document.querySelector(":root").style.setProperty("--text-color", "black");
  }
  else if (i.className == 'fas fa-moon') {
    i.className = 'fas fa-sun';
    document.querySelector(":root").style.setProperty("--text-color", "gray");
    document.querySelector(":root").style.setProperty("--theme-color", "black");
  }
}

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
function Event_open(text) {
  document.getElementsByClassName("pack_info")[0].innerHTML ="You have Chose "+ text + " Package";
  document.getElementsByClassName("Event_booking")[0].style.display = 'block';
  document.getElementsByClassName('main')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('header')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "none";
  document.getElementsByClassName('header')[0].style.pointerEvents = "none";
}

function check() {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let name = document.getElementsByClassName('input')[0].value;
  let email = document.getElementsByClassName('input')[1].value;
  let number = document.getElementsByClassName('input')[2].value;
  let subject = document.getElementsByClassName('input')[3].value;
  let Quary = document.getElementsByTagName('textarea')[0].value;

  if (name == "" || email == "" || number == "" || subject == "" || Quary == "") {
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

function login_register() {
  document.getElementsByClassName('login-box')[0].style.display = "block";
  document.getElementsByClassName('main')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('header')[0].style.filter = "blur(10px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "none";
  document.getElementsByClassName('header')[0].style.pointerEvents = "none";
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
    pop('Plese Fill All Fileds');
    document.getElementsByClassName('check')[0].checked = false;
    document.getElementsByClassName('login_input')[1].type = 'password';
  } else {
    document.getElementsByClassName('login-box')[0].style.display = "none";
    document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
    document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
    document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
    document.getElementsByClassName('login')[0].style.backgroundColor = 'none'
    document.getElementsByClassName('login')[0].style.pointer = 'defualt'
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
    for (var i = 0; i < document.getElementsByClassName("textbox").length; i++) {
      document.getElementsByClassName("textbox")[i].style.margin = '0px 30px 30px 30px';
    }
  } else {
    document.getElementsByClassName("register-box")[0].style.display = "block";
    document.getElementsByClassName("login-box")[0].style.display = "none"
    for (var i = 0; i < document.getElementsByClassName("textbox").length; i++) {
      document.getElementsByClassName("textbox")[i].style.margin = '0px 20px 20px 30px';
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
      pop("Plese Enter Valid Number")
    } else if (!pattern.test(email)) {
      pop("Plese Enter Email")
    } else if (today_date.getTime() >= event_date.getTime()) {
      pop("Plese Choise valid Date")
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

function close_booking() {
  document.getElementsByClassName('Event_booking')[0].style.display = "none";
  document.getElementsByClassName('main')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('main')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.pointerEvents = "auto";
  document.getElementsByClassName('header')[0].style.filter = "blur(0px)";
}
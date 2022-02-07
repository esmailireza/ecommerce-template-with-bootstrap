let countDownDate = new Date("Feb 2, 2022 15:37:25").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  /* 
  document.getElementById("demo").innerHTML =
    '<span id="day">' +
    days +
    "</span>" +
    '<span id="hours">' +
    hours +
    "</span>" +
    '<span id="minutes">' +
    minutes +
    "</span>" +
    '<span id="seconds">' +
    seconds +
    "</span>"; */

  let z = document.getElementsByClassName("demos");
  for (let i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="day">' +
      days +
      "</span>" +
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }

  if (distance < 0) {
    clearInterval(x);
    /*     document.getElementById("demo").innerHTML = "";

 */
    let y = document.getElementsByClassName("demos");
    for (let i = 0; i < y.length; i++) {
      y[i].innerHTML = "";
    }
    /* document
      .getElementById("after-expire")
      .setAttribute("id", "offer-expire-text"); */

    let g = document.getElementsByClassName("after-expire");
    for (let i = 0; i < g.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    /*  document.getElementById("offer-expire-text-inner").innerHTML =
      "پیشنهاد ویژه این محصول به اتمام رسیده"; */
    let d = document.getElementsByClassName("offer-expire-text-inner");
    for (let i = 0; i < d.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه این محصول به اتمام رسیده";
    }
    /*     document.getElementById("offer-blur").style.filter = "blur(2px)";*/
    let n = document.getElementsByClassName("offer-blur");
    for (let i = 0; i < n.length; i++) {
      n[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

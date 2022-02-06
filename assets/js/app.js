let countDownDate = new Date("Feb 15, 2022 15:37:25").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
    "</span>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "fiwief";
    document
      .getElementById("after-expire")
      .setAttribute("id", "offer-expire-text");
    document.getElementById("offer-expire-text-inner").innerHTML =
      "پیشنهاد ویژه این محصول به اتمام رسیده";
    document.getElementById("offer-blur").style.filter = "blur(2px)";
  }
}, 1000);

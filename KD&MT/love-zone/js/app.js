const yourDate = new Date("2024-06-06T00:00:00"), yourDate2 = new Date("2024-05-06T00:00:00"), yourDate3 = new Date("2024-04-11T00:00:00"),
      music = ['ido', 'Lemon-Kenshi-Yonezu'];

document.addEventListener('DOMContentLoaded', function () {
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()}-${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1) : "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

      document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " DAYS";
      document.querySelector("count1").textContent = Math.floor(Math.floor((new Date() - yourDate2) / 1000) / 60 / 60 / 24) + " Ngày";
      document.querySelector("count2").textContent = Math.floor(Math.floor((new Date() - yourDate3) / 1000) / 60 / 60 / 24) + " Ngày";
      // document.querySelector("count").textContent = Math.floor(365 - (Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + 1) + " DAYS";

      function olock() {
            var today = new Date(),
                  hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
                  min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
                  sec = Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
      } olock();
      var timer = setInterval(function () { olock() }, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random() * music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);
document.addEventListener("keypress", myFunction);
let flag = true;
let morning = false;
let on = false;
const cars = [
  "./assets/Img_05.png",
  "./assets/Img_06.png",
  "./assets/baby-car.png",
];

function myFunction(event) {
  console.log(event.which);
  if (event.which === 13) {
    document.getElementsByClassName("surface")[0].classList.toggle("moveRight");
    document.getElementsByClassName("car")[0].classList.toggle("suspension");
    if (!on) {
      document.getElementById("audio").currentTime = 0;
      document.getElementById("audio").play();
      on = true;
    } else {
      document.getElementById("audio").pause();
      on = false;
    }
  }
  if (event.which === 119 && !morning) {
    if (flag) {
      flag = false;
      document.getElementById("car").src = cars[0];
    } else {
      flag = true;
      document.getElementById("car").src = cars[1];
    }
  }
  if (event.which === 109) {
    morning = true;
    document.getElementById("car").src = cars[2];
    document.getElementsByTagName("BODY")[0].style.background =
      "linear-gradient(to left, #f7971e, #ffd200)";
    document.getElementsByClassName("night")[0].style.background =
      "url('./assets/morning.jpeg')";
    document.getElementsByClassName("night")[0].style.backgroundSize = "100%";
    document.getElementsByClassName("car")[0].style.bottom = "2%";
  }
  if (event.which === 110) {
    morning = false;
    flag = false;
    document.getElementById("car").src = cars[0];
    document.getElementsByTagName("BODY")[0].style.background =
      "linear-gradient(to right,#4286f4,#373b44)";
    document.getElementsByClassName("night")[0].style.background =
      "url('./assets/Img_1.png')";
    document.getElementsByClassName("night")[0].style.backgroundSize = "cover";
    document.getElementsByClassName("car")[0].style.bottom = "8%";
  }
}

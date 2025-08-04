let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let stboat6ars = document.getElementById("stboat6ars");
let mohamed = document.querySelector(".mohamed");
window.onscroll = function () {
  let value = scrollY;
  //النجوم هتتحرك ناحيه الشمال
  stars.style.left = value + "px";
  //   القمر هيتحرك  فوق باقي الصور نفس الفكره علامه الضرب عشان ينزل بسرعه
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river5.style.top = value + "px";
  stboat6ars.style.top = value + "px";
  stboat6ars.style.left = value * 1.5 + "px";

// الرقم ده خاص بالسكرول بمجرد ما يختفي القمر يظهر الون السماوي مش ثابت يعني حسب نسبه الاسكرول
  if (scrollY >= 200) {
    document.querySelector(".main").style.background="linear-gradient(#376281,#10001f)";
  }
  else{
    document.querySelector(".main").style.background="linear-gradient(#200016,#10001f)";
  }
};

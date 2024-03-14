document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded...");

  var signe = localStorage.getItem("signe");
  var horoscope = localStorage.getItem("horoscope");
  console.log("signe : " + signe);
  console.log("horoscope : " + horoscope);

  var signeElement = document.getElementsByClassName("signe");
  Array.from(signeElement).forEach((element) => {
    element.innerHTML = signe;
  });

  document.getElementById("image_signe").src = "images/" + signe + ".png";
  document.getElementById("horoscope").innerHTML = horoscope;
});

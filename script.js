année = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function signe_astro() {
  event.preventDefault();
  var jour = parseInt(document.getElementById("valeurJour").value);
  var mois = parseInt(document.getElementById("valeurMois").value);
  if (
    isNaN(jour) ||
    isNaN(mois) ||
    jour > année[mois] ||
    jour < 1 ||
    mois < 1 ||
    mois > 12
  ) {
    alert("Veuillez saisir des nombres valides.");
    return;
  }
  let sum = 0;
  let signe = "";
  for (let i = 0; i < mois; i++) {
    sum = sum + année[i];
  }
  sum += jour;
  let horoscope = "";
  switch (true) {
    case sum >= 21 && sum < 50:
      signe = "Verseau";
      horoscope =
        "Votre créativité et votre originalité seront mises en valeur cette semaine. N'hésitez pas à exprimer vos idées uniques et à explorer de nouvelles avenues créatives.";
      console.log("signe : ", signe);
      break;
    case sum >= 50 && sum < 81:
      signe = "Poisson";
      horoscope =
        "Prenez le temps de vous connecter avec votre intuition et votre sensibilité cette semaine. Écoutez votre cœur et laissez-vous guider par vos émotions dans vos décisions.";
      console.log("signe : ", signe);
      break;
    case sum >= 81 && sum < 112:
      signe = "Bélier";
      horoscope =
        "Cette semaine, votre énergie débordante vous poussera à explorer de nouvelles opportunités. Restez concentré sur vos objectifs et ne laissez pas les distractions vous détourner de votre chemin vers le succès.";
      console.log("signe : ", signe);
      break;
    case sum >= 112 && sum < 142:
      signe = "Taureau";
      horoscope =
        "Vous pouvez vous attendre à une période de stabilité et de croissance dans votre vie professionnelle. Prenez le temps de vous détendre et de profiter des petites joies de la vie.";
      console.log("signe : ", signe);
      break;
    case sum >= 142 && sum < 174:
      signe = "Gémeaux";
      horoscope =
        "Votre curiosité naturelle vous poussera à rechercher de nouvelles expériences et à élargir vos horizons. Restez ouvert aux nouvelles idées et aux opportunités qui se présentent à vous.";
      console.log("signe : ", signe);
      break;
    case sum >= 174 && sum < 205:
      signe = "Cancer";
      horoscope =
        "Cette semaine, concentrez-vous sur la famille et les relations proches. Prenez le temps de vous connecter avec vos proches et de renforcer les liens qui vous unissent.";
      console.log("signe : ", signe);
      break;
    case sum >= 205 && sum < 236:
      signe = "Lion";
      horoscope =
        "Vous vous sentirez particulièrement confiant et charismatique cette semaine. Profitez de cette énergie pour faire avancer vos projets et inspirer ceux qui vous entourent.";
      console.log("signe : ", signe);
      break;
    case sum >= 236 && sum < 267:
      signe = "Vierge";
      horoscope =
        "Une période de réflexion profonde vous attend cette semaine. Prenez le temps de vous connecter avec vous-même et d'évaluer vos objectifs à long terme.";
      console.log("signe : ", signe);
      break;
    case sum >= 267 && sum < 297:
      signe = "Balance";
      horoscope =
        "Cette semaine, votre sens inné de l'équilibre vous aidera à résoudre les conflits et à trouver des solutions pacifiques. Restez diplomate et ouvert d'esprit dans vos interactions avec les autres.";
      console.log("signe : ", signe);
      break;
    case sum >= 297 && sum < 328:
      signe = "Scorpion";
      horoscope =
        "Vous vous sentirez particulièrement passionné et déterminé cette semaine. Utilisez cette énergie pour poursuivre vos objectifs avec détermination et persévérance.";
      console.log("signe : ", signe);
      break;
    case sum >= 328 && sum < 357:
      signe = "Sagittaire";
      horoscope =
        "Vous pouvez vous attendre à une période d'aventure et d'exploration cette semaine. Laissez-vous guider par votre esprit libre et ouvert à de nouvelles expériences.";
      console.log("signe : ", signe);
      break;
    case 357 <= sum || sum < 21:
      signe = "Capricorne";
      horoscope =
        "Cette semaine, concentrez-vous sur la réalisation de vos objectifs à long terme. Restez concentré sur vos priorités et prenez des mesures concrètes pour atteindre vos aspirations.";
      console.log("signe : ", signe);
      break;
  }
  console.log("page 2 reached");
  window.location.href = "page2.html";
}

function bulle() {
  var source = document.getElementById("imagesigne").src;
  let infobulle;

  switch (true) {
    case source.includes("Verseau"):
      infobulle = "21 janvier – 18 février";
      break;
    case source.includes("Poisson"):
      infobulle = "19 février – 20 mars";
      break;
    case source.includes("Bélier"):
      infobulle = "21 mars – 20 avril";
      break;
    case source.includes("Taureau"):
      infobulle = "21 avril – 20 mai";
      break;
    case source.includes("Gémeaux"):
      infobulle = "21 mai – 21 juin";
      break;
    case source.includes("Cancer"):
      infobulle = "22 juin – 22 juillet";
      break;
    case source.includes("Lion"):
      infobulle = "23 juillet – 22 août";
      break;
    case source.includes("Vierge"):
      infobulle = "23 août – 22 septembre";
      break;
    case source.includes("Balance"):
      infobulle = "23 septembre – 22 octobre";
      break;
    case source.includes("Scorpion"):
      infobulle = "23 octobre – 22 novembre";
      break;
    case source.includes("Sagittaire"):
      infobulle = "23 novembre – 21 décembre";
      break;
    case source.includes("Capricorne"):
      infobulle = "22 décembre – 20 janvier";
      break;
  }
  document.getElementById("imagesigne").title = infobulle;

  localStorage.setItem("signe", signe);
  localStorage.setItem("horoscope", horoscope);
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded...");

  const header_container = document.querySelector(".header_container");
  const window_height = window.innerHeight;
  let headerContainerHeight = header_container.getBoundingClientRect().height;
  const updateHeaderHeight = () => {
    headerContainerHeight = header_container.getBoundingClientRect().height;
    // console.log("Updated header height:", headerContainerHeight);
    // console.log("Window height / 2:", window_height / 2);
  };

  const arrow_up = document.querySelector(".arrow_up");

  const form_animation = document.querySelector(".form_animation");

  window.addEventListener("wheel", function (event) {
    updateHeaderHeight();
    if (event.deltaY > 0 && headerContainerHeight > window.innerHeight / 2) {
      header_container.classList.remove("HeaderContainerUpAnimation");
      header_container.classList.add("HeaderContainerDownAnimation");
      arrow_up.classList.remove("ArrowFadeOut");
      arrow_up.classList.add("ArrowFadeIn");
      form_animation.classList.remove("FromUpAnimation");
      form_animation.classList.add("FromDownAnimation");
      console.log("scroll down");
    } else if (
      event.deltaY < 0 &&
      headerContainerHeight <= window.innerHeight / 2
    ) {
      header_container.classList.remove("HeaderContainerDownAnimation");
      header_container.classList.add("HeaderContainerUpAnimation");
      arrow_up.classList.remove("ArrowFadeIn");
      arrow_up.classList.add("ArrowFadeOut");
      form_animation.classList.remove("FromDownAnimation");
      form_animation.classList.add("FromUpAnimation");
      console.log("scroll up");
    }
  });
});

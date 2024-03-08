document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM loaded...");

  const header_container = document.querySelector(".header_container");
  const window_height = window.innerHeight;
  let headerContainerHeight = header_container.getBoundingClientRect().height;
  const updateHeaderHeight = () => {
    headerContainerHeight = header_container.getBoundingClientRect().height;
    console.log("Updated header height:", headerContainerHeight);
    console.log("Window height / 2:", window_height / 2);
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

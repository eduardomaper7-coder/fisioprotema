document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".equipo-slider");
  if (!slider) return;

  const radios = slider.querySelectorAll('input[name="equipo-slide"]');
  let index = 0;
  let intervalo;

  function siguienteSlide() {
    index++;

    if (index >= radios.length) {
      index = 0;
    }

    radios[index].checked = true;
  }

  function iniciarAutoplay() {
    intervalo = setInterval(siguienteSlide, 4500);
  }

  function pararAutoplay() {
    clearInterval(intervalo);
  }

  iniciarAutoplay();

  slider.addEventListener("mouseenter", pararAutoplay);
  slider.addEventListener("mouseleave", iniciarAutoplay);

  radios.forEach((radio, i) => {
    radio.addEventListener("change", () => {
      index = i;
      pararAutoplay();
      iniciarAutoplay();
    });
  });
});
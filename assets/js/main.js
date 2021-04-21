const circle = document.querySelector("#circle");

const ico1 = document.querySelector('.ico1');

const ico2 = document.querySelector('.ico2');



function relogio() {

  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      circle.classList.remove("animate-ping");
      circle.classList.remove("opacity-100");
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      relogio.classList.remove("text-green-300");
      relogio.classList.remove("animate-ping");
      relogio.classList.remove('text-yellow-400');
      ico1.classList.remove('animate-bounce');
      ico2.classList.remove('animate-bounce');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      circle.classList.add("animate-ping");
      circle.classList.add("opacity-100");
      relogio.classList.remove('pausado');
      relogio.classList.add("text-green-300");
      ico1.classList.add('animate-bounce');
      ico2.classList.remove('animate-bounce');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      circle.classList.remove("animate-ping");
      circle.classList.remove("opacity-100");
      clearInterval(timer);
      relogio.classList.add('pausado');
      relogio.classList.remove('text-green-300');
      relogio.classList.add('text-yellow-400');
      ico1.classList.remove('animate-bounce');
      ico2.classList.add('animate-bounce');
    }
  });
}
relogio();

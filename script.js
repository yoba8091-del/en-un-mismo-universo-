const inicio = document.getElementById('estrella-inicio');
const universo = document.getElementById('universo');
const luna = document.getElementById('luna');
const corazon = document.getElementById('corazon-central');
const mensajeFinal = document.getElementById('mensaje-final');

const frases = [
    "Eres mi lugar favorito.",
    "Gracias por existir.",
    "Contigo todo es mejor.",
    "Te elegiría una y otra vez.",
    "Te amo infinitamente."
];

// Acción al hacer clic
inicio.addEventListener('click', () => {
    // Ocultar estrella inicial
    inicio.style.opacity = 0;
    setTimeout(() => inicio.style.display = 'none', 1000);

    // Mostrar universo
    universo.style.opacity = 1;
    document.body.style.background = '#0a0a2e';

    // Mostrar luna
    luna.style.opacity = 1;
    luna.style.transform = 'translateX(0)';

    // Generar 1200 estrellas
    for(let i=0; i<1200; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('estrella');
        estrella.style.left = `${Math.random()*100}%`;
        estrella.style.top = `${Math.random()*100}%`;
        const tam = Math.random()*3+1;
        estrella.style.width = `${tam}px`;
        estrella.style.height = `${tam}px`;
        estrella.style.animationDelay = `${Math.random()*3}s`;
        universo.appendChild(estrella);
    }

    // Constelaciones de corazón
    for(let i=0; i<12; i++) {
        const c = document.createElement('div');
        c.classList.add('constelacion');
        c.style.left = `${Math.random()*80+10}%`;
        c.style.top = `${Math.random()*80+10}%`;
        c.style.width = `${Math.random()*100+50}px`;
        c.style.height = `${Math.random()*80+40}px`;
        c.style.animationDelay = `${Math.random()*2}s`;
        universo.appendChild(c);
    }

    // Lluvia de estrellas
    setInterval(() => {
        const lluvia = document.createElement('div');
        lluvia.classList.add('lluvia');
        lluvia.style.left = `${Math.random()*100}%`;
        universo.appendChild(lluvia);
        setTimeout(() => lluvia.remove(), 4000);
    }, 800);

    // Mostrar corazón
    corazon.style.opacity = 1;

    // Mostrar frases en círculo
    frases.forEach((texto, i) => {
        setTimeout(() => {
            const frase = document.createElement('div');
            frase.classList.add('frase');
            frase.textContent = texto;
            const angulo = (i / frases.length) * Math.PI * 2;
            const radio = 180;
            frase.style.left = `calc(50% + ${Math.cos(angulo)*radio}px)`;
            frase.style.top = `calc(50% + ${Math.sin(angulo)*radio}px)`;
            frase.style.transform = `translate(-50%, -50%) rotate(${angulo+Math.PI/2}rad)`;
            universo.appendChild(frase);
            setTimeout(() => frase.style.opacity = 1, 100);
        }, 3000 + i * 1500);
    });

    // Partículas brillantes
    setInterval(() => {
        const p = document.createElement('div');
        p.classList.add('particula');
        p.style.left = `${Math.random()*100}%`;
        p.style.top = `${Math.random()*100}%`;
        p.style.animationDelay = `${Math.random()*2}s`;
        universo.appendChild(p);
        setTimeout(() => p.remove(), 6000);
    }, 300);

    // Mensaje final
    setTimeout(() => {
        corazon.style.transform = 'translate(-50%,-50%) scale(0)';
        setTimeout(() => {
            mensajeFinal.textContent = '"En un universo infinito, siempre te volveré a elegir a ti."';
            mensajeFinal.style.transform = 'translate(-50%,-50%) scale(1)';
        }, 1000);
    }, 12000);
});

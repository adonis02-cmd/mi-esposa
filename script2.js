const secretWord = "JreBaap1722";
const secretName = "Jermelyn";
const youtubeID = "f_C83707pY4";

let player;
let isPlayerReady = false;

// 1. YouTube API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0', 
        width: '0',
        videoId: youtubeID,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 0, 
            'playlist': youtubeID,
            'loop': 1
        },
        events: {
            'onReady': (event) => {
                isPlayerReady = true;
                event.target.setVolume(100); 
            }
        }
    });
}

function checkPassword() {
    const input = document.getElementById("password-input").value;
    if (input === secretWord) {
        document.getElementById("step-1").style.display = "none";
        document.getElementById("step-2").style.display = "block";
        if (player) {
            player.unMute();
            player.playVideo();
        }
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

function checkName() {
    const nameInput = document.getElementById("name-input").value.trim();
    if (nameInput.toLowerCase() === secretName.toLowerCase()) {
        showHeart(); 
    } else {
        alert("That is not the name of my queen... Please try again.");
    }
}

function showHeart() {
    const container = document.getElementById("heart-container");
    const languages = ["I Love You", "Mahal Kita", "Te Amo", "Ay Ayten Ka"];
    
    document.getElementById("login-screen").style.display = "none";
    container.style.display = "block";
    container.innerHTML = ""; 

    for (let i = 0; i < 250; i++) {
        const t = i * (2 * Math.PI / 250);
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        const span = document.createElement("span");
        span.className = "heart-text";
        span.innerText = languages[Math.floor(Math.random() * languages.length)];
        span.style.left = (50 + x * 4) + "%";
        span.style.top = (50 + y * 4) + "%";
        container.appendChild(span);
    }

    setTimeout(() => {
        container.style.transition = "opacity 2s";
        container.style.opacity = "0";
        setTimeout(() => {
            container.style.display = "none";
            document.getElementById("main-content").style.display = "block";
            iniciarRegalo();
        }, 2000);
    }, 6000);
}

const messages = [
    "I love you so much my life❤️",
    "You're my favorite person and my one and only💕",
    "You're my whole world🌍",
    "You attract me with a force greater than Earth✨",
    "You are my eternal law of attraction; I would gladly fall toward the only center of gravity that gives my life meaning: Jermelyn🥺❤️",
    "I love you to the moon and back😘",
    "Whatever our souls are made of, yours and mine are the same❤️",
    "My heart already belongs to you, and now I want to be present in yours, stealing it slowly and with love😘❤️",
    "I am always thinking of you: my heart, my love, my everything🥺💕",
    "You are the most beautiful thing that has ever happened to me. I love you!❤️❤️"
];

function createTextBubble() {
    const container = document.getElementById("bubbles-text");
    if (!container) return;

    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
    
    // Posición aleatoria
    bubble.style.left = (Math.random() * 60 + 10) + "vw";
    bubble.style.top = (Math.random() * 60 + 15) + "vh";

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 8500);
}

const misFotos = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
    '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
    '31.jpg', '32.jpg', '33.jpg', '34.jpg'
];

let fotoIndex = 0;
function iniciarRegalo() {
    const galeria = document.getElementById("galeria");
    if (galeria.children.length > 0) return;

    misFotos.forEach((src, i) => {
        const wrapper = document.createElement("div");
        wrapper.className = "foto-wrapper";
        if (i === 0) wrapper.classList.add("active");

        wrapper.innerHTML = `
            <img src="${src}" class="bg-desenfocado">
            <img src="${src}" class="img-central">
        `;
        galeria.appendChild(wrapper);
    });

    setInterval(cambiarImagen, 5000); // Fotos cada 5 seg
    setInterval(createTextBubble, 3000); // Burbujas cada 3 seg (más tiempo para leer)
}

function createTextBubble() {
    const container = document.getElementById("bubbles-text");
    if (!container) return;

    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    
    // Añadimos un corazoncito al final de cada frase automáticamente
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    bubble.innerText = randomMsg + " ❤️";
    
    // Posiciones aleatorias esparcidas (lejos de los bordes para que no se corten)
    const randomX = Math.floor(Math.random() * 65) + 5; // de 5% a 70%
    const randomY = Math.floor(Math.random() * 75) + 10; // de 10% a 85%

    bubble.style.left = randomX + "vw";
    bubble.style.top = randomY + "vh";

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 8500);
}

function cambiarImagen() {
    const wrappers = document.querySelectorAll(".foto-wrapper");
    if (wrappers.length === 0) return;
    wrappers[fotoIndex].classList.remove("active");
    fotoIndex = (fotoIndex + 1) % wrappers.length;
    wrappers[fotoIndex].classList.add("active");
}


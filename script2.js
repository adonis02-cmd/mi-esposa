const secretWord = "JreBaap1722";
const secretName = "Jermelyn";
const youtubeID = "f_C83707pY4";

let player;
let isPlayerReady = false;

// 1. YouTube API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100', 
        width: '100',
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

// 2. Validación de Contraseña
function checkPassword() {
    const input = document.getElementById("password-input").value;
    if (input === secretWord) {
        document.getElementById("step-1").style.display = "none";
        document.getElementById("step-2").style.display = "block";
        if (player) {
            player.unMute();
            player.playVideo();
            player.setVolume(0); 
        }
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

// 3. Validación de Nombre
function checkName() {
    const nameInput = document.getElementById("name-input").value.trim();
    if (nameInput.toLowerCase() === secretName.toLowerCase()) {
        if (player) player.setVolume(100);
        showHeart(); 
    } else {
        alert("That is not the name of my queen... Please try again.");
    }
}

// 4. Corazón Gigante con 4 idiomas
function showHeart() {
    const container = document.getElementById("heart-container");
    const languages = ["I Love You", "Mahal Kita", "Te Amo", "Ay Ayten Ka"];
    const totalPhrases = 250; 

    document.getElementById("login-screen").style.display = "none";
    container.style.display = "block";

    for (let i = 0; i < totalPhrases; i++) {
        const t = i * (2 * Math.PI / totalPhrases);
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        
        const span = document.createElement("span");
        span.className = "heart-text";
        span.innerText = languages[Math.floor(Math.random() * languages.length)];
        
        span.style.left = (50 + x * 4.5) + "%";
        span.style.top = (50 + y * 4.5) + "%";
        span.style.animationDelay = (Math.random() * 2) + "s";
        
        container.appendChild(span);
    }

    setTimeout(() => {
        container.style.opacity = "0";
        container.style.transition = "opacity 2s";
        setTimeout(() => {
            container.style.display = "none";
            document.getElementById("main-content").style.display = "block";
            iniciarRegalo(); 
        }, 2000);
    }, 7000);
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

    const bubble= document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
    const left = Math.floor(Math.random() * 80) + 10;
    const top = Math.floor(Math.random() * 80) + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    bubble.style.maxWidth = "250px"; 
    bubble.style.whiteSpace = "normal";

    container.appendChild(bubble);

    setTimeout(() =>{
        const rect = bubble.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            const newleft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newleft}px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
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
    
    // Crear las imágenes en el DOM
    misFotos.forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        if (i === 0) img.classList.add("active");
        galeria.appendChild(img);
    });

    // Iniciar intervalo de fotos
    setInterval(cambiarImagen, 4000);
    // Iniciar burbujas de texto
    setInterval(createTextBubble, 2500);
}

function cambiarImagen() {
    const imagenes = document.querySelectorAll("#galeria img");
    if (imagenes.length === 0) return;

    imagenes[fotoIndex].classList.remove("active");
    fotoIndex = (fotoIndex + 1) % imagenes.length;
    imagenes[fotoIndex].classList.add("active");
}
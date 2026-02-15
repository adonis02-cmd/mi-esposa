const secretWord = "JreBaap1722";
const youtubeID = "RD-P1q3rJVE";

let player;
let isPlayerReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'RD-P1q3rJVE', 
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': 'RD-P1q3rJVE'
        },
        events: {
            'onReady': () => { isPlayerReady = true; }
        }
    });
}

function checkPassword() {
    const input = document.getElementById("password-input").value;
    const loginScreen = document.getElementById("login-screen");
    const mainContent = document.getElementById("main-content");
    const errorMsg = document.getElementById("error-msg");

    if (input === secretWord) {
        if (isPlayerReady && player) {
            player.playVideo();
        } else {
            // Si el API aún no está lista, forzamos un intento manual
            console.log("Esperando a YouTube...");
            setTimeout(() => { if(player) player.playVideo(); }, 1000);
        }

        loginScreen.style.opacity = "0";
        setTimeout(() => {
            loginScreen.style.display = "none";
            mainContent.style.display = "block";
          

            iniciarRegalo();
        }, 500);
    } else {
        errorMsg.style.display = "block";
    }
    
    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    })
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

setInterval(createTextBubble, 2500);

const misFotos = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg'
];

let indiceFoto = 0;

function cambiarFondo() {
    const cuerpo = document.body;
    cuerpo.style.backgroundImage = `url('${misFotos[indiceFoto]}')`;
     indiceFoto++;
        if (indiceFoto >= misFotos.length) {
        indiceFoto = 0;
    }
}

cambiarFondo();

setInterval(cambiarFondo, 4000);
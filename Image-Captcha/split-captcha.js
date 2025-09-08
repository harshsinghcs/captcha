const captchaContainer = document.getElementById('captcha-container');
const verifyButton = document.getElementById('verify-btn');
const refreshButton = document.getElementById('refresh-btn');
const validationMessage = document.getElementById('validation-message');
const voiceButton = document.getElementById('voice-btn');

const captchaConfig = [
    {
        src: './images/road-signal.png',
        target: 'road signal',
        correctSegments: [0,1,3,4]
    },
    {
        src: './images/cars.jpg',
        target: 'car',
        correctSegments: [3, 4, 6, 7]
    },
    {
        src: './images/zebra-crossing.jpg',
        target: 'zebra crossing',
        correctSegments: [1,4,7]
    },
    {
        src: './images/buses.jpg',
        target: 'bus',
        correctSegments: [1,2,3,4,5,7,8]
    }
];

let currentImage = null;
let previousImage = null;

function loadCaptcha() {
    captchaContainer.innerHTML = '';
    validationMessage.textContent = '';

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * captchaConfig.length);
    } while (captchaConfig[randomIndex] === previousImage);

    currentImage = captchaConfig[randomIndex];
    previousImage = currentImage;

    const header = document.querySelector('.captcha-header');
    header.innerHTML = `Select the <strong>${currentImage.target}</strong>`;

    const gridSize = 3; 
    for (let i = 0; i < gridSize * gridSize; i++) {
        const segment = document.createElement('div');
        segment.classList.add('captcha-segment');

        segment.style.backgroundImage = `url('${currentImage.src}')`;
        const x = -(i % gridSize) * 100;
        const y = -Math.floor(i / gridSize) * 100;
        segment.style.backgroundPosition = `${x}% ${y}%`;
        segment.style.backgroundSize = `300% 300%`;

        segment.addEventListener('click', () => {
            segment.classList.toggle('selected');
        });

        captchaContainer.appendChild(segment);
    }
}

function playAudio() {
    const message = `Select the ${currentImage.target}`;
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

function verifyCaptcha() {
    const selectedSegments = document.querySelectorAll('.captcha-segment.selected');
    const selectedIndexes = Array.from(selectedSegments).map(segment =>
        Array.from(captchaContainer.children).indexOf(segment)
    );

    const isCorrect =
        selectedIndexes.length === currentImage.correctSegments.length &&
        currentImage.correctSegments.every(index => selectedIndexes.includes(index));

    if (isCorrect) {
        validationMessage.textContent = '✅ Valid CAPTCHA!';
    } else {
        validationMessage.textContent = '❌ Invalid CAPTCHA! Refreshing...';
        setTimeout(() => {
            loadCaptcha(); 
        }, 1000);
    }
}

refreshButton.addEventListener('click', loadCaptcha);
voiceButton.addEventListener('click', playAudio);
verifyButton.addEventListener('click', verifyCaptcha);

// Initial captcha load
loadCaptcha();

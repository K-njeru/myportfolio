// Modal functionality
window.onload = function() {
    setTimeout(function() {
        document.getElementById('myModal').style.display = 'block';
    }, 10000); // 10 seconds delay
};

document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
};

// Audio player functionality
const playButton = document.getElementById('playButton');
const audioElement = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const stopButton = document.getElementById('stopButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const audioPlayer = document.getElementById('audioPlayer');
const audioCloseButton = document.getElementById('audioClose');

const songs = ['songs/song1.mp3', 'songs/song2.mp3', 'songs/song3.mp3']; // Update with your song files
let currentSongIndex = 0;

// Initialize audio player with the first song
audioElement.src = songs[currentSongIndex];

playButton.onclick = function() {
    console.log('Play button clicked'); // Debugging
    document.getElementById('myModal').style.display = 'none';
    audioPlayer.style.display = 'flex';

    audioElement.src = songs[currentSongIndex];
    audioElement.play();
};

playPauseButton.onclick = function() {
    console.log('Play/Pause button clicked'); // Debugging
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.querySelector('i').classList.remove('fa-play');
        playPauseButton.querySelector('i').classList.add('fa-pause');
    } else {
        audioElement.pause();
        playPauseButton.querySelector('i').classList.remove('fa-pause');
        playPauseButton.querySelector('i').classList.add('fa-play');
    }
};

nextButton.onclick = function() {
    console.log('Next button clicked'); // Debugging
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    playPauseButton.querySelector('i').classList.remove('fa-play');
    playPauseButton.querySelector('i').classList.add('fa-pause');
};

prevButton.onclick = function() {
    console.log('Previous button clicked'); // Debugging
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    playPauseButton.querySelector('i').classList.remove('fa-play');
    playPauseButton.querySelector('i').classList.add('fa-pause');
};

audioElement.onended = function() {
    console.log('Audio ended'); // Debugging
    playPauseButton.querySelector('i').classList.remove('fa-pause');
    playPauseButton.querySelector('i').classList.add('fa-play');
};

audioCloseButton.onclick = function() {
    console.log('Audio close button clicked'); // Debugging
    audioPlayer.style.display = 'none';
    audioElement.pause();
    audioElement.currentTime = 0;
};

/* stopButton.onclick = function() {
    console.log('Stop button clicked'); // Debugging
    audioElement.pause();
    audioElement.currentTime = 0;
    playPauseButton.querySelector('i').classList.remove('fa-pause');
    playPauseButton.querySelector('i').classList.add('fa-play');
}; */

const projects = [
    {
        title: "Hotel Reservation System",
        images: [
            "https://source.unsplash.com/featured/?hotel",
            "https://source.unsplash.com/featured/?resort",
            "https://source.unsplash.com/featured/?reception"
        ],
        stackLogos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        ],
        url: "https://example.com/hotel-reservation"
    },
    {
        title: "E-commerce Platform",
        images: [
            "https://source.unsplash.com/featured/?ecommerce",
            "https://source.unsplash.com/featured/?shopping",
            "https://source.unsplash.com/featured/?online-store"
        ],
        stackLogos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        ],
        url: "https://example.com/e-commerce"
    },
    {
        title: "Weather Forecast App",
        images: [
            "https://source.unsplash.com/featured/?weather",
            "https://source.unsplash.com/featured/?forecast",
            "https://source.unsplash.com/featured/?climate"
        ],
        stackLogos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        ],
        url: "https://example.com/weather-app"
    },
    {
        title: "Social Media Dashboard",
        images: [
            "https://source.unsplash.com/featured/?social-media",
            "https://source.unsplash.com/featured/?dashboard",
            "https://source.unsplash.com/featured/?analytics"
        ],
        stackLogos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        ],
        url: "https://example.com/social-dashboard"
    }
];

// Generate project cards
const carousel = document.querySelector('.projects-carousel');

projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.addEventListener('click', () => {
        window.open(project.url, '_blank');
    });

    const background = document.createElement('div');
    background.classList.add('card-background');
    background.style.backgroundImage = `url(${project.images[0]})`;

    const content = document.createElement('div');
    content.classList.add('card-content');

    const title = document.createElement('h3');
    title.classList.add('project-title');
    title.textContent = project.title;

    const stackContainer = document.createElement('div');
    stackContainer.classList.add('stack-logos');

    project.stackLogos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        stackContainer.appendChild(img);
    });

    content.appendChild(title);
    content.appendChild(stackContainer);
    card.appendChild(background);
    card.appendChild(content);
    carousel.appendChild(card);

    // Background image rotation
    let imageIndex = 0;
    setInterval(() => {
        imageIndex = (imageIndex + 1) % project.images.length;
        background.style.backgroundImage = `url(${project.images[imageIndex]})`;
    }, 5000);
});

// Carousel navigation
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentSlide = 0;

function updateCarousel() {
    const cardWidth = document.querySelector('.project-card').offsetWidth + 20; // card width + margin
    const carouselWidth = carousel.scrollWidth;
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const maxSlide = Math.ceil((carouselWidth - containerWidth) / cardWidth);

    if (currentSlide < 0) currentSlide = maxSlide;
    if (currentSlide > maxSlide) currentSlide = 0;

    carousel.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

leftArrow.addEventListener('click', () => {
    currentSlide--;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentSlide++;
    updateCarousel();
});

// Touch and swipe functionality for mobile
let startX = 0;
let isDragging = false;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
        currentSlide++;
        updateCarousel();
        isDragging = false;
    } else if (diffX < -50) {
        currentSlide--;
        updateCarousel();
        isDragging = false;
    }
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
});


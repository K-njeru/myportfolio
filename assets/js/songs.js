// Modal functionality
window.onload = function () {
    setTimeout(function () {
        document.getElementById('myModal').style.display = 'block';
    }, 10000); // 10 seconds delay
};

document.querySelector('.close').onclick = function () {
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

const songs = ['songs/song3.mp3', 'songs/song2.mp3', 'songs/skylarking.mp3']; // Update with your song files
let currentSongIndex = 0;

// Initialize audio player with the first song
audioElement.src = songs[currentSongIndex];

playButton.onclick = function () {
    console.log('Play button clicked'); // Debugging
    document.getElementById('myModal').style.display = 'none';
    audioPlayer.style.display = 'flex';

    audioElement.src = songs[currentSongIndex];
    audioElement.play();
};

playPauseButton.onclick = function () {
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

nextButton.onclick = function () {
    console.log('Next button clicked'); // Debugging
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    playPauseButton.querySelector('i').classList.remove('fa-play');
    playPauseButton.querySelector('i').classList.add('fa-pause');
};

prevButton.onclick = function () {
    console.log('Previous button clicked'); // Debugging
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    playPauseButton.querySelector('i').classList.remove('fa-play');
    playPauseButton.querySelector('i').classList.add('fa-pause');
};

audioElement.onended = function () {
    console.log('Audio ended'); // Debugging
    playPauseButton.querySelector('i').classList.remove('fa-pause');
    playPauseButton.querySelector('i').classList.add('fa-play');
};

audioCloseButton.onclick = function () {
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
}; 
*/

/* ABOUT ACCORDIONS */
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion-item');
        const accordion = accordionItem.querySelector('.accordion-collapse');
        const icon = button.querySelector('.accordion-icon');
        const isOpen = accordion.classList.contains('show');

        // Close all other accordions
        document.querySelectorAll('.accordion-item').forEach(item => {
            const collapse = item.querySelector('.accordion-collapse');
            const btn = item.querySelector('.accordion-button');
            const btnIcon = btn.querySelector('.accordion-icon');

            if (collapse !== accordion) {
                collapse.classList.remove('show', 'fade-in');
                btn.classList.add('collapsed');
                btnIcon.textContent = '+';
            }
        });

        // Toggle the current accordion's content visibility and icon
        if (!isOpen) {
            accordion.classList.add('show', 'fade-in');
            button.classList.remove('collapsed');
            icon.textContent = '×';
        } else {
            accordion.classList.remove('show', 'fade-in');
            button.classList.add('collapsed');
            icon.textContent = '+';
        }
    });
});

// CSS for fade-in animation
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .fade-in {
      animation: fadeIn 0.5s ease-in-out forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
`);


/* PORTFOLIO PROJECTS */

const cellBackgrounds = {
    cell0: [
        "assets/img/crank1.png",
        "assets/img/crank2.png",
        "assets/img/crank3.png"
    ],
    cell1: [
        "/assets/img/AM.png",
        "/assets/img/AM1.png",
        "/assets/img/AM2.png"
    ],
    cell2: [
        "/assets/img/kevo1.jpg",
        "/assets/img/kevo.jpg",
        "/assets/img/kevo3.png"
    ],
    cell3: [
        "assets/img/green1.png",
        "assets/img/green2.png",
        "assets/img/green.png"
    ],
    cell4: [
        "assets/img/prof1.png",
        "assets/img/prof2.png",
        "assets/img/prof.png"
    ]
};

// Preload images to ensure faster background switching
function preloadImages(imageArray) {
    imageArray.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
}

// Preload all images
Object.values(cellBackgrounds).forEach(preloadImages);

function changeBackground(cellId, backgrounds, direction, interval) {
    let index = 0;
    setInterval(() => {
        // Check if the screen is larger than 768px
        if (window.innerWidth > 768) {
            const cell = document.getElementById(cellId);
            cell.style.backgroundImage = `url('${backgrounds[index]}')`;
            cell.classList.remove('fade-left', 'fade-right');
            cell.offsetWidth; // Trigger reflow to restart the animation
            cell.classList.add(direction);

            index = (index + 1) % backgrounds.length;
        } else {
            // If screen is small, use a static background (set via CSS)
            const cell = document.getElementById(cellId);
            cell.style.backgroundImage = ''; // Let CSS handle the static image
        }
    }, interval);
}

// Start rotating backgrounds with different intervals and directions
changeBackground('cell0', cellBackgrounds.cell0, 'fade-right', 10000); // 10 seconds
changeBackground('cell1', cellBackgrounds.cell1, 'fade-left', 7000);  // 7 seconds
changeBackground('cell2', cellBackgrounds.cell2, 'fade-right', 13000); // 13 seconds
changeBackground('cell3', cellBackgrounds.cell3, 'fade-left', 17000);  // 17 seconds
changeBackground('cell4', cellBackgrounds.cell4, 'fade-right', 20000);


/*
function changeBackground(cellId, backgrounds, direction, interval) {
    let index = 0;
    setInterval(() => {
        const cell = document.getElementById(cellId);
        cell.style.backgroundImage = `url('${backgrounds[index]}')`;
        cell.classList.remove('fade-left', 'fade-right');
        cell.offsetWidth; // Trigger reflow to restart the animation
        cell.classList.add(direction);

        index = (index + 1) % backgrounds.length;
    }, interval);
}

// Start rotating backgrounds with different intervals and directions
changeBackground('cell0', cellBackgrounds.cell0, 'fade-right', 10000); // 10 seconds
changeBackground('cell1', cellBackgrounds.cell1, 'fade-left', 7000); // 7 seconds
changeBackground('cell2', cellBackgrounds.cell2, 'fade-right', 13000); // 13 seconds
changeBackground('cell3', cellBackgrounds.cell3, 'fade-left', 17000); // 17 seconds

*/

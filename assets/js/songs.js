
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

const songs = ['songs/song1.mp3', 'songs/song2.mp3', 'songs/song3.mp3']; // Update with your song files
let currentSongIndex = 0;

playButton.onclick = function() {
    playPauseButton.textContent = 'Pause';
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
};

playPauseButton.onclick = function() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
};

stopButton.onclick = function() {
    audioElement.pause();
    audioElement.currentTime = 0;
    playPauseButton.textContent = 'Play';
};

nextButton.onclick = function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    playPauseButton.textContent = 'Pause';
};

prevButton.onclick = function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    playPauseButton.textContent = 'Pause';
};

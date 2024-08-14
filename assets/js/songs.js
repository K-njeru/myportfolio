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


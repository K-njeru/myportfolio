TweenMax.set(".play-circle-01", {
  rotation: 90,
  transformOrigin: "center"
})

TweenMax.set(".play-circle-02", {
  rotation: -90,
  transformOrigin: "center"
})

TweenMax.set(".play-perspective", {
  xPercent: 6.5,
  scale: .175,
  transformOrigin: "center",
  perspective: 1
})

TweenMax.set(".play-video", {
  visibility: "hidden",
  opacity: 0,
})

TweenMax.set(".play-triangle", {
  transformOrigin: "left center",
  transformStyle: "preserve-3d",
  rotationY: 10,
  scaleX: 2
})

const rotateTL = new TimelineMax({ paused: true })
  .to(".play-circle-01", .7, {
    opacity: .1,
    rotation: '+=360',
    strokeDasharray: "456 456",
    ease: Power1.easeInOut
  }, 0)
  .to(".play-circle-02", .7, {
    opacity: .1,
    rotation: '-=360',
    strokeDasharray: "411 411",
    ease: Power1.easeInOut
  }, 0)

const openTL = new TimelineMax({ paused: true })
  .to(".play-backdrop", 1, {
    opacity: .95,
    visibility: "visible",
    ease: Power2.easeInOut
  }, 0)
  .to(".play-close", 1, {
    opacity: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-perspective", 1, {
    xPercent: 0,
    scale: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-triangle", 1, {
    scaleX: 1,
    ease: ExpoScaleEase.config(2, 1, Power2.easeInOut)
  }, 0)
  .to(".play-triangle", 1, {
    rotationY: 0,
    ease: ExpoScaleEase.config(10, .01, Power2.easeInOut)
  }, 0)
  .to(".play-video", 1, {
    visibility: "visible",
    opacity: 1
  }, .5)


const button = document.querySelector(".play-button")
const backdrop = document.querySelector(".play-backdrop")
const close = document.querySelector(".play-close")

button.addEventListener("mouseover", () => rotateTL.play())
button.addEventListener("mouseleave", () => rotateTL.reverse())
button.addEventListener("click", () => openTL.play())
backdrop.addEventListener("click", () => openTL.reverse())
close.addEventListener("click", e => {
  e.stopPropagation()
  openTL.reverse()
})

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

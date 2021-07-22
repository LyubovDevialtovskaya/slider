const sliders = document.querySelectorAll ('.slides');
const indicators = document.querySelectorAll ('.indicator');
const pauseButton = document.querySelectorAll ('#pause-btn');
const prevButton = document.querySelectorAll ('#prev-btn');
const nextButton = document.querySelectorAll ('#next-btn');

let  currentSlide =0;
let slidesCount = slides.length;
let interval = null;
let isPlaying = true;



function gotoSlide (n) {
slides [currentSlide].classList.toggle ('active');
indicators [currentSlide].classList.toggle ('active');
currentSlide = ( n + slideCount)% slidesCount;
indicators [currentSlide].classList.toggle ('active');
slides [currentSlide].classList.toggle ('active');
}


function nextSlide () {
gotoSlide (currentSlide + 1)
}
function prevSlide () {
gotoSlide (currentSlide - 1)
}

function next () {
pause ();
nextSlide ();
}

function pause () {
if (isPlaying) {
clearInterval (interval);
isPlaying=false;
pauseButton.innerHTML = 'Play';
}
}

function play () {
interval =setInterval (nextSlide,1000);
isPlaying = true;
pauseButton.innerHTML = 'Pause';}


function pausePlay () {
if (isPlaying){
pause ();
} else {
play(); void
play ();
}
}

function next () {
pause ();
nextSlide ();
}

function prev() {
pause ();
prevSlide ();
}
pauseButton.addEventListener ('click, pausePlay');
prevButton.addEventListener ('click, prev');
nextButton.addEventListener ('click, next');

indicators.forEach (el)
console.log (el)
el.addEventLister ()

interval = setInterval (nextSlide, 1000);

console.log ('~slides , slides');



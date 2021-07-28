(function (time){
    const container= document.querySelector('#carousel');
    const sliders = document.querySelectorAll ('.slides');
    const indicatorsContainer = document.querySelector ('#indicators-container');
    const pauseButton = document.querySelector ('#pause-btn');
    const prevButton = document.querySelector ('#prev-btn');
    const nextButton = document.querySelector ('#next-btn');
    
    let  currentSlide =0;
    let slidesCount = slides.length;
    let interval = 1000;
    let timerID = null;
    let isPlaying = true;
    let swipeStartX = null;
    let swipeEndX = null;
    
    const CODE_SPASE = 'Spase';
    const CODE_LEFT_ARROW = 'ArrowLeft';
    const CODE_RIGHT_ARROW = 'ArrowRight';
    
    const FA_PAUSE ='<i class ="far fa-pause-circle"></i>';
    const FA_PLAY ='<i class ="far fa-play-circle"></i>';
    
    
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
    clearInterval (timerID);
    isPlaying=false;
    pauseButton.innerHTML = FA_PLAY;
    }
    }
    
    function play () {
    timerID =setInterval (nextSlide,interval);
    isPlaying = true;
    pauseButton.innerHTML = FA_PAUSE;}
    
    
   
    const pausePlay = () => isPlaying ? pause ():play();

    function next () {
    pause ();
    nextSlide ();
    }
    
    function prev() {
    pause ();
    prevSlide ();
    }
    
    function indicate (e){
    const target = e.target;
    if (target && target.classList.contains ('indicator')){
     pause ();
     gotoSlide (+target.dataset.slideTo);
    }
    }
    
    function pressKey(){
    if (e.code === CODE_LEFT_ARROW)prev ();
    if (e.code === CODE_RIGHT_ARROW)next();
    if (e.code === CODE_SPASE)pausePlay();
    }
    function swipeStart (e){
    swipeStartX = e.changedTouches [0].pagesX;
    }
    function swipeEnd (e){
    swipeEndX = e.changedTouches [0].pagesX;
    swipeStartX - swipeEndX > +100 && next();
    swipeStartX - swipeEndX < -100 && prev ();
    }  
    function initListerners(){
    pauseButton.addEventListener ('click', pausePlay);
    prevButton.addEventListener ('click', prev);
    nextButton.addEventListener ('click', next);
    indicatorsContainer.addEventLister ('click',indicate);
    document.addEventLister('keydown',pressKey);
    container.addEventLister('touchstart',swipeStart);
    container.addEventLister('touchend',swipeEnd);
    }
    function init (){
        initListerners ();
        timerID = setInterval (nextSlide, interval);
    }
init ();

}(3000));








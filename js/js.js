//GENERAL VARIABLE
let frames = document.querySelectorAll(".frame");
let backgroundsound = document.querySelector(".sound");
let soundbuttons = document.querySelectorAll(".soundbtn");


//FRAME #1 VARIABLE
let frame1_playbtn = document.querySelector(".frame1 .playbutton");


//FRAME #2 VARIABLE
let frame2 = document.querySelector(".frame2");
let frame2_soundbtn = document.querySelector(".frame2 .soundbtn");


//FRAME #3 VARIABLE
let frame3 = document.querySelector(".frame3");
let frame3_soundbtn = document.querySelector(".frame3 .soundbtn");
let frame3_titleimg = document.querySelector(".frame3 .titleImage");


//FRAME #4 VARIABLE
let frame4 = document.querySelector(".frame4");
let frame4_soundbtn = document.querySelector(".frame4 .soundbtn");
let frame4_characterbox = document.querySelector(".frame4 .characterBox");


//FRAME #5 VARIABLE
let frame5 = document.querySelector(".frame5");
let frame5_repeatbtn = document.querySelector(".frame5 .repeatbutton");



//GENRAL FUNCTIONS/CONTROL
function hideCurrentFrame(){
    frames.forEach(removeCurrentFrameClass);
}
function removeCurrentFrameClass(frameItem){
    frameItem.classList.remove("currentFrame");
}
function toggleSound(){
    if(backgroundsound.paused) backgroundsound.play();
    else backgroundsound.pause();
    //change sound btn too
    soundbuttons.forEach(toggleSoundBtn);
}
function toggleSoundBtn(soundBtnItem){
    soundBtnItem.classList.toggle("soundplay");
    soundBtnItem.classList.toggle("soundmute");
}
backgroundsound.addEventListener("ended",startBackgroundSoundAgain);
function startBackgroundSoundAgain(){
    backgroundsound.currentTime = 1;
    backgroundsound.play();
}


//FRAME #1 ANIMATION CONTROL
frame1_playbtn.addEventListener("click", goFrame2);


//FRAME #2 ANIMATION CONTROL
function goFrame2(){
    hideCurrentFrame();
    frame2.classList.add("currentFrame");
    frame2_soundbtn.addEventListener("animationend", goFrame3);
}


//FRAME #3 ANIMATION CONTROL
function goFrame3(){
    hideCurrentFrame();
    frame3.classList.add("currentFrame");
    toggleSound();
    frame3_soundbtn.addEventListener("click", toggleSound);
    frame3_titleimg.addEventListener("animationend", goFrame4);
}


//FRAME #4 ANIMATION CONTROL
function goFrame4(){
    hideCurrentFrame();
    frame4.classList.add("currentFrame");
    frame4_soundbtn.addEventListener("click", toggleSound);
    frame4_characterbox.addEventListener("animationend", goFrame5);
}


//FRAME #5 ANIMATION CONTROL
function goFrame5(){
    hideCurrentFrame();
    frame5.classList.add("currentFrame");
    backgroundsound.currentTime = 1;
    if(backgroundsound.paused) {}
    else toggleSound();
    frame5_repeatbtn.addEventListener("click", goFrame2);
}


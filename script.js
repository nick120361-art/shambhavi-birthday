const loader = document.getElementById("loader");
const main = document.getElementById("main");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

const slides = document.querySelectorAll(".slide");

let current = 0;

openBtn.onclick = () => {

loader.style.display = "none";

main.style.display = "block";

music.play().catch(() => {});

startSlideshow();

createHearts();

};

function startSlideshow(){

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},2500);

}

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.animation="fly 6s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},300);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

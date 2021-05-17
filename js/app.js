'use strict'
let attempts=0;
let maxAttempts =5;
let busMall =[] ;

function BusMallImg (imgName) {
    this.imgName = imgName.split('.')[0];
    this.source='i/' + imgName;
    this.clicks=0;
    this.views=0;
    busMall.push(this);


}

let busMallImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg','boots.jpg','breakfast.jpg', 'bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg']

for (let index = 0; index < busMallImg.length; index++) {
    new BusMallImg (busMallImg[index]);
    
}

function randomImg(){
    return Math.floor(Math.random() * busMall.length);
}

let oneEl = document.getElementById('leftImg');
let twoEl = document.getElementById('middleImg');
let threeEl = document.getElementById('rightImg');

let leftImgIn;
let middleImgIn;
let rightImgIn;


function renderImages() { 
leftImgIn=randomImg();
middleImgIn=randomImg();
rightImgIn=randomImg();

switch(leftImgIn){
    case middleImgIn:
    leftImgIn=randomImg();
    case rightImgIn:
    leftImgIn=randomImg();


}

switch(middleImgIn){
    case leftImgIn:
    middleImgIn=randomImg();
    case rightImgIn:
    middleImgIn=randomImg();


}
switch(rightImgIn){
    case leftImgIn:
    rightImgIn=randomImg();
    case middleImgIn:
    rightImgIn=randomImg();


}

oneEl.setAttribute('src', busMall[leftImgIn].source)
oneEl.setAttribute('title', busMall[leftImgIn].source);
busMall[leftImgIn].views++;

twoEl.setAttribute('src', busMall[middleImgIn].source)
twoEl.setAttribute('title', busMall[middleImgIn].source);
busMall[middleImgIn].views++;

threeEl.setAttribute('src', busMall[rightImgIn].source)
threeEl.setAttribute('title', busMall[rightImgIn].source);
busMall[rightImgIn].views++;
}

renderImages();


oneEl.addEventListener('click', handelClicks);
twoEl.addEventListener('click', handelClicks);
threeEl.addEventListener('click', handelClicks);

function handelClicks(event){
    attempts++;
    if (attempts <= maxAttempts) {
        console.log(event.target.id)
        if (event.target.id === 'leftImg') {
            busMall[leftImgIn].clicks++;
        } else if (event.target.id === 'middleImg') {
            busMall[middleImgIn].clicks++;
            
        }else if (event.target.id === 'rightImg') {
            busMall[rightImgIn].clicks++;
        }
        
        renderImages();
    } else {
    
let ulEl = document.getElementById('results');

let liEl;

let buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', results);

    function results(event){
        event.preventDefault();
        for (let i = 0; i < busMall.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${busMall[i].imgName} has ${busMall[i].views} views and has ${busMall[i].clicks} clicks.`}
        
    }



        oneEl.removeEventListener('click', handelClicks);
        twoEl.removeEventListener('click', handelClicks);
        threeEl.removeEventListener('click', handelClicks);
    }


}
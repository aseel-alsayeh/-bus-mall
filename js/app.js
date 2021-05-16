'use strict'
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
let middleImgIn
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
busMall[leftImgIn].views++;
twoEl.setAttribute('src', busMall[middleImgIn].source)
busMall[middleImgIn].views++;

threeEl.setAttribute('src', busMall[rightImgIn].source)
busMall[rightImgIn].views++;
}

randomImg();
renderImages();






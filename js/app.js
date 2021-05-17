'use strict'
let attempts=0;
let maxAttempts =5;
let busMall =[] ;
<<<<<<< HEAD
let imgesName =[];
let c = [];
let v =[];
let itterationArray =[];

=======
>>>>>>> 6815aead334c413ac4811802921208f9368e6290

function BusMallImg (imgName) {
    this.imgName = imgName.split('.')[0];
    this.source='i/' + imgName;
    this.clicks=0;
    this.views=0;
    busMall.push(this);
<<<<<<< HEAD
    imgesName.push(this.imgName)
=======

>>>>>>> 6815aead334c413ac4811802921208f9368e6290

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

<<<<<<< HEAD
console.log(itterationArray)


switch(leftImgIn){
    // case itterationArray[0]:
    // leftImgIn=randomImg();
    //  case itterationArray[1]:
    // leftImgIn=randomImg();
    // case itterationArray[2]:
    // leftImgIn=randomImg();       
=======
switch(leftImgIn){
>>>>>>> 6815aead334c413ac4811802921208f9368e6290
    case middleImgIn:
    leftImgIn=randomImg();
    case rightImgIn:
    leftImgIn=randomImg();
<<<<<<< HEAD
    
}
// itterationArray.push(leftImgIn);
itterationArray[0]=leftImgIn;

switch(middleImgIn){
    // case itterationArray[0]:
    // miidleImgIn=randomImg();
    //  case itterationArray[1]:
    // middleImgIn=randomImg();
    // case itterationArray[2]:
    // middleImgIn=randomImg(); 
=======


}

switch(middleImgIn){
>>>>>>> 6815aead334c413ac4811802921208f9368e6290
    case leftImgIn:
    middleImgIn=randomImg();
    case rightImgIn:
    middleImgIn=randomImg();


}
<<<<<<< HEAD
// itterationArray.push(middleImgIn);
itterationArray[1]=middleImgIn;

switch(rightImgIn){
    // case itterationArray[0]:
    // rightImgIn=randomImg();
    //  case itterationArray[1]:
    // rightImgIn=randomImg();
    // case itterationArray[2]:
    // rightImgIn=randomImg(); 
=======
switch(rightImgIn){
>>>>>>> 6815aead334c413ac4811802921208f9368e6290
    case leftImgIn:
    rightImgIn=randomImg();
    case middleImgIn:
    rightImgIn=randomImg();


}
<<<<<<< HEAD
// itterationArray.push(rightImgIn);
itterationArray[2]=rightImgIn ;


// 
=======
>>>>>>> 6815aead334c413ac4811802921208f9368e6290

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
<<<<<<< HEAD
renderImages();

while( leftImgIn == middleImgIn && rightImgIn){
    leftImgIn=randomImg();
}
while( middleImgIn == leftImgIn && rightImgIn){
    middleImgIn=randomImg();
}
while( rightImgIn == middleImgIn && leftImgIn){
    rightImgIn=randomImg();
}
=======

renderImages();
>>>>>>> 6815aead334c413ac4811802921208f9368e6290


oneEl.addEventListener('click', handelClicks);
twoEl.addEventListener('click', handelClicks);
threeEl.addEventListener('click', handelClicks);

function handelClicks(event){
    attempts++;
    if (attempts <= maxAttempts) {
<<<<<<< HEAD
        // console.log(event.target.id)
=======
        console.log(event.target.id)
>>>>>>> 6815aead334c413ac4811802921208f9368e6290
        if (event.target.id === 'leftImg') {
            busMall[leftImgIn].clicks++;
        } else if (event.target.id === 'middleImg') {
            busMall[middleImgIn].clicks++;
            
        }else if (event.target.id === 'rightImg') {
            busMall[rightImgIn].clicks++;
        }
        
        renderImages();
<<<<<<< HEAD
        for(let i=0; i<itterationArray.length; i++){
         

            switch(itterationArray[i]){
                case leftImgIn:
                    leftImgIn=randomImg();          
            
                case middleImgIn:
                    middleImgIn=randomImg();
                   
            
                case rightImgIn:
                    rightImgIn=randomImg();          
            
            }
        }












=======
>>>>>>> 6815aead334c413ac4811802921208f9368e6290
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
<<<<<<< HEAD
            liEl.textContent = `${busMall[i].imgName} has ${busMall[i].views} views and has ${busMall[i].clicks} clicks.`
            c.push(busMall[i].clicks);
            v.push(busMall[i].views);}
=======
            liEl.textContent = `${busMall[i].imgName} has ${busMall[i].views} views and has ${busMall[i].clicks} clicks.`}
        
>>>>>>> 6815aead334c413ac4811802921208f9368e6290
    }



        oneEl.removeEventListener('click', handelClicks);
        twoEl.removeEventListener('click', handelClicks);
        threeEl.removeEventListener('click', handelClicks);
<<<<<<< HEAD
        chart();
    }


}


function chart() {
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: imgesName,
        datasets: [ {
            label: '# of Votes',
            data: c,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        
    },{
    label: '# of view',
    data: v,
    backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        
    ],
    borderColor: [
        'rgba(75, 192, 192, 0.2)',        
    ],
    borderWidth: 1
}]
},
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
=======
    }


>>>>>>> 6815aead334c413ac4811802921208f9368e6290
}
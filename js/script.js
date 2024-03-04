// elementi
const imgWrapper = document.querySelector('.img-wrapper');
const down = document.querySelector('.down');
const up = document.querySelector('.up');
// Creo una variabile per la funzione setInterval
let interval;

// aggiungo un contatore per le immagini
let counterImg = 0;

// 3. salvo le immagini in un array
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

// nascondo il bottone down di default nella prima imagine
// down.classList.add('hide');

// 4.

for(let i = 0; i < images.length; i++){
    const img = images[i];
    imgWrapper.innerHTML += `<img class="img hide" src="${img}">`;
}

// creo una costante che riprende tutti gli elementi con la classe img
const imgCollection = document.getElementsByClassName('img');

//tolgo la classe hide al primo elemento sennò non risulta visibile
imgCollection[counterImg].classList.remove('hide');

// 5.
down.addEventListener('click', function(){
    clickDown();
})

up.addEventListener('click', function(){
    clickUp();
    
})

// Raggruppo le funzioni 
function clickUp(){
    imgCollection[counterImg++].classList.add('hide');
    // 1
    if(counterImg === images.length){
        counterImg = 0;
    }

    imgCollection[counterImg].classList.remove('hide');
}

function clickDown(){
    imgCollection[counterImg--].classList.add('hide');
    // 1
    if(counterImg < 0){
        counterImg = images.length - 1;
    }

    imgCollection[counterImg].classList.remove('hide');
}

// 2.

startScrolling();
function startScrolling() {
    // Call clickUp function every 3 seconds
    interval = setInterval(clickUp, 3000);
  }
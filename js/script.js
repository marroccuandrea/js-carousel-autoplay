// elementi
const imgWrapper = document.querySelector('.img-wrapper');
const down = document.querySelector('.down');
const up = document.querySelector('.up');

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
down.classList.add('hide');

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
    // 7.
    up.classList.remove('hide');
    
    // 6.
    imgCollection[counterImg--].classList.add('hide');
    imgCollection[counterImg].classList.remove('hide');
    // 8.
    if(counterImg == 0){
        down.classList.add('hide')
    }
})

up.addEventListener('click', function(){
    
    // 7.
    down.classList.remove('hide');
    // 6.
    imgCollection[counterImg++].classList.add('hide');
    imgCollection[counterImg].classList.remove('hide');

    // 10.
    if(counterImg == images.length - 1){
        up.classList.add('hide');
    }
})
'use strict';


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',];
const items = document.querySelector('.items');
let conteggio = 0;

const carousel = [
  {
    urlImg: 'img/01.jpg',
    titolo: 'Paesaggio 1',
    descrizione: 'una vista pazzesca che lascia senza parole.',
  },
  {
    urlImg: 'img/02.jpg',
    titolo: 'Paesaggio 2',
    descrizione: 'una città con vista mare, una delle più belle località',
  },
  {
    urlImg: 'img/03.jpg',
    titolo: 'Paesaggio 3',
    descrizione: 'ci troviamo a londra con il suo spettacolare big ben',
  },
  {
    urlImg: 'img/04.jpg',
    titolo: 'Paesaggio 4',
    descrizione: 'dove la notte non ha limiti ,nemmeno la bellezza di questa fantastica città',
  },
  {
    urlImg: 'img/05.jpg',
    titolo: 'Paesaggio 5',
    descrizione: 'per un clima estivo, una località che ti farà rimanere a bocca aperta',
  },
];



for (let i = 0; i < carousel.length; i++) {

    // creazione item
    const item = document.createElement('div');
    item.classList.add('item');

    if (i === conteggio){
        item.classList.add('active');
    }

    // creazione img
    const img = document.createElement('img');
    img.src = carousel[i].urlImg;
    img.alt = `img ${i}`;

    item.append(img);
    items.append(item);
    
}
document.querySelector('.titolo').innerText = carousel[conteggio].titolo;
document.querySelector('.descrizione').innerText = carousel[conteggio].descrizione;

const domItem = document.querySelectorAll('.item');
const thumbnail = document.querySelectorAll('.opacity');
if (conteggio === 0) {
    thumbnail[conteggio].classList.remove('opacity');
}


// avanti

next.addEventListener('click', function(){
    if (conteggio < domItem.length - 1){
        
        domItem[conteggio].classList.remove('active');
        conteggio++;
        domItem[conteggio].classList.add('active');
        thumbnail[conteggio].classList.remove('opacity');
        thumbnail[conteggio - 1].classList.add('opacity');
        document.querySelector('.titolo').innerText = carousel[conteggio].titolo;
        document.querySelector('.descrizione').innerText = carousel[conteggio].descrizione;
        
    
    } else if (conteggio === 4){
        domItem[conteggio].classList.remove('active');
        thumbnail[conteggio].classList.add('opacity')
        conteggio = 0;
        domItem[conteggio].classList.add('active');
        thumbnail[conteggio].classList.remove('opacity');
        document.querySelector('.titolo').innerText = carousel[conteggio].titolo;
        document.querySelector('.descrizione').innerText = carousel[conteggio].descrizione;
        
    }

})

//  indietro

prev.addEventListener('click', function(){
    stopAutoplay();
    if (conteggio > 0 ){
        domItem[conteggio].classList.remove('active');
        conteggio--;
        domItem[conteggio].classList.add('active');
        thumbnail[conteggio].classList.remove('opacity');
        thumbnail[conteggio + 1].classList.add('opacity');
        document.querySelector('.titolo').innerText = carousel[conteggio].titolo;
        document.querySelector('.descrizione').innerText = carousel[conteggio].descrizione;
    
    }  else if (conteggio === 0){
        domItem[conteggio].classList.remove('active');
        thumbnail[conteggio].classList.add('opacity')
        conteggio = 4;
        domItem[conteggio].classList.add('active');
        thumbnail[conteggio].classList.remove('opacity');
        document.querySelector('.titolo').innerText = carousel[conteggio].titolo;
        document.querySelector('.descrizione').innerText = carousel[conteggio].descrizione;
    }
    
})


let autoplayStart = 3000;
let autoplay;

function startAutoplay() {
    autoplay = setInterval(() => {
        next.click();
    }, autoplayStart);
}

function stopAutoplay() {
    clearInterval(autoplay);
}


const bottoneStart = document.querySelector('.btn-start');
const bottoneStop = document.querySelector('.btn-stop');

bottoneStart.addEventListener('click', startAutoplay);
bottoneStop.addEventListener('click', stopAutoplay);

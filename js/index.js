// variables pour le hero
const navNext = document.querySelector('#nav-next');
const navPrev = document.querySelector('#nav-prev');
const Slides = Array.from(document.querySelectorAll('.slide'));
const nbSlide = Slides.length;
let counter = 1;
// variables pour les fiches
const nextBtn = [...document.querySelectorAll('.next')];
const preBtn = [...document.querySelectorAll('.prev')];
let ficheContainer = [...document.querySelectorAll('.fiche-container')];
let fiche =  document.querySelectorAll('.fiche');
// variables pour la barre de recherche
const SearchBox = document.querySelector('.SearchBox');
const search_btn = document.querySelector('.search_btn');
const closeSearch = document.querySelector('.closeSearch');
let is_visible = 0;

/**  SEARCHBAR PART  **/

search_btn.addEventListener('click', () => {
    is_visible++;
    // si le nombre de click est impair, on affiche la barre de recherche
    if (is_visible%2 == 1){
        SearchBox.classList.add('visible')
    }
    else{   
        SearchBox.classList.remove('visible')
    }
})
closeSearch.addEventListener('click', () => {
    SearchBox.classList.remove('visible')
})


/**  SIDEBAR PART  **/

function openNav() {
    document.getElementById("mySideBar").style.width = "15.625rem";
    document.getElementById("mySideBar").style.opacity = 1;
};

function closeNav() {
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("mySideBar").style.opacity = 0;
};

/**  HERO PART  **/

// initialise le positionnement de chaque slide
Slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - counter)}%)`;
})

function nextSlide(){
    // empêche le spam click qui fait sortir du slide container
    if (counter >= nbSlide - 1) return;
    counter++;
    Slides.forEach((slide, i) => {
        // ajoute une transition fluide
        slide.style.transition = 'transform 0.4s ease-in-out';
        // déplace les slides
        slide.style.transform = `translateX(${100 * (i - counter)}%)`;
    })
    Slides[counter].addEventListener('transitionend', () => {
        if(Slides[counter].id === 'firstClone') {
            // si on arrive au clone du premier slide
            counter = nbSlide - counter;
            // remet le counter à celui du premier slide
            Slides.forEach((slide, i) => {
                // retire les transitions
                slide.style.transition = 'none';
                // et on tp les slides
                slide.style.transform = `translateX(${100 * (i - counter)}%)`;
            })
        }
    });
};

function backSlide(){
    // empêche le spam click qui fait sortir du slide container
    if (counter <= 0) return;
    counter--;
    Slides.forEach((slide, i) => {
        // ajoute une transition fluide
        slide.style.transition = 'transform 0.4s ease-in-out';
        // déplace les slides
        slide.style.transform = `translateX(${100 * (i - counter)}%)`;
    })
    Slides[counter].addEventListener('transitionend', () => {
        if(Slides[counter].id === 'lastClone') {
            // si on arrive au clone du dernier slide
            counter = nbSlide - 2;
            // on met le counter au dernier slide
            Slides.forEach((slide, i) => {
                // on retire les transitions
                slide.style.transition = 'none';
                // on se tp au dernier slide
                slide.style.transform = `translateX(${100 * (i - counter)}%)`;
            })
        }
    });
};

navNext.addEventListener('click', nextSlide);
navPrev.addEventListener('click', backSlide);

/**  SLIDERS PART  **/

ficheContainer.forEach((item, i) => {

     nextBtn[i].addEventListener('click', () => {
        let FicheWidth = document.getElementsByClassName("fiche")[i].clientWidth + 21.75;
        let scrollwidth = FicheWidth * ((100 / 25) - 1) ;
        item.scrollLeft += scrollwidth; 
    });

    preBtn[i].addEventListener('click', () => {
        let FicheWidth = document.getElementsByClassName("fiche")[i].clientWidth + 21.75;
        let scrollwidth = FicheWidth * ((100 / 25) - 1);
        item.scrollLeft -= scrollwidth;
    });
})
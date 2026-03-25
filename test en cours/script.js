// variables pour la barre de recherche
const SearchBox = document.querySelector('.SearchBox');
const search_btn = document.querySelector('.search_btn');
const closeSearch = document.querySelector('.closeSearch');
let is_visible = 0;

// variables pour les filtres
const filter_tags = document.querySelectorAll('.filter a');
// données
const data = [
    // title : titre de l'oeuvre
    // link : lien vers l'oeuvre
    // filename : nom du fichier image
    // author : auteur de l'oeuvre
    // description : description de l'oeuvre
    // tags : tags de l'oeuvre (pour les filtres)

    {title: 'Infinite Mage', link: '#',
    filename: 'infinite_mage.jpg', author: 'Kim Chi-Woo',
    description: '',
    tags: ['En cours', 'Manhwa']},

    {title: 'Lecteur Omniscient', link: '#',
    filename: 'omniscient_reader.jpg', author: 'Sing Shong',
    description: "« Je suis le seul lecteur à connaître la fin du monde. » [Les trois façons de survivre dans un monde en ruine], ce roman fantastique de 3 149 chapitres, est devenu la réalité. Et il n'existe qu'une seule personne qui a lu l'intégralité de l'ouvrage.",
    tags: ['En cours', 'Manhwa']},

    {title: 'Paripi Koumei', link: '#', 
    filename: 'paripi_koumei.jpg', author: 'Ryo Ogawa, Yuto Yotsuba',
    description: '',
    tags: ['En cours', 'Manga']},
    
    {title: 'Pick me up Infinite Gacha', link: '#',
    filename: 'pick_me_up_infinite_gacha.png', author: 'Wasakbasak (Art) Hermode (Story)',
    description: '',
    tags: ['En cours', 'Manhwa']},

    {title: 'Superhuman Battlefield', link: '#', 
    filename: 'superhuman_battlefield.jpeg', author: 'ellio_',
    description: '',
    tags: ['En cours', 'Manhwa']},

    {title: 'The Beginning After The End', link: '#',
    filename: 'The_Beginning_After_The_End.jpg', author: 'TurtleMe',
    description: '',
    tags: ['En pause', 'Novel']},
    
    {title: 'The World After The End', link: '#', 
    filename: 'The_World_After_The_End.png', author: 'S-Cynan',
    description: '',
    tags: ['En cours', 'Manhwa']},
];

// variables contenant les filtres actuels, initialisé à 'Tous'
let filters = ['Tous'];

/**  SEARCHBAR PART  **/

const SearchBar = document.getElementById('Search');

SearchBar.addEventListener('keyup', () => { 
    const input = SearchBar.value.toLowerCase();
    // récupère les suggestions qui vont avec l'input de la barre de recherche
    const result = data.filter(item => item.title.toLowerCase().includes(input));
    // affiche les fiches qui vérifient la recherche actuelle
    Afficher_Fiches(result);
    // on réinitialise les suggestions
    let suggestion = '';
    // on ajoute les suggestions qui vérifient les filtres actuels
    if(input!=''){
    result.forEach(item => {
        // vérifie que l'oeuvre proposée vérifie les filtres actuels
        if (Is_Visible(item.tags)){
            suggestion += `<div class="suggestion"><a href="${item.link}">${item.title}</a></div>`;
        }
    })
    };
    document.getElementById('suggestions').innerHTML = suggestion;
});

/**  FILTERS PART  **/


filter_tags.forEach(btn => {
    btn.addEventListener('click', () => {
        // on récupère le filtre sélectionné
        let filter = btn.innerText;
        // on ajoute le filtre à la liste des filtres actuels
        if (filters.includes(filter) === false){
            filters.push(filter);
            // si le filtre 'Tous' est présent, on le supprime
            // (on ne peut pas avoir 'Tous' et un autre filtre en même temps)
            if (filters.includes('Tous')){
                filters.splice(filters.indexOf('Tous'), 1);
            }
        }
        // on supprime le filtre de la liste des filtres actuels
        else{
            filters.splice(filters.indexOf(filter), 1);
            // s'il n'y a aucun filtre, on réinitialise le filtre à 'Tous'
            if (filters.length == 0){
                filters.push('Tous');
            }
        }
        // on change le texte du bouton
        btn.classList.toggle('selected');

        // on oublie pas de prendre en compte la recherche actuelle (l'input de Search)
        const input = SearchBar.value.toLowerCase();
        const result = data.filter(item => item.title.toLowerCase().includes(input));
        // on affiche les fiches qui vérifient les filtres actuels
        bulles = ''
        filters.forEach(filter => {
            if (filter != 'Tous'){
            bulles += `<div class="bulle">${filter}<div class="delete"><i class="fa-solid fa-xmark"></i></div></div>`;
            }
        });
        document.querySelector('.bulles').innerHTML = bulles;
        Afficher_Fiches(result);
        bulle_containter = document.querySelectorAll('.bulle');
        bulle_containter.forEach(bulle => {
            bulle.addEventListener('click', () => {
                filters.splice(filters.indexOf(bulle.innerText), 1);
                // s'il n'y a aucun filtre, on réinitialise le filtre à 'Tous'
                if (filters.length == 0){
                    filters.push('Tous');
                }
                bulle.remove();
                // on réactualise les fiches avec le nouveau filtre
                Afficher_Fiches(result);
                // Vconsole.log(bulle.innerText);
                console.log(bulle.innerText)
                // on récupère la liste des filtres selectionnés 
                selected_filters = document.querySelectorAll('.selected');
                // On parcours la liste pour trouver le filtre qui correspond à la bulle
                selected_filters.forEach(selected_filter => {
                    if (selected_filter.innerText == bulle.innerText){
                        // on enlève la classe 'selected' au filtre en question
                        selected_filter.classList.remove('selected');
                    }
                })
            })
        })
    })
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


/**  FICHES CATALOGUE PART  **/

function Is_Visible(tags){
    let bool = true;
    // On vérifie que chaque filtre est dans les tags de la fiche
    filters.forEach(filter => {
        // si c'est pas le cas, on ne l'affiche pas
        if (tags.includes(filter) === false){
            bool = false;
        }
        // si le filtre est 'Tous', on affiche toutes les fiches
        if (filters.includes('Tous')){
            bool = true;
        }
    })
    return bool;
}

function Afficher_Fiches(result) {
    // réinitialisation du container
    fiche_container = '';
    result.forEach(item => {
        let is_visible = Is_Visible(item.tags);
        // on ajoute les fiches qui vérifient les filtres actuels
        if (is_visible){
            fiche_container += `
        <div class="fiche">
            <div class="image">
                <img src="/images/catalogue/${item.filename}" alt="${item.title}">
            </div>
            <div class="fiche-content">
                <div class="title">${item.title}</div>
                <div class="author">${item.author}</div>
                <div class="description">${item.description}</div>
            </div>
        </div>
            `;
        }
    })
    // Affichage si aucune oeuvre ne vérifie les filtres actuels
    if (fiche_container == ''){
        fiche_container = '<div class="no-result">Aucun résultat</div>';
    }
    document.querySelector('.fiche-container').innerHTML = fiche_container;
}

// Affichage des fiches au chargement de la page
Afficher_Fiches(data)

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
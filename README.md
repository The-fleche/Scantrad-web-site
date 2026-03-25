# 📖 Sumi - Scantrad Platform (Archive 2023)


## 🌟 Présentation du Projet
Ce projet est une archive de la plateforme **Sumi**, un site de lecture de scantrad (mangas/manhwas) développé en **2023** qui n'a finalement jamais vu le jour, d'où le fait que ce projet ne soit pas abouti. 

C'était une aventure humaine et technique menée avec un groupe d'amis. Le projet divisait l'équipe en deux pôles :
1.  **L'équipe de Production :** En charge de la traduction, du nettoyage (clean) et de l'édition des chapitres dont je faisais aussi partie
2.  **L'équipe Web :** En charge de la création du site "from scratch" pour héberger nos sorties. (Moi et un autre collaborateur)


## 🛠️ Apprentissages Techniques (Stack 2023)
À l'époque, j'apprenais les fondamentaux du Web. Ce projet m'a permis de mettre en pratique :

### 🔹 Vanilla JavaScript (Manipulation du DOM)
- **Système de Recherche :** Implémentation d'une barre de recherche dynamique avec suggestions en temps réel.
- **Filtres Dynamiques :** Gestion de tags (Manhwa, Manga, En cours) pour filtrer les œuvres sans recharger la page.
- **Hero Slider Custom :** Création d'un carrousel à défilement infini (avec système de clones pour une transition fluide).
- **Rendu Dynamique :** Injection de contenu HTML via JavaScript à partir d'un tableau d'objets.

### 🔹 CSS & Design
- **Mise en page :** Utilisation intensive de **Flexbox** et **CSS Grid** pour le catalogue.
- **Responsive :** Adaptation des fiches de lecture pour les petits écrans (Media Queries).
- **Reset :** Utilisation de `normalize.css` pour assurer la compatibilité entre les navigateurs.


## 📂 Structure du Repo (pas très bien organisée)
- `index.html` : Page d'accueil avec le slider et les nouveautés.
- `/test_en_cours/catalogue.html` : Système de recherche et catalogue complet.
- `/test_en_cours/script.js` / `/test_en_cours/ndex.js` : Logique de filtrage, slider et interactivité.
- `css/style.css` / `css/oeuvre.css` : Design global et fiches spécifiques aux œuvres.


## 🧠 Conclusion Personnelle
Ce projet représente mes premiers pas dans le développement. Au-delà du code, il m'a appris à :
* **Gérer un projet en équipe :** Aligner le design web avec les besoins de l'équipe de production.
* **Résoudre des problèmes complexes :** Créer un slider fonctionnel uniquement en JavaScript sans utiliser de bibliothèque externe (comme Swiper.js).
* **Structurer la donnée :** Organiser les informations des mangas pour qu'elles soient facilement exploitables par le script.


## 🚀 Comment tester ?
1. Clone le dépôt.
2. Ouvre `index.html` via l'extension Live Server de VS Code.

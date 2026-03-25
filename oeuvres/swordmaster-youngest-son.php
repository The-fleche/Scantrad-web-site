<!DOCTYPE html>
<html lang="fr-fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/oeuvre.css">
    <link rel="stylesheet" href="css/normalize.css">
    <script src="https://kit.fontawesome.com/cb16e5e1da.js" crossorigin="anonymous"></script>


    <?php
    $name = "Swordmaster\'s Youngest Son";
    $nom = str_replace("\\", "", $name);

    ?>

    <title>
        <?php echo $nom ?> Description
    </title>
</head>

<body>

    <?php
    $mysqli = new mysqli("localhost", "root", "", "sumibdd");

    $query = 'SELECT * FROM oeuvre WHERE nom="$name"';

    $results = mysqli_query($mysqli, $query);
    $res = mysqli_fetch_assoc($results);

    $dateQuery = 'SELECT * FROM chapitres JOIN oeuvre ON oeuvre.id=chapitres.idOeuvre WHERE oeuvre.nom="$name" ORDER BY numChap DESC';
    $resultsDate = mysqli_query($mysqli, $dateQuery);
    $resDate = mysqli_fetch_assoc($resultsDate);
    ?>


    <section class="top">
        <div class="SearchBox">
            <input type="search" placeholder="Rechercher" id="Search">
            <a class="closeSearch">&times;</a>
        </div>

        <div class="links">

            <ul>
                <a href="/index.html" id="logo"><img src="/images/logo.jpg" alt="Logo"></a>
                <li><a href="/test en cours/catalogue.html"><i class="fa-solid fa-book-open"></i> Catalogue</a></li>
                <li><a href="#"><i class="fa-solid fa-swatchbook"></i> Genres</a></li>
                <li><a href="#" class="search_btn"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                <li>
                    <div id="mySideBar" class="sidebar">
                        <div class="account-access">
                            <a class="account" id="login" href="#"><i class="fa-solid fa-lock-open"></i></a>
                            <a class="account" id="register" href="#"><i
                                    class="fa-solid fa-arrow-right-to-bracket"></i></a>
                        </div>
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav();">&times;</a>
                        <div class="sidelinks">
                            <a href="/index.html">Accueil</a>
                            <a href="/test en cours/catalogue.html">Catalogue</a>
                            <a href="#">Genres</a>
                            <a href="#">Historique</a>
                            <a href="#">Aide</a>
                            <a href="#">Nous contacter</a>
                        </div> <!-- .sidelinks -->
                    </div> <!-- .sidebar -->

                    <div id="main">
                        <button class="openbtn" onclick="openNav();"><i class="fa-solid fa-bars"></i></button>
                    </div> <!-- #main -->
                </li>
            </ul>
        </div> <!-- .links -->

        <hr>
        <div class="nav">
            <li><a href="#">
                    <h2>Novel</h2>
                </a></li>
            <li><a href="#">
                    <h2>Manga</h2>
                </a></li>
            <li><a href="#">
                    <h2>Webtoon</h2>
                </a></li>
        </div><!-- .nav -->
        <hr>
    </section> <!-- .top -->

    <section class="main">
        <div class="pub"></div> <!--.pub-->
        <div class="contain">
            <div class="artwork">

                <div class="banner">
                    <img src="../images/banners/<?php echo ($nom); ?> banner.jpg" alt="<?php echo ($nom); ?> Banner">
                </div> <!--.banner-->
                <div class="image">
                    <img src="../images/fiches/<?php echo ($nom); ?>.jpg" alt="<?php echo ($nom); ?> image">
                </div> <!--.image-->


                <div class="artwork-infos">
                    <div class="public">

                        <div class="bookmark">Bookmark <i class="fa-solid fa-bookmark small"></i></div> <!--.bookmark-->
                        <div class="rate"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                class="fa-regular fa-star"></i></div> <!--.rate-->
                        <div class="status">Status:
                            <?php echo ($res['status']); ?>
                        </div> <!--.status-->

                    </div> <!--.public-->

                    <div class="info">
                        <div class="title"><u>
                                <?php echo ($nom); ?>
                            </u></div> <!--.title-->
                        <div class="synopsis">
                            <h4 class="synopsis-title"><u>Synopsis</u></h4>
                            <p>
                                <?php echo ($res['synopsis']); ?>
                            </p>
                        </div> <!--.synopsis-->

                        <div class="infos">
                            <div class="author"><u>Auteur</u>
                                <p>
                                    <?php echo ($res['auteur']); ?>
                                </p>
                            </div>
                            <div class="artist"><u>Artiste</u>
                                <p>
                                    <?php echo ($res['artiste']); ?>
                                </p>
                            </div>
                            <div class="last-update"><u>Dernière sortie</u>
                                <p>
                                    <?php echo (date('d/m/Y', strtotime($resDate['dateSortie']))); ?>
                                </p>
                            </div>
                            <div class="type"><u>Type</u>
                                <p>
                                    <?php echo ($res['type']); ?>
                                </p>
                            </div>
                        </div> <!--.infos-->

                        <h3>Genre</h3>
                        <div class="genres">

                            <?php

                            $queryGenre = 'SELECT * FROM genres JOIN oeuvre ON oeuvre.id=genres.idOeuvre WHERE nom="$name" ORDER BY value ASC';
                            $resGenre = mysqli_query($mysqli, $queryGenre);
                            while ($rowGenre = mysqli_fetch_assoc($resGenre)) {
                                echo (
                                    "<div class='genre'>" . $rowGenre['value'] . "</div>"
                                );
                            }

                            ?>
                        </div> <!--.genres-->

                    </div> <!--.info-->
                </div> <!--.artwork-infos-->


            </div> <!--.artwork-->

            <div class="large-pub"></div> <!--.large-pub-->

            <div class="chapters">
                <div class="title">
                    <?php echo ($res['nom']); ?>
                </div> <!--.title-->
                <div class="chapter-container">

                    <div class="chap-buttons">
                        <div class="first-chap">
                            <h3>Premier chapitre</h3>
                            <?php
                            $queryFirstChapter = 'SELECT numChap FROM chapitres JOIN oeuvre ON oeuvre.id=chapitres.idOeuvre WHERE nom="$name" ORDER BY numChap ASC LIMIT 1';
                            $resFirstChap = mysqli_query($mysqli, $queryFirstChapter);
                            $resultFirstChap = mysqli_fetch_assoc($resFirstChap);
                            ?>
                            <h2>Chapitre
                                <?php echo ($resultFirstChap['numChap']); ?>
                            </h2>
                        </div> <!--.first-chap-->
                        <div class="last-chap">
                            <h3>Dernier chapitre</h3>

                            <?php
                            $queryLastChapter = 'SELECT numChap FROM chapitres JOIN oeuvre ON oeuvre.id=chapitres.idOeuvre WHERE nom="$name" ORDER BY numChap DESC LIMIT 1';
                            $resLastChap = mysqli_query($mysqli, $queryLastChapter);
                            $resultLastChap = mysqli_fetch_assoc($resLastChap);
                            ?>
                            <h2>Chapitre
                                <?php echo $resultLastChap['numChap']; ?>
                            </h2>
                        </div> <!--.last-chap-->

                    </div> <!--.chap-buttons-->

                    <div class="chap-list">



                        <div class="scroll">

                            <!-- partie à copier coller pour chaque chapitre avec la bdd -->
                            <?php
                            $queryChap = 'SELECT * FROM chapitres JOIN oeuvre ON oeuvre.id=chapitres.idOeuvre WHERE nom="$name" ORDER BY numChap DESC';
                            $resChap = mysqli_query($mysqli, $queryChap);
                            while ($chap = mysqli_fetch_assoc($resChap)) {
                                echo (
                                    "<div class='chap'>
                                            <p>Chapitre " . $chap['numChap'] . "</p>
                                            <p>Date: " . date('d/m/Y', strtotime($chap['dateSortie'])) . "</p>
                                        </div>"
                                );
                            }
                            ?>

                        </div> <!--.scroll-->

                    </div> <!--.chap-list-->

                </div> <!--.chapter-container-->
            </div> <!--.chapters-->
        </div> <!--.container-->


    </section> <!--.main-->



    <hr>

    <section class="footer">

        <div class="footer-link">
            <ul>
                <li><a href="https://discord.gg/EMFv5DN6zD" target="_blank">Discord</a></li>
                <li><a href="#">Twitter</a></li>
                <li class="max"><a href="#">À propos de nous</a></li>
                <li class="max"><a href="#">Contact</a></li>
                <li class="max"><a href="#">Politique de Confidentialité</a></li>
                <li class="max"><a href="#">
                        <acr title="Conditions Générales d'Utilisation">C.G.U</acr>
                    </a></li>
            </ul>
        </div> <!-- .footer-link -->
        <p> Sumi &copy; 2023 - Tous Droits Réservés </p>

    </section> <!-- .footer -->

    <script type="text/javascript" src="../js/index.js"></script>
</body>

</html>
</head>

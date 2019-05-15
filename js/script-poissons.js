$('#boutonChangerPoissons').click(function () {
    if ($('#boutonChangerPoissons').html() == "Voir d'autres poissons"){
        $('#boutonChangerPoissons').html("Retour aux autres poissons");

        // Changement des titres
        $('#titreBrochet').html("Le maskinongé");
        $('#titreTruite').html("La perchaude");
        $('#titreAchigan').html("La barbotte");
        $('#titreDore').html("Le crapet-soleil");

        // Changement des images
        $('#imageBrochet').attr("src", "img/maskinonge.jpg");
        $('#imageTruite').attr("src", "img/perchaude.jpg");
        $('#imageAchigan').attr("src", "img/barbotte.jpg");
        $('#imageDore').attr("src", "img/crapet-soleil.jpg");
    }

    else{
        $('#boutonChangerPoissons').html("Voir d'autres poissons");

        // Changement des titres
        $('#titreBrochet').html("Le brochet");
        $('#titreTruite').html("La truite");
        $('#titreAchigan').html("L'achigan");
        $('#titreDore').html("Le doré");

        // Changement des images
        $('#imageBrochet').attr("src", "img/grand-brochet.jpg");
        $('#imageTruite').attr("src", "img/truite-arc-ciel.jpg");
        $('#imageAchigan').attr("src", "img/achigan-petite-bouche.jpg");
        $('#imageDore').attr("src", "img/dore-jaune.jpg");
    }
});
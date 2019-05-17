var premierHover = true;

$('.portfolio').hover(function () {
    if (premierHover){
        $(this).animate({'zoom' : "150%"}, 400);
        premierHover = false;
    }
    else if (!premierHover) {
        $(this).animate({'zoom' : "100%"}, 400);
        premierHover = true;
    }
});
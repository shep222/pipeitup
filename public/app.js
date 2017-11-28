function showMeTheMoney(info){
    var x = info.id
    let y = $(`#${x}`)
    y.children().closest('span').addClass('showIt');
}

function closePopup(stuff) {
    event.stopPropagation();
   stuff.classList.remove('showIt');

    
}


$(document).ready(function() {
    $(".rollTo").click(function() {
        var myLink = $(this).find('a').attr('href')
        $('html, body').animate({
            scrollTop: $(myLink).offset().top
        }, 1000);
    });
});

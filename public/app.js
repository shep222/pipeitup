$(document).ready(function() {
    $(".rollTo").click(function() {
        var myLink = $(this).find('a').attr('href')
        console.log(myLink)
        $('html, body').animate({
            scrollTop: $(myLink).offset().top
        }, 1000);
        console.log(this);
    });
});

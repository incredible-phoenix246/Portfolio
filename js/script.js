$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky")
        }
    });

    //toggle bar
    $('.menu-btn').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });


});
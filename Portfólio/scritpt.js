$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass('habilidades');
                }else{
                    $('.nav').removeClass('habilidades');
                }
    });


    /* menu de alternância / nav scritp */
    $('.menu-btn').click(function(){
        $('.nav .menu').toggleeClass("ativa");
        $('.menu-btn i').toggleeClass("ativa");
    });

});
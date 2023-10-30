$(document).ready(function(){
    $('#fadeOut').click(function(){
        $('#caja').fadeOut(3000, function(){
             $('#fadeOut').text('Termino la revision')
        });
    })

    $('#fadeIn').click(function(){
        $('#caja').fadeIn(3000,);
    })

    $('#fadeTog').click(function(){
        $('#caja').fadeToggle(1000,);
    })
});
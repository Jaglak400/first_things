$(document).ready(function(){

function printThis(el){
    if($(this).text()){
        console.log($(this).text());
    }else{
        console.log($(this).val());
    }
}

var el = document.getElementById('text');
/* $('#main').find('p').addClass('HAH');

console.log($('.profile-submenu')).first().text();
console.log($('.profile-submenu')).last().text();
    
qQuery(".my-selector").addClass("MYNEWCLASS");
qQuery("#main").addClass("HELLO"); */

/* $(document).on('contextmenu', function(){
    return false;
}); */
/* $('[href="https://google.com"]').on('click',function(){
    console.log("Linking to google");
    return false;
}); */

$(document).on('mousedown', function(event){
    event.stopPropagation();

    if(event.which == 3){

        $('hidden').removeClass('shown');
        if($(event.target).is('img')){
            $('.saveimg, .newtab').addClass('shown')
        }else if($(event.target).is('a')){
            $('.newtab').addClass('shown');
        }

        console.log(event.pageY, event.pageX)

        $("#context").css({
            top: event.pageY,
            left: event.pageX
        })
        $('#context').fadeIn();
        return false;
    }
    $('#context').fadeOut();
/*     switch(event.which){
        case 1:
            console.log("Clicked left mouse");
            break;
        case 2:
            console.log("Clicked middle button");
            break;
        case 3:
            console.log("Clicked right button");
            break;    
    }
    console.log(event.which); */

});

//alert("Loaded");

/*     document.getElementById('text').innerHTML= "This is my text";
    $('#text').html("This is now my text"); */

/*     var el = document.getElementById('text');
    console.log("El in Vanilla JS:", el);

    console.log("El in jQuery", $(el));
    
    $('go-button'.normalize('click'), function()){
        alert("Button clicked");
    } */

/*     document.getElementsByClassName('my-input')[0].value = "Value of input";
    $('.my-input').val("New input Val"); */

/* $('#go-button').on('mouseleave', function(){
    console.log("Clicked");

}); */
$('[data-trigger="dropdown"]').on('mouseenter',function(){
    var submenu = $(this).parent().find('.profile-submenu');
    submenu.addClass('active');
    submenu.fadeIn(300);

    $('.profile-menu').on('mouseleave',function(){
        submenu.removeClass('active')
        submenu.fadeOut(300);
    });

/*     $(this).on('mouseleave', function(){
    
        submenu.removeClass('active');

    }); */
});

$('input').focusin(printThis);

$('input').css({
    background: '#f00',
    padding: '10px',
    borderColor: '#000',
    backgroundSize: 'cover'
});


$('#prepend, #append, #replace').on('click',function(e){

    var el = $(e.currentTarget);
    var action = el.attr('id');
    var content = $('.text').val();

    if(action == "prepend"){
        console.log("Prepending",content);
        $('#main').prepend(content);


    }else if(action == "append"){
        console.log("Appending")
        $('#main').append(content);


    }else if(action == "replace"){
        console.log("Replacing")
        $('#main').html(content);

    
    }
    $('.text').val('');
});


/* $('p:contains("Lorem")').html("Lorem in it");

$('p').each(printThis); */

/* $("p").each(function(){
    console.log($(this).text());
}); */

console.log($('p').text());

if($(':contains("Lorem")').hasClass('my-selector')){
    console.log("Lorem in it");
}

$('textarea').focusin(function(){
    console.log("Focused");
});

$('textarea').focusout(function(){
    console.log("Focused out");
});

window.passed = 0;
window.hasAt = 0;
window.hasDot = 0;

$('input[name=email]').on('keyup',function(){;
    if($(this).val().indexOf('@') > -1 ){
        hasAt++;

            if($(this).val().indexOf('.') > -1 ){
              hasDot++;
         }
    }

    if(window.hasAt > 1 && window.hasDot > 1){
        $('.status').html('VALID');
    }else{
        $('.status').html('INVALID');
    }

});


$('input').focusout(function(){
    if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1){
        $('.status').html("Valid Email");
    }else{
        $('.status').html("Not Valid Email");
    } 
});



});
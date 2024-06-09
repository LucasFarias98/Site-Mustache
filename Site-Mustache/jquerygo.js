function trocarImagemtwit(){
  $(this).attr("src",atributoTwitterhover);
}
function voltarImagemtwit(){
     $(this).attr("src",atributoTwitter);
}
function trocarImagemface(){
   $(this).attr("src",atributoFacehover);
}
function voltarImagemface(){
 $(this).attr("src",atributoFace);
}
function trocarImagemgoogle(){
  $(this).attr("src",atributoGooglehover);
}
function voltarImagemgoogle(){
     $(this).attr("src",atributoGoogle);
}
function trocarImagempinterest(){
  $(this).attr("src",atributoPinteresthover);
}
function voltarImagempinterest(){
     $(this).attr("src",atributoPinterest);
}
$('.twitter').mouseenter(trocarImagemtwit);
$('.twitter').mouseleave(voltarImagemtwit);
$('.facebook').mouseenter(trocarImagemface);
$('.facebook').mouseleave(voltarImagemface);
$('.google').mouseenter(trocarImagemgoogle);
$('.google').mouseleave(voltarImagemgoogle);
$('.pinterest').mouseenter(trocarImagempinterest);
$('.pinterest').mouseleave(voltarImagempinterest);

var atributoTwitter = "css/images/icons/twitter.jpg";
var atributoFace = "css/images/icons/facebook.jpg"; 
var atributoGoogle  = "css/images/icons/google.jpg"; 
var atributoPinterest = "css/images/icons/pinterest.jpg"; 
var atributoTwitterhover = "css/images/icons/twitterhover.jpg";
var atributoFacehover = "css/images/icons/facehover.jpg";
var atributoGooglehover = "css/images/icons/googlehover.jpg";
var atributoPinteresthover = "css/images/icons/pinteresthover.jpg";
/*----------------------------------------------------------------------------------------*/
function efeitoLink(){
    $(this).removeClass('link');
    $(this).addClass('efeitoLink');
}
function efeitovoltarLink(){
    $(this).removeClass('efeitoLink');
    $(this).addClass('link');
}
$('.link').mouseenter(efeitoLink);
$('.link').mouseleave(efeitovoltarLink);

function efeitoContato(){
  $(this).removeClass('linkContato');
  $(this).addClass('efeitoContato');
}

function efeitoVoltar(){
 $(this).addClass('linkContato');
  $(this).removeClass('efeitoContato');
}


$('.linkContato').mouseenter(efeitoContato);
$('.linkContato').mouseleave(efeitoVoltar);



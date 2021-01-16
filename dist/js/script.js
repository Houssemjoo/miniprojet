
$(document).ready(function() {


})


$(function(){
    $(".form-control").focus(function(){
        $(this).css('backgroundColor', '#FFFFCC');
    });
    $(".form-control").focusout(function(){
        $(this).css('backgroundColor', '#FFFFFF');
    });
    $("form").submit(function(event){
        event.preventDefault(); // annuler l'action d'envoi vers le serveur
        let form_error = true ;
        $("#success-msg").addClass('hide');
        const re = new RegExp ("^[A-Za-z]{3,}$");
        const nom = $("#nom").val() ; 
        if(!re.test(nom)) {
            form_error=false;
            $("#nommsg").removeClass('hide');
            $("#nommsg").html('<div class="alert alert-danger alert-dismissible"> <button type="button" class="close" data-dismiss="alert">&times;</button> le champs nom doit contenir que des caractères.</div>');
        }
        else { $("#nommsg").addClass('hide') ;}

        const prenom = $("#prenom").val() ; 
        if(!re.test(prenom)) {
            form_error=false;
            $("#prenommsg").removeClass('hide');
            $("#prenommsg").html('<div class="alert alert-danger alert-dismissible"> <button type="button" class="close" data-dismiss="alert">&times;</button> le champs Prénom doit contenir que des caractères.</div>');
        } else { $("#prenommsg").addClass('hide') ; }

        const retel = new RegExp("^[0-9]{8,}$");
        const num = $("#num").val() ;
        if (!retel.test(num)) {
            form_error=false;
            $("#nummsg").removeClass('hide');
            $("#nummsg").html('<div class="alert alert-danger alert-dismissible"> <button type="button" class="close" data-dismiss="alert">&times;</button>Ce champ doint contenir que des numéros</div>');
        }  else { $("#nummsg").addClass('hide') ; }

        const remail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const email = $("#email").val() ;
       if (!remail.test(email)) {
            form_error=false;
            $("#emailmsg").removeClass('hide');
            $("#emailmsg").html('<div class="alert alert-danger alert-dismissible"> <button type="button" class="close" data-dismiss="alert">&times;</button>Réspectez la structure d\'e-mail exemple@exemple.lettre</div>');
       } else { $("#emailmsg").addClass('hide') ; }
    
        
        if($("#pwd").val() != $("#confirm").val()){
            
            form_error=false;
            $("#emailmsg").removeClass('hide');
            $("#msg").html('<div class="alert alert-danger alert-dismissible"> <button type="button" class="close" data-dismiss="alert">&times;</button> Erreur de confirmation de mot de passe.</div>');
        } else { $("#msg").addClass('hide') ;}

        if (form_error) {
            $("#success-msg").removeClass('hide');
            $("#success-msg").html(`<div class="alert alert-success alert-dismissible mt-2"> <button type="button" class="close" data-dismiss="alert">&times;</button> Bienvenue  <strong> ${nom} ${prenom} </strong> ! <br> *** Voilà vos cordonnées ci dessous *** <br> Votre Nom et Prénom : <strong> ${nom} ${prenom} </strong> <br> Numéro :  <strong>${num}</strong> <br> Email : <strong> ${email} </strong> </div>`);
            
            $("#nom").val("") ;
            $("#prenom").val("") ;
            $("#num").val("") ;
            $("#email").val("") ;
            $("#pwd").val("") ;
            $("#confirm").val("") ;
        }

    });

    $("#rs").click(function(){
        $("#nommsg").addClass('hide') ;
        $("#prenommsg").addClass('hide') ; 
        $("#nummsg").addClass('hide') ;
        $("#emailmsg").addClass('hide') ;
        $("#msg").addClass('hide') ; 
        $("#success-msg").addClass('hide');
    });
});


$(function(){
    $(".dr").hide();
    $("a").click(function(){
        i=$(this).attr("id");
        $("#sm"+i).slideToggle();
    });
});

window.onscroll = function () { myFunction(); };
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


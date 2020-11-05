//Creo navbar con dropdown menu al click della voce menu

$(document).ready(function () {
  var linkNav = $("li.dropdown");

  //evento click
  linkNav.click(function () {
    //rimuovo classe a tutti
    $(".menu-shown").removeClass("menu-shown");
    //aggiungo a tutti i dropdown-menu la classe menu-shown
    $(this).find(".dropdown-menu").addClass("menu-shown");
    //faccio sparire tutti gli eventuali dropdown-menu aperti
    $(".dropdown-menu").not(".menu-shown").fadeOut();
    //faccio il fadetoggle dei dropdown-menu
    $(this).find(".dropdown-menu").fadeToggle();
  });

  //evento mouseleave
  $(".dropdown-menu").mouseleave(function () {
    $(".dropdown-menu").fadeOut();
  });
});

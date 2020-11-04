//Creo navbar con dropdown menu al click della voce menu

$(document).ready(function () {
  var linkNav = $("li.dropdown");

  //evento click
  linkNav.click(function () {
    //rimuovo classe a tutti
    $(".menu-shown").removeClass("menu-shown");
    //aggiungo a tutti
    $(this).find(".dropdown-menu").addClass("menu-shown");

    $(".dropdown-menu").not(".menu-shown").fadeOut();
    $(this).find(".dropdown-menu").fadeToggle();
  });
});

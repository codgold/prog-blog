$(function()
{
  $( ".logo" ).click(function()
  {
    var animations = ["wobble", "rubberBand", "swing", "tada", "jello"];
    var randomNum = Math.ceil(Math.random() * 5) -1;
    var el = $(".logo");
    el.removeClass("bounceIn");
    el.addClass(animations[randomNum]);
    setTimeout(function (){el.removeClass(animations[randomNum]);},2000);
  });

  var open = false;
  $("#nav-hamburger").click(function()
  {
    if(open)
    {
      $("#nav-hamburger").addClass("fa-bars");
      $("#nav-hamburger").removeClass("fa-remove");
      $(".nav-mobile-inner").removeClass("nav-mobile-inner-visible");
      $(".nav-mobile-inner").addClass("nav-mobile-inner-invisible")
      open = false;
    }
    else
    {
      $("#nav-hamburger").addClass("fa-remove");
      $("#nav-hamburger").removeClass("fa-bars");
      $(".nav-mobile-inner").removeClass("nav-mobile-inner-invisible");
      $(".nav-mobile-inner").addClass("nav-mobile-inner-visible");
      open = true;
    }
  });

  $("#togglework").click(function()
  {
    $("#togglework").removeClass("togglebuttoninactive").addClass("togglebuttonactive");
    $("#togglepersonal").addClass("togglebuttoninactive").removeClass("togglebuttonactive");

    $(".personal").removeClass("personalprojectsactive").addClass("personalprojectsinactive");
    $(".work").removeClass("workprojectsinactive").addClass("workprojectsactive");

  });

  $("#togglepersonal").click(function()
  {
    $("#togglepersonal").removeClass("togglebuttoninactive").addClass("togglebuttonactive");
    $("#togglework").addClass("togglebuttoninactive").removeClass("togglebuttonactive");
    $(".work").removeClass("workprojectsactive").addClass("workprojectsinactive");
    $(".personal").removeClass("personalprojectsinactive").addClass("personalprojectsactive");

  });
});

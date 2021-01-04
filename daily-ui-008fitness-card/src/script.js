$("#right-btn i").click(function(){
  $(this).toggleClass("active");
});

$(".btn").click(function(){   $(this).children(".checkmark").show();        $(this).siblings().children(".checkmark").hide();
$(this).children("h2").addClass('black');
$(this).siblings().children("h2").removeClass('black');
});
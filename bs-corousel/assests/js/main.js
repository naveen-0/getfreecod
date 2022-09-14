$(document).ready(function(){  
    if ($(window).width() <=767 ) {
      var s = $("div#ktestimonials2 .carousel-inner .carousel-item .kcol2").unwrap();
      $("#mdata").append(s);
      $("#mdata .kcol2").addClass("carousel-item");
      $("#mdata .kcol2:first-child").addClass("active");
      $("#mdata .kcol2").removeClass("col-12 col-md-4 col-lg-4 kcol2");
     }
  });

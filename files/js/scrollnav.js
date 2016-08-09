/*http://www.bootply.com/tofanelli/QBMBkg2Ujr#*/
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#top');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-inverse").css('background', '-moz-linear-gradient(top,  rgba(238,238,238,0.8) 33%, rgba(238,238,238,0.50) 60%, rgba(238,238,238,0) 90%)');
		  $(".navbar-inverse").css('background', '-webkit-linear-gradient(top,  rgba(238,238,238,0.8) 33%,rgba(238,238,238,0.50) 60%,rgba(238,238,238,0) 90%)');
		  $(".navbar-inverse").css('background', 'linear-gradient(to bottom,  rgba(238,238,238,0.8) 33%,rgba(238,238,238,0.5) 60%,rgba(238,238,238,0) 90%)');
		  $(".navbar-inverse").css('border-bottom-width', '0px');
		  $(".navbar-inverse").css('border-style', 'solid');
	  }
   });
    }
});
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#mid');
   var offset = startchange.offset(); 
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-inverse").css('background', '#ffffff');
		  $(".navbar-inverse").css('border-bottom-width', '2px');
	  }
   });
    }
});

$(document).ready(function(){
$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
  $(".navbar-inverse").css('background', '#ffffff');
  $(".navbar-inverse").css('border-bottom-width', '2px');
  $(".navbar-inverse").css('border-style', 'solid');	
});
});

$(document).ready(function(){
$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function () {
  $(".navbar-inverse").css('background', '-moz-linear-gradient(top,  rgba(238,238,238,0.8) 33%, rgba(238,238,238,0.5) 60%, rgba(238,238,238,0) 90%)');
  $(".navbar-inverse").css('background', '-webkit-linear-gradient(top,  rgba(238,238,238,0.8) 33%,rgba(238,238,238,0.5) 60%,rgba(238,238,238,0) 90%)');
  $(".navbar-inverse").css('background', 'linear-gradient(to bottom,  rgba(238,238,238,0.8) 33%,rgba(238,238,238,0.5) 60%,rgba(238,238,238,0) 90%)');
  $(".navbar-inverse").css('border-bottom-width', '0px');	
});
});

function backToTop() {
	  $(".navbar-inverse").css('background', '-moz-linear-gradient(top,  rgba(238,238,238,0.8) 33%, rgba(238,238,238,0.5) 60%, rgba(238,238,238,0) 90%)');
  $(".navbar-inverse").css('background', '-webkit-linear-gradient(top,  rgba(238,238,238,0.8) 33%,rgba(238,238,238,0.5) 60%,rgba(238,238,238,0) 90%)');
  $(".navbar-inverse").css('background', 'linear-gradient(to bottom,  rgba(238,238,238,0.8) 33%,rgba(238,238,238,0.5) 60%,rgba(238,238,238,0) 90%)');
  $(".navbar-inverse").css('border-bottom-width', '0px');	
};
$(document).ready(function() {

if ((screen.width>600)) {
    // if screen size is 1025px wide or larger
    $(".media-object").hide(); // you can also use $(".yourClass").hide();
}
elseif ((screen.width<=600))  {
    // if screen size width is less than 1024px
    $(".media-object").show(); // here you can also use show();
}
});
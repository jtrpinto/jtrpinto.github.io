
function seefield(field){
  var divsToHide = document.getElementsByClassName('areas'); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
  document.getElementById(field).style.display = 'block';
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function handleMenuBox(){
  if (document.getElementById('button-links-inner').style.display == "block"){
    document.getElementById('button-links').style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById('button-links-fa').style.color = "#4397d8";
    document.getElementById('button-links-inner').style.display = "none";
  } else {
    document.getElementById('button-links').style.backgroundColor = "#4397d8";
    document.getElementById('button-links-fa').style.color = "#ffffff";
    document.getElementById('button-links-inner').style.display = "block";
  }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 75;
        if (distanceY > shrinkOn) {
            document.getElementById('totop-a').style.visibility = 'visible';
            document.getElementById('totop').style.opacity = 1;
        } else {
            document.getElementById('totop').style.opacity = 0;
            document.getElementById('totop-a').style.visibility = 'hidden';
        }
    });
}

window.onload = init();

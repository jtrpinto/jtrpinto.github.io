var msgIX = 0
var msgs = new Array(
  "signal processing.",
  "computer vision.",
  "data science.",
  "mobile apps.",
  "gui design.",
  "web development.",
  "sensors & electronics.",
  "biomedical engineering."
)

function displayMessage(milliseconds) {
  if(msgIX < msgs.length){
    if(document.getElementById != null) {
      var heading = document.getElementById("header-highlight")
      heading.firstChild.nodeValue = msgs[msgIX]
    }else{
      if(navigator.appName == "Microsoft Internet Explorer") {
        var heading = document.all.item("header-highlight")
        heading.innerText = msgs[msgIX]
      }
    }
    ++msgIX;
    window.setTimeout(function(){displayMessage(milliseconds);},milliseconds);

  }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300;
        if (distanceY > shrinkOn) {
            document.getElementById('top-bar').style.visibility = 'visible';
        } else {
            document.getElementById('top-bar').style.visibility = 'hidden';
        }
    });
}
window.onload = init();

var msgIX = 0
var msgs = new Array(
  "SIGNAL PROCESSING",
  "COMPUTER VISION",
  "DATA SCIENCE",
  "MOBILE APPS",
  "GUI DESIGN",
  "WEB DEVELOPMENT",
  "SENSORS & ELECTRONICS",
  "BIOMEDICAL ENGINEERING"
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



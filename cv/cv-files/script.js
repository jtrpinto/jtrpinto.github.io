var darkMode = 0;

var possibleHues = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345];
var numHues = possibleHues.length;
var colour = 'hsl(0, 0%, 0%)';
var darkColour = 'hsl(0, 0%, 0%)';
var weakColour = 'hsl(0, 0%, 0%)';

function randomColour() {
    var index = Math.floor(Math.random()*numHues);
    var hue = possibleHues[index];
    colour = 'hsl(' + hue + ', 80%, 50%)';
    darkColour = 'hsl(' + hue + ', 30%, 20%)';
    weakColour = 'hsl(' + hue +', 60%, 90%)';
}

function setToLight() {
    randomColour();
    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('page[size="A4"] {background: #ffffff;}');
    style.sheet.insertRule('.page-odd .left-column::before {background-color: #ffffffee;');
    style.sheet.insertRule('.page-even .right-column::before {background-color: #ffffffee;');
    style.sheet.insertRule('#logo-text path, #logo-text polygon {fill: #333333;}');
    style.sheet.insertRule('#logo-triangle {fill: ' + colour + ';}');
    style.sheet.insertRule('html {color: #222222;}');
    style.sheet.insertRule('.page-odd .section .title, .page-even .section .title {color: ' + colour + ';}');
    style.sheet.insertRule('.section .entry-subtitle {color: ' + colour + ';}');
    style.sheet.insertRule('.page-odd .section .title::before, .page-even .section .title::before {background-color: #cccccc;}');
    style.sheet.insertRule('.website-link span {color: ' + colour + ';}');
    style.sheet.insertRule('.item {background-color: ' + weakColour + ';}');
    style.sheet.insertRule('.smaller-section .title {color: ' + colour + ';}');
    style.sheet.insertRule('.smaller-column-content {color: #222222;}');
}

function setToDark() {
    randomColour();
    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('page[size="A4"] {background: #111111;}');
    style.sheet.insertRule('.page-odd .left-column::before {background-color: #111111ee;');
    style.sheet.insertRule('.page-even .right-column::before {background-color: #111111ee;');
    style.sheet.insertRule('#logo-text path, #logo-text polygon {fill: #eeeeee;}');
    style.sheet.insertRule('#logo-triangle {fill: ' + colour + ';}');
    style.sheet.insertRule('html {color: #eeeeee;}');
    style.sheet.insertRule('.page-odd .section .title, .page-even .section .title {color: ' + colour + ';}');
    style.sheet.insertRule('.section .entry-subtitle {color: ' + colour + ';}');
    style.sheet.insertRule('.page-odd .section .title::before, .page-even .section .title::before {background-color: #444444;}');
    style.sheet.insertRule('.website-link span {color: ' + colour + ';}');
    style.sheet.insertRule('.item {background-color: ' + darkColour + ';}');
    style.sheet.insertRule('.smaller-section .title {color: ' + colour + ';}');
    style.sheet.insertRule('.smaller-column-content {color: #eeeeee;}');
}

function toggleDarkMode() {
    if (darkMode) {
        setToLight();
        darkMode = 0;
    } else {
        setToDark();
        darkMode = 1;
    }
}

function changeColour() {
    if (darkMode) {
        setToDark();
        darkMode = 1;
    } else {
        setToLight();
        darkMode = 0;
    }
}

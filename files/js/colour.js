// Randomly selects a colour and paints the website

var possibleHues = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345];
var numHues = possibleHues.length;
var currentHueIdx = 0;

var strong_saturation = '90%';
var strong_lightness = '40%';
var weak_saturation = '40%';
var weak_lightness = '70%';
var gradient_transparent_alpha = '0.9';


function computeColours(hue) {
    var min_hue = hue - 40;
    if (min_hue < 0) {
        min_hue = 360 + min_hue;
    }
    var max_hue = hue + 40;
    if (max_hue > 360) {
        max_hue = 0 + (max_hue - 360);
    }

    var strong_colour = 'hsl(' + hue + ', ' + strong_saturation + ', ' + strong_lightness + ')';
    var weak_colour = 'hsl(' + hue + ', ' + weak_saturation + ', ' + weak_lightness + ')';

    var min_colour = 'hsl(' + min_hue + ', ' + strong_saturation + ', ' + strong_lightness + ')';
    var max_colour = 'hsl(' + max_hue + ', ' + strong_saturation + ', ' + strong_lightness + ')';
    var strong_colour_hsla = 'hsla(' + hue + ', ' + strong_saturation + ', ' + strong_lightness + ', ' + gradient_transparent_alpha + ')';
    var min_colour_hsla = 'hsla(' + min_hue + ', ' + strong_saturation + ', ' + strong_lightness + ', ' + gradient_transparent_alpha + ')';
    var max_colour_hsla = 'hsla(' + max_hue + ', ' + strong_saturation + ', ' + strong_lightness + ', ' + gradient_transparent_alpha + ')';

    var gradient_opaque = 'linear-gradient(135deg, ' + min_colour + ' 0%, ' + strong_colour + ' 50%, '+ max_colour + ' 100%)';
    var gradient_transparent = 'linear-gradient(135deg, ' + min_colour_hsla + ' 0%, ' + strong_colour_hsla + ' 50%, '+ max_colour_hsla + ' 100%)';
    
    return [hue, strong_colour, weak_colour, gradient_opaque, gradient_transparent];
}

function setColours(colours) {
    hue = colours[0];
    strong_colour = colours[1];
    weak_colour = colours[2];
    gradient_opaque = colours[3];
    gradient_transparent = colours[4];

    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('.header-cover {background: ' + gradient_transparent + ';}')
    style.sheet.insertRule('#research {background: ' + gradient_opaque + ';}');
    style.sheet.insertRule('#cv {background: ' + gradient_opaque + ';}');
    style.sheet.insertRule('#publications-main .paper:hover .paper-title{color: ' + strong_colour + ';}');
    style.sheet.insertRule('#publications-full .paper:hover .paper-title{color: ' + strong_colour + ' ;}');
    style.sheet.insertRule('.publication-stats-circle {border-color: ' + weak_colour + '; color: ' + strong_colour + ' ;}');
    style.sheet.insertRule('.publication-stats-circle:hover {background-color: ' + strong_colour + '; border-color: ' + strong_colour + ';}');
    style.sheet.insertRule('#contact .links a:hover {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.totop:hover .fas {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.timeline .circle {border-color: ' + strong_colour + ';');
    style.sheet.insertRule('li:hover .circle {background-color: ' + strong_colour + ';}');
    style.sheet.insertRule('li:hover .circle-small {background-color: ' + strong_colour + ';}');
    style.sheet.insertRule('li:hover .flag-title {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.gray-button {border-color: ' + weak_colour + '; color: ' + weak_colour + ';}');
    style.sheet.insertRule('.gray-button:hover {border-color: ' + strong_colour + '; background: ' + strong_colour + ';}');
    style.sheet.insertRule('.white-button:hover {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.color-button {border-color: ' + strong_colour + '; color: ' + strong_colour + ';}');
    style.sheet.insertRule('.color-button:hover {background: ' + strong_colour + ';');
    style.sheet.insertRule('#about .about-intro {color: ' + weak_colour + ';}');
    style.sheet.insertRule('#news a:hover {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.activity-arrows .fas:hover {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.experience-title, .publications-title, .skills-title, #activity-title {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.publications-subtitle, .skills-subtitle {color: ' + weak_colour + ';');
    style.sheet.insertRule('.activity-item:hover .item-title, .activity-item:hover .item-title-bold {color: ' + strong_colour + ';}');
    style.sheet.insertRule('#publications .fas, .activity-item .fas {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.c100.blue .bar, .c100.blue .fill {border-color: ' + weak_colour + ' !important;');
    style.sheet.insertRule('.c100.blue:hover > span > i {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.c100.blue:hover .bar, .c100.blue:hover .fill {border-color: ' + strong_colour + ' !important;}');
    style.sheet.insertRule('::selection {background: hsla(' + hue + ', 66%, 35%, 20%);}');

    // Changing favicon
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'files/img/favicons/favicon_' + hue + '.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}

function nextColour() {
    if (currentHueIdx == numHues - 1) {
        var index = 0;
    } else {
        var index = currentHueIdx + 1;
    }
    var hue = possibleHues[index];
    currentHueIdx = index;
    
    colours = computeColours(hue);
    setColours(colours);
}

function initColour() {
    var index = Math.floor(Math.random()*numHues);
    var hue = possibleHues[index];
    currentHueIdx = index;
    
    colours = computeColours(hue);
    setColours(colours);
}

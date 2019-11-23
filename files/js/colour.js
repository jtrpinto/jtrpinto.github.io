// Randomly generates a colour and paints the website

function initColour() {
    var hue = Math.random()*360;
    var min_hue = hue - 40;
    if (min_hue < 0) {
        min_hue = 360 - min_hue;
    }
    var max_hue = hue + 40;
    if (max_hue > 360) {
        max_hue = 0 + (max_hue - 360);
    }

    var strong_colour = 'hsl(' + hue + ', 66%, 55%)';
    var weak_colour = 'hsl(' + hue + ', 46%, 75%)';
    var gradient_opaque = 'linear-gradient(135deg, hsl(' + min_hue + ', 66%, 55%) 0%, hsl(' + hue + ', 66%, 55%) 50%, hsl('+ max_hue + ', 66%, 55%) 100%)';
    var gradient_transparent = 'linear-gradient(135deg, hsla(' + min_hue + ', 66%, 55%, 0.9) 0%, hsla(' + hue + ', 66%, 55%, 0.9) 50%, hsla('+ max_hue + ', 66%, 55%, 0.9) 100%)';

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
    style.sheet.insertRule('#about .about-intro {color: ' + strong_colour + ';}');
    style.sheet.insertRule('#news a:hover {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.activity-arrows .fas:hover {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.experience-title, .publications-title, .skills-title, #activity-title {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.publications-subtitle, .skills-subtitle {color: ' + weak_colour + ';');
    style.sheet.insertRule('.activity-item:hover .item-title, .activity-item:hover .item-title-bold {color: ' + strong_colour + ';}');
    style.sheet.insertRule('#publications .fas, .activity-item .fas {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.c100.blue .bar, .c100.blue .fill {border-color: ' + weak_colour + ' !important;');
    style.sheet.insertRule('.c100.blue:hover > span > i {color: ' + strong_colour + ';}');
    style.sheet.insertRule('.c100.blue:hover .bar, .c100.blue:hover .fill {border-color: ' + strong_colour + ' !important;}');
}
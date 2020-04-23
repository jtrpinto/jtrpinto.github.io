var years = {
    '2020': 1,
    '2019': 1,
    '2018': 1,
    '2017': 1
};

var types = {
    'journal': 1,
    'intconf': 1,
    'natconf': 1,
    'chapter': 1,
    'thesis': 1
};

rules_types = {}
rules_years = {}

var styles = document.createElement('style');
document.head.appendChild(styles);

function toggle_year(pub_year) {
    if (years[pub_year]) {
        idx = styles.sheet.insertRule('.y' + pub_year + '{display: none !important;}', styles.sheet.cssRules.length);
        years[pub_year] = false;
    } else {
        styles.sheet.deleteRule(0);
        years[pub_year] = true;
    }
    var element = document.getElementById('button_y' + pub_year);
    element.classList.toggle("untoggled-button");
}

function toggle_type(pub_type) {
    if (types[pub_type]) {
        idx = styles.sheet.insertRule('.t' + pub_type + '{display: none !important;}', styles.sheet.cssRules.length);
        types[pub_type] = false;
    } else {
        styles.sheet.deleteRule(0);
        types[pub_type] = true;
    }
    var element = document.getElementById('button_t' + pub_type);
    element.classList.toggle("untoggled-button");
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150;
        if (distanceY > shrinkOn) {
            document.getElementById('totop').style.visibility = 'visible';
            document.getElementById('totop').style.opacity = 1;
        } else {
            document.getElementById('totop').style.opacity = 0;
            document.getElementById('totop').style.visibility = 'hidden';
        }
    });
}

window.onload = init();
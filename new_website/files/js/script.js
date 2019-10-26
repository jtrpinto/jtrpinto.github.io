function toggleMenu() {
    if (document.getElementById('menu').className == 'hidden') {
        document.getElementById('menu').classList.toggle('hidden');
        document.getElementById('navbar').style.background = '#111111dd';
        document.getElementById('triangle').style.opacity = 0.6;
    } else {
        document.getElementById('menu').classList.toggle('hidden');
        if (window.scrollY <= 100) {
            document.getElementById('navbar').style.background = '#ffffff00';
            document.getElementById('triangle').style.opacity = 0;
        }
    }
}

function closeMenuOnScroll() {
    if (document.getElementById('menu').className != 'hidden') {
        document.getElementById('menu').classList.toggle('hidden');
        if (window.scrollY <= 100) {
            document.getElementById('navbar').style.background = '#ffffff00';
            document.getElementById('triangle').style.opacity = 0;
        }
    }
}

function toggle_experience_timeline(){
    var arrayOfElements=document.getElementsByClassName('hidden-experience');
    var lengthOfArray=arrayOfElements.length;

    if (document.getElementById('expand-button-experience').textContent == 'see less') {
        document.getElementById('expand-button-experience').textContent = 'see more';
        for (var i=0; i<lengthOfArray;i++){
            arrayOfElements[i].style.overflow='hidden';
            arrayOfElements[i].style.maxHeight=0;
        }
    } else {
        document.getElementById('expand-button-experience').textContent = 'see less';
        for (var i=0; i<lengthOfArray;i++){
            arrayOfElements[i].style.maxHeight=1000;
            arrayOfElements[i].style.overflow='visible';
        }
    }
}

function toggle_full_publications(){
    if (document.getElementById('publications-full').classList.value == 'hidden') {
        document.getElementById('expand-button-publications').textContent = 'see less';
        document.getElementById('publications-full').classList.toggle('hidden');
    } else {
        document.getElementById('expand-button-publications').textContent = 'see full list';
        document.getElementById('publications-full').classList.toggle('hidden');
    }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100;
        if (distanceY > shrinkOn) {
            document.getElementById('navbar').style.background = '#111111dd';
            document.getElementById('triangle').style.opacity = 0.6;
            document.getElementById('totop-a').style.visibility = 'visible';
            document.getElementById('totop').style.opacity = 1;
        } else {
            document.getElementById('navbar').style.background = '#ffffff00';
            document.getElementById('triangle').style.opacity = 0;
            document.getElementById('totop').style.opacity = 0;
            document.getElementById('totop-a').style.visibility = 'hidden';
        }
    });
}

window.onload = init();
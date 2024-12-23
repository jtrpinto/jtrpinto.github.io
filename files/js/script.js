var currentResearchTopic = 0;


function initialResearchTopic() {
    var researchTopics = document.getElementsByClassName('research-text');
    var researchImages = document.getElementsByClassName('research-title-image'); 
    var numResearchTopics = researchTopics.length;
    for (var i = 0; i < numResearchTopics; i++){
        if (i == 0){
            researchTopics[i].style.opacity = 1;
            researchTopics[i].style.zIndex = '2';
            researchImages[i].style.opacity = 0.3;
        } else {
            researchTopics[i].style.opacity = 0;
            researchTopics[i].style.zIndex = '1';
            researchImages[i].style.opacity = 0;
        }
    }
}

function nextResearchTopic() {
    var researchTopics = document.getElementsByClassName('research-text');
    var researchImages = document.getElementsByClassName('research-title-image'); 
    var numResearchTopics = researchTopics.length;
    if (currentResearchTopic == numResearchTopics - 1) {
        next = 0;
    } else {
        next = currentResearchTopic + 1;
    }
    for (var i = 0; i < numResearchTopics; i++){
        if (i == next){
            researchTopics[i].style.opacity = 1;
            researchTopics[i].style.zIndex = '2';
            researchImages[i].style.opacity = 0.3;
        } else {
            researchTopics[i].style.opacity = 0;
            researchTopics[i].style.zIndex = '1';
            researchImages[i].style.opacity = 0;
        }
    }
    currentResearchTopic = next;
}

function prevResearchTopic() {
    var researchTopics = document.getElementsByClassName('research-text');
    var researchImages = document.getElementsByClassName('research-title-image'); 
    var numResearchTopics = researchTopics.length;
    if (currentResearchTopic == 0) {
        prev = numResearchTopics - 1;
    } else {
        prev = currentResearchTopic - 1;
    }
    for (var i = 0; i < numResearchTopics; i++){
        if (i == prev){
            researchTopics[i].style.opacity = 1;
            researchTopics[i].style.zIndex = '2';
            researchImages[i].style.opacity = 0.3;
        } else {
            researchTopics[i].style.opacity = 0;
            researchTopics[i].style.zIndex = '1';
            researchImages[i].style.opacity = 0;
        }
    }
    currentResearchTopic = prev;
}

function scrollToElement(id) {
    var pos = document.getElementById(id).offsetTop;
    window.scroll({top: pos - 75, left: 0, behavior: 'smooth'});
}

function toggleMenu() {
    if (document.getElementById('menu').className == 'hidden') {
        document.getElementById('menu').classList.toggle('hidden');
        document.getElementById('navbar').style.background = '#111111ee';
        document.getElementById('triangle').style.opacity = 0.6;
    } else {
        document.getElementById('menu').classList.toggle('hidden');
        if (window.scrollY <= 300) {
            document.getElementById('navbar').style.background = '#ffffff00';
            document.getElementById('triangle').style.opacity = 0;
        }
    }
}

function closeMenuOnScroll() {
    if (document.getElementById('menu').className != 'hidden') {
        document.getElementById('menu').classList.toggle('hidden');
        if (window.scrollY <= 300) {
            document.getElementById('navbar').style.background = '#ffffff00';
            document.getElementById('triangle').style.opacity = 0;
        }
    }
}

function openPopUp(id) {
    document.getElementById(id).style.zIndex = '100';
    document.getElementById(id).style.opacity = 1;
}

function closePopUp(id) {
    document.getElementById(id).style.opacity = 0;
    document.getElementById(id).style.zIndex = '-100';
}

function toggle_experience_timeline() {
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

function toggle_full_publications() {
    if (document.getElementById('publications-full').classList.value == 'hidden') {
        document.getElementById('expand-button-publications').textContent = 'see less';
        document.getElementById('publications-full').classList.toggle('hidden');
    } else {
        document.getElementById('expand-button-publications').textContent = 'see full list';
        document.getElementById('publications-full').classList.toggle('hidden');
    }
}

function fitResearchSize() {
    var topics = document.getElementsByClassName('research-text');
    var numTopics = topics.length;
    var maxsize = 0;
    for (var i = 0; i < numTopics; i++){
        if (topics[i].scrollHeight >= maxsize){
            maxsize = topics[i].scrollHeight;
        }
    };
    document.getElementById('research-info').style.height = maxsize;
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300;
        if (distanceY > shrinkOn) {
            document.getElementById('navbar').style.background = '#111111ee';
            document.getElementById('triangle').style.opacity = 0.6;
            document.getElementById('totop').style.visibility = 'visible';
            document.getElementById('totop').style.opacity = 1;
        } else {
            document.getElementById('navbar').style.background = '#ffffff00';
            document.getElementById('triangle').style.opacity = 0;
            document.getElementById('totop').style.opacity = 0;
            document.getElementById('totop').style.visibility = 'hidden';
        }
    });
    initialResearchTopic();
}

window.onload = init();

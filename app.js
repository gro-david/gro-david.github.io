const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navbarLogo = document.querySelector('#navbar__logo')

//Display Mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const examplesMenu = document.querySelector('#examples-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)



    if(window.innerWidth > 960){    // not mobile website
        if(window.innerWidth < 1100 && scrollPos < 355){    //web site when examples in 2 columns
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        }else if(window.innerWidth < 1100 && scrollPos < 1516){
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            examplesMenu.classList.remove('highlight')
            return 
        }else if(window.innerWidth < 1100 && scrollPos < 2555){
            aboutMenu.classList.remove('highlight')
            examplesMenu.classList.add('highlight')
            return 
        }
        if(window.innerWidth < 1200 && scrollPos < 355){    //web site when pictures above text
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        }else if(window.innerWidth < 1200 && scrollPos < 907){
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            examplesMenu.classList.remove('highlight')
            return 
        }else if(window.innerWidth < 1200 && scrollPos < 2555){
            aboutMenu.classList.remove('highlight')
            examplesMenu.classList.add('highlight')
            return 
        }
        if(window.innerWidth > 1300 && scrollPos < 375){    // website when everything normal
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        }else if(window.innerWidth > 1300 && scrollPos < 1065){
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            examplesMenu.classList.remove('highlight')
            return 
        }else if(window.innerWidth > 1300 && scrollPos < 2000){
            aboutMenu.classList.remove('highlight')
            examplesMenu.classList.add('highlight')
            return 
        }
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navbarLogo.addEventListener('click', hideMobileMenu)


//Display slider values

publicOrNot = true;

function displayBorderSliderValue() {
    var slider = document.getElementById("borderRadiusSlider");
    var output = document.getElementById("borderRadiusValue");
    output.innerText = slider.value;
}

function displayTileSpeedSliderValue(){
    var slider = document.getElementById("tilesSpeedSlider");
    var output = document.getElementById("moveSpeedValue");
    output.innerText = slider.value;
}

function displayMinWidthSliderValue(){
    var slider = document.getElementById("minWidthSlider");
    var output = document.getElementById("minWidthValue");
    output.innerText = slider.value;
}
function displayMaxWidthSliderValue(){
    var slider = document.getElementById("maxWidthSlider");
    var output = document.getElementById("maxWidthValue");
    output.innerText = slider.value;
}

function displayMinHeightSliderValue(){
    var slider = document.getElementById("minHeightSlider");
    var output = document.getElementById("minHeightValue");
    output.innerText = slider.value;
}
function displayMaxHeightSliderValue(){
    var slider = document.getElementById("maxHeightSlider");
    var output = document.getElementById("maxHeightValue");
    output.innerText = slider.value;
}

function displayOpacitySliderValue(){
    var slider = document.getElementById("opacitySlider");
    var output = document.getElementById("opacityValue");
    output.innerText = slider.value;
}

function displayBlurSliderValue(){
    var slider = document.getElementById("blurSlider");
    var output = document.getElementById("blurValue");
    output.innerText = slider.value;
}

function setPublicityValue(){
    var box = document.getElementById("publicCheckbox");
    if(box.checked)
        publicOrNot = true;
    else if(!box.checked) 
        publicOrNot = false;

    console.log(publicOrNot);
}


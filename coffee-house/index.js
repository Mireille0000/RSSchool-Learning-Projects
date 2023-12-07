// burger menu

const burgerIcon = document.querySelector('.burger-icon'),
    burgerMenuElementFirst = document.querySelector('.burger-icon span:nth-child(1)'),
    burgerMenuElementSecond = document.querySelector('.burger-icon span:nth-child(2)'),
    burgerMenu = document.querySelector('.burger-menu'),
    burgerMenuItems = Array.from(document.querySelectorAll('.burger-menu li'));

burgerIcon.addEventListener('click', () => {
    burgerMenuElementFirst.classList.toggle('active');
    burgerMenuElementSecond.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

burgerMenuItems.forEach((_, index) => {
    burgerMenuItems[index].addEventListener('click', () => {
        burgerMenuElementFirst.classList.remove('active');
        burgerMenuElementSecond.classList.remove('active');
        burgerMenu.classList.remove('active');
    })
})

// favourites coffee slider

const rightArrowButton = document.querySelector('.button-icon-right'),
    leftArrowButton = document.querySelector('.button-icon-left'),
    coffeeSlider = document.querySelector('.coffee-slider'),
    sliderItems = document.querySelectorAll('.choose-coffee'),
    controls =  document.querySelector('.controls');

let margin = 0;

rightArrowButton.addEventListener('click', () => {
    if (margin > -200) {
        margin -= 100;
        coffeeSlider.style.marginLeft = margin + '%';
    } else {
        margin = 0;
        coffeeSlider.style.marginLeft = margin + '%';
    }
    console.log(margin);
})

leftArrowButton.addEventListener('click', () => {
    console.log('hey')
    if (margin >= -200 && margin < 0) {
        margin += 100;
        coffeeSlider.style.marginLeft = margin + '%';
    } else if (margin !== 0) {
        margin -= 100;
        coffeeSlider.style.marginLeft = margin + '%';
    } else if (margin === 0) {
        margin -= 200;
        coffeeSlider.style.marginLeft = margin + '%';
    }
    console.log(margin)
})

console.log(`Coffee house, week 1, score: 100/96(картинки в секциях enjoy и mobile apps расходятся более чем на 10px`);
console.log(`Coffee house, week 2, score: 90/ 90(все пункты выполнены, есть расхождения по перфект пикселю, но они не превышают установленные 10px`);

// сonsole.log(`accomplish the slider`);
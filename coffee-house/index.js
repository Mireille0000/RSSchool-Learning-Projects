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
    favouriteCoffeeContent = document.querySelector('.favourite-coffee-content'), //
    coffeeImages = document.querySelectorAll('.coffee-image'),
    coffeeSlider = document.querySelector('.choose-coffee'),
    sliderItems = document.querySelectorAll('.choose-coffee'),
    sliderWrapper = document.querySelector('.choose-coffee-slider-wrapper'),
    controls =  document.querySelectorAll('.control-dash');

let margin = 0;
let dashIndex = 0;

function activateDashes (index) {
    controls.forEach(dash => dash.classList.remove('active'));
    controls[index].classList.add('active');
}
//
// controls.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         margin = -100 * index;
//         coffeeSlider.style.marginLeft = margin + '%';
//         dashIndex = index;
//         activateDashes(dashIndex);
//     })
// })
//
function navigateSlider () {
    if (margin > -200 && dashIndex < 3) {
        dashIndex++;
        margin -= 100;
        coffeeSlider.style.marginLeft = margin + '%';
        activateDashes(dashIndex);
    } else {
        dashIndex = 0;
        margin = 0;
        coffeeSlider.style.marginLeft = margin + '%';
        activateDashes(dashIndex);
    }
}

rightArrowButton.addEventListener('click', navigateSlider);

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

let interval = setInterval(navigateSlider, 3000);

class mouseEvent {
    handleEvent(event) {
      switch(event.type) {
        case 'mouseenter':
            clearInterval(interval);
            break;
        case 'mouseleave':
            interval = setInterval(navigateSlider, 3000);
        break;
      }
    }
  }

let mouse= new mouseEvent();

sliderWrapper.addEventListener("mouseenter", mouse);
sliderWrapper.addEventListener("mouseleave", mouse);





console.log(`Coffee house, week 1, score: 100/96(картинки в секциях enjoy и mobile apps расходятся более чем на 10px`);
console.log(`Coffee house, week 2, score: 90/ 90(все пункты выполнены, есть расхождения по перфект пикселю, но они не превышают установленные 10px`);

// сonsole.log(`accomplish the slider`);
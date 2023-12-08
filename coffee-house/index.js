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
function navigateSlider() {
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

function navigateSliderLeft() {
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
}

rightArrowButton.addEventListener('click', navigateSlider);
leftArrowButton.addEventListener('click', navigateSliderLeft);

let interval = setInterval(navigateSlider, 7000);

class mouseEvent {
    handleEvent(event) {
      switch(event.type) {
        case 'mouseenter':
            clearInterval(interval);
            break;
        case 'mouseleave':
            interval = setInterval(navigateSlider, 7000);
        break;
        case 'touchstart':
            clearInterval(interval);
            break;
        case 'touchend':
            interval = setInterval(navigateSlider, 7000);
        break;
      }
    }
  }

let mouse = new mouseEvent();

sliderWrapper.addEventListener("mouseenter", mouse);
sliderWrapper.addEventListener("mouseleave", mouse);

// swipe for the slider (mobiles devices only)

sliderWrapper.addEventListener('touchstart', touchStart, false);
sliderWrapper.addEventListener('touchmove', touchMove, false);

let x1 = null;
let y1 = null;

function touchStart(event) {
    const firstTouch = event.touches[0];
    x1 = Math.round(firstTouch.clientX);
    y1 = Math.round(firstTouch.clientY);
}

function touchMove(event) {
    if (x1 === 0 || y1 === 0) {
        return false;
    }

    let x2 = Math.round(event.touches[0].clientX);
    let y2 = Math.round(event.touches[0].clientY);

    let coordinatesDiffX = x2 - x1;
    let coordinatesDiffY = y2 - y1;

    if (Math.abs(coordinatesDiffX) > Math.abs(coordinatesDiffY)) {
        if (coordinatesDiffX > 0) {
            navigateSlider();
            console.log('right')
        } else {
            navigateSliderLeft();
            console.log('left')
        }
    } else {
        if (coordinatesDiffY > 0) {
            navigateSlider();
            console.log('bottom')
        } else {
            navigateSliderLeft();
            console.log('top')
        }
    }

    x1 = null;
    y1 = null;
}


sliderWrapper.addEventListener("touchstart", mouse);
sliderWrapper.addEventListener("touchend", mouse);


console.log(`Coffee house, week 1, score: 100/96(картинки в секциях enjoy и mobile apps расходятся более чем на 10px`);
console.log(`Coffee house, week 2, score: 90/ 90(все пункты выполнены, есть расхождения по перфект пикселю, но они не превышают установленные 10px`);

// сonsole.log(`accomplish the slider: adjust it for mobile version + touch + progress bar`);
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

// menu button, enjoy section

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    window.open('./menu-page/menu.html');
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

let progress = document.querySelectorAll('.control-dash .progress');
console.log(progress);

function activateDashes (index) {
    controls.forEach(dash => dash.classList.remove('active'));
    controls[index].classList.add('active');

    progress.forEach(progressItem => progressItem.classList.remove('active'));
    progress[index].classList.add('active');
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

console.log(typeof interval)

class mouseEvent {
    handleEvent(event) {
      switch(event.type) {
        case 'mouseenter':
            // progress.forEach(dash => dash.classList.remove('active'));
            clearInterval(interval);
            break;
        case 'mouseleave':
            interval = setInterval(navigateSlider, 7000);
        break;
        case 'touchstart':
            clearInterval(interval);
            break;
        case 'touchend': //
            interval = setInterval(navigateSlider, 7000);
        break;
    }
  }
}

let mouse = new mouseEvent();

sliderWrapper.addEventListener("mouseenter", mouse);
sliderWrapper.addEventListener("mouseleave", mouse);

// swipe for the slider (mobiles devices only)

// sliderWrapper.addEventListener('touchstart', touchStart, false);
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

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

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
console.log(`Coffee house, week 2, score: 90/90(все пункты выполнены, есть расхождения по перфект пикселю, но они не превышают установленные 10px`);
console.log(`Coffee house, week 3, score: 82/90 \n
Бургер меню реализовано полностью - 22/22; \n
Слайдер - 18/22: \n
- Only the progress bar of the current slide can be filled; the rest remain in their default state - срабатывает не всегда, -1 \n
- When hovering the mouse or touch-and-hold on the displayed carousel element, the time to the element switch is paused. When the mouse cursor moves out, or the hold ends, the time continues from where it stopped - не реализовано - 2 n\
- For mobile devices, manual switching in the corresponding direction is additionally implemented by swiping left or right - срабатывает через раз - 1 \n
- When manually switching, the progress bar state of the switched slide resets, and the progress bar of the displayed slide starts to fill - 1 \n
- When switching to the right after the third element, it returns to the first. When switching to the left after the first element, it returns to the third - 1 \n
категории продуктов на странице меню, реализовано полностью, расхождения в верстке не превышают 10px - 16/16; \n
Modal - 18/20: \n
- Multiple 'Additives' options can be selected, and each selected option increases the final price of the product by $0.50 - реализовано частично, -2 \n
Видео на главной странице, реализовано полностью - 8/8`)

// сonsole.log(`accomplish the slider: adjust it for mobile version + touch + progress bar`);
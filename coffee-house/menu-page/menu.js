// burger menu (menu page)

const burgerIcon = document.querySelector('.burger-icon'),
    burgerMenuElementFirst = document.querySelector('.burger-icon span:nth-child(1)'),
    burgerMenuElementSecond = document.querySelector('.burger-icon span:nth-child(2)'),
    burgerMenu = document.querySelector('.burger-menu'),
    burgerMenuItems = Array.from(document.querySelectorAll('.burger-menu li'));

    console.log(burgerMenuItems);


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


// slider (menu page)

const menuButtons = document.querySelectorAll('.menu-icons-item'),
    menuButtonsImg = document.querySelectorAll('.menu-icons-item img'),
    coffeeMenu = document.querySelector('div .coffee-offer'),
    teaMenu = document.querySelector('div .tea-offer'),
    dessertsMenu = document.querySelector('div .desserts-offer');

    const first = document.querySelector('.menu-icons-item-first');

first.addEventListener('click', () => {
    teaMenu.classList.remove('active');
    coffeeMenu.classList.remove('active');
    dessertsMenu.classList.remove('active');

    first.classList.remove('active');
    menuButtons[0].classList.remove('active');
    menuButtonsImg[0].classList.remove('active');
    menuButtons[1].classList.remove('active');
    menuButtonsImg[1].classList.remove('active');
})

menuButtons[0].addEventListener('click', () => {
    teaMenu.classList.add('active');
    coffeeMenu.classList.add('active');
    dessertsMenu.classList.remove('active');

    first.classList.add('active');
    menuButtons[0].classList.add('active');
    menuButtonsImg[0].classList.add('active');
    menuButtons[1].classList.remove('active');
    menuButtonsImg[1].classList.remove('active');
})

menuButtons[1].addEventListener('click', () => {
    teaMenu.classList.remove('active');
    coffeeMenu.classList.add('active');
    dessertsMenu.classList.add('active');

    first.classList.add('active');
    menuButtons[1].classList.add('active');
    menuButtonsImg[1].classList.add('active');
    menuButtons[0].classList.remove('active');
    menuButtonsImg[0].classList.remove('active');
})

// load more buttons

const loadMoreCoffeeButton = document.querySelector('.download-more'),
    loadMoreDessertsButton = document.querySelector('.download-more.dessert'),
    coffeeItems = document.querySelectorAll('.coffee'),
    dessertItems = document.querySelectorAll('.dessert');

loadMoreCoffeeButton.addEventListener('click', () => {
    coffeeItems.forEach((item) => item.style.display = 'flex');
    loadMoreCoffeeButton.style.display = 'none';
})

loadMoreDessertsButton.addEventListener('click', () => {
    dessertItems.forEach((item) => item.style.display = 'flex');
    loadMoreDessertsButton.style.display = 'none';
})

 
window.addEventListener('resize', () => {
    if (window.innerWidth < 769) {
        for (let i = 4; i < coffeeItems.length; i++) {
            coffeeItems[i].style.display = 'none'
        }
        loadMoreCoffeeButton.style = 'display: flex';

        for (let i = 4; i < dessertItems.length; i++) {
            dessertItems[i].style.display = 'none'
        }
        loadMoreDessertsButton.style = 'display: flex';
    } else {
        for (let i = 4; i < 8; i++) {
            coffeeItems[i].style = 'display: flex';
            dessertItems[i].style = 'display: flex';
        }
    
        loadMoreCoffeeButton.style = 'display: none';
        loadMoreDessertsButton.style = 'display: none';
    }
})

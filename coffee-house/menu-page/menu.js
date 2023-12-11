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

// products cards

const menuItems = document.querySelectorAll('.menu-item'),
    modalWindow = document.querySelector('.modal'),
    backgroundModal = document.querySelector('.modal-wrapper'),
    html = document.querySelector('html'),
    closeButton = document.querySelector('.close-button');


menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
        backgroundModal.classList.add('active');
        html.classList.add('active');
    })
})

closeButton.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    backgroundModal.classList.remove('active');
    html.classList.remove('active');
})

backgroundModal.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    backgroundModal.classList.remove('active');
    html.classList.remove('active');
})

const totalPrice = document.querySelector('.total-price'),
    menuItem = document.querySelector('.modal-window-content h2'),
    description = document.querySelector('.product-discription'),
    coffeeTitles = document.querySelectorAll('.coffee h3'),
    teaTitles = document.querySelectorAll('.tea h3'),
    dessertsTitles = document.querySelectorAll('.dessert h3'),
    coffeeImages = document.querySelectorAll('.img-item'),
    cardImage = document.querySelector('.product-item-img'),
    menuItemsTitles = document.querySelectorAll('.menu-item h3');

const imagesArray = ["coffee1", "coffee2", "coffee3",
 "coffee4", "coffee5", "coffee6", "coffee7","coffee8", "tea1", "tea2", "tea3", "tea4",
"dessert1","dessert2","dessert3","dessert4","dessert5","dessert6","dessert7","dessert8"];

// size button 
const size1 = document.querySelector('.s div'),
    size2 = document.querySelector('.m div'),
    size3 = document.querySelector('.l div'),
    additives1 = document.querySelector('.ad1 div'),
    additives2 = document.querySelector('.ad2 div')
    additives3 = document.querySelector('.ad3 div');

async function cardData() {
    const products = 'products.json';
    const res = await fetch(products);
    const data = await res.json();

    // coffeeTitles.forEach(item => {
    //     item.setAttribute('data', 'coffee-name');
    // })
    console.log(data[0].additives[0].name);
    console.log(Array.from(menuItems))
    console.log(`${imagesArray[0]}.png`)

    // coffee
    for (let i = 0; i < menuItems.length - 12; i++) {
        menuItems[i].addEventListener('click', () => {
            if (data[i].name === menuItemsTitles[i].textContent) {
                let itemInfo = data[i];
                cardImage.style.background = `url(./images-and-icons/${imagesArray[i]}.png)`
                totalPrice.textContent =`$${itemInfo.price}`;
                menuItem.textContent =`${itemInfo.name}`;
                description.textContent =`${itemInfo.description}`;

                additives1.textContent =`${itemInfo.additives[0].name}`;
                additives2.textContent =`${itemInfo.additives[1].name}`;
                additives3.textContent =`${itemInfo.additives[2].name}`;
            }
        })
    }

    // tea
    for (let i = 8; i < menuItems.length - 8; i++) {
        menuItems[i].addEventListener('click', () => {
            if (data[i].name === menuItemsTitles[i].textContent) {
                let itemInfo = data[i];
                cardImage.style.background = `url(./images-and-icons/${imagesArray[i]}.png)`
                totalPrice.textContent =`$${itemInfo.price}`;
                menuItem.textContent =`${itemInfo.name}`;
                description.textContent =`${itemInfo.description}`;

                additives1.textContent =`${itemInfo.additives[0].name}`;
                additives2.textContent =`${itemInfo.additives[1].name}`;
                additives3.textContent =`${itemInfo.additives[2].name}`;
            }
        })
    }

    // desserts
    for (let i = 12; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', () => {
            if (data[i].name === menuItemsTitles[i].textContent) {
                let itemInfo = data[i];
                cardImage.style.background = `url(./images-and-icons/${imagesArray[i]}.png)`
                totalPrice.textContent =`$${itemInfo.price}`;
                menuItem.textContent =`${itemInfo.name}`;
                description.textContent =`${itemInfo.description}`;

                additives1.textContent =`${itemInfo.additives[0].name}`;
                additives2.textContent =`${itemInfo.additives[1].name}`;
                additives3.textContent =`${itemInfo.additives[2].name}`;
            }
        })
    }
}

cardData();

// item.setAttribute('data', 'coffee-name');

console.log(`counter, size button; try to accomplish the home page slider`)
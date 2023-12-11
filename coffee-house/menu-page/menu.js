// burger menu (menu page)

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

    const totalPrice = document.querySelector('.total-price'),
    menuItem = document.querySelector('.modal-window-content h2'),
    description = document.querySelector('.product-discription'),
    coffeeTitles = document.querySelectorAll('.coffee h3'),
    teaTitles = document.querySelectorAll('.tea h3'),
    dessertsTitles = document.querySelectorAll('.dessert h3'),
    coffeeImages = document.querySelectorAll('.img-item'),
    cardImage = document.querySelector('.product-item-img'),
    menuItemsTitles = document.querySelectorAll('.menu-item h3'),
    productSize = document.querySelectorAll('.product-size'),
    productAdditives = document.querySelectorAll('.product-additives');


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
    productSize[1].classList.remove('active');
    productSize[2].classList.remove('active');
    productAdditives.forEach(add => add.classList.remove('active'));
})

backgroundModal.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    backgroundModal.classList.remove('active');
    html.classList.remove('active');
    productSize[1].classList.remove('active');
    productSize[2].classList.remove('active');
    productAdditives.forEach(add => add.classList.remove('active'));
})

const imagesArray = ["coffee1", "coffee2", "coffee3",
 "coffee4", "coffee5", "coffee6", "coffee7","coffee8", "tea1", "tea2", "tea3", "tea4",
"dessert1","dessert2","dessert3","dessert4","dessert5","dessert6","dessert7","dessert8"];

//size and additives buttons variables

const size1 = document.querySelector('.s'),
    size2 = document.querySelector('.m'),
    size3 = document.querySelector('.l'),
    additives1 = document.querySelector('.ad1 div'),
    additives2 = document.querySelector('.ad2 div')
    additives3 = document.querySelector('.ad3 div');

async function cardData() {
    const products = 'products.json';
    const res = await fetch(products);
    const data = await res.json();

    productSize[0].style = `color: #E1D4C9; background-color: #665F55;`

    // coffee
    for (let i = 0; i < menuItems.length - 12; i++) {
        menuItems[i].addEventListener('click', () => {
            if (data[i].name === menuItemsTitles[i].textContent) {
                let itemInfo = data[i];
                cardImage.style.background = `url(./images-and-icons/${imagesArray[i]}.png)`
                totalPrice.textContent =`$${itemInfo.price}`;
                size1.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 0).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `color: #E1D4C9; background-color: #665F55;`
                    productSize[1].classList.remove('active');
                    productSize[2].classList.remove('active');
                })

                size2.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 0.5).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `background-color: #E1D4C9; border: 1px solid  #C1B6AD;`
                    productSize[1].classList.add('active');
                    productSize[2].classList.remove('active');
                })
                
                size3.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 1).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `background-color: #E1D4C9; border: 1px solid  #C1B6AD;`
                    productSize[1].classList.remove('active');
                    productSize[2].classList.add('active');
                })

                let finalPrice = (JSON.parse(`${itemInfo.price}`));

                productAdditives.forEach((item) => {
                    item.addEventListener('click', () => {
                        finalPrice += 0.5;
                        totalPrice.textContent =`$${finalPrice.toFixed(2)}`;
                        item.classList.add('active');
                    })
                })
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
                size1.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 0).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `color: #E1D4C9; background-color: #665F55;`
                    productSize[1].classList.remove('active');
                    productSize[2].classList.remove('active');
                })

                size2.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 0.5).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `background-color: #E1D4C9; border: 1px solid  #C1B6AD;`
                    productSize[1].classList.add('active');
                    productSize[2].classList.remove('active');
                })
                
                size3.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 1).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `background-color: #E1D4C9; border: 1px solid  #C1B6AD;`
                    productSize[1].classList.remove('active');
                    productSize[2].classList.add('active');
                })

                let finalPrice = (JSON.parse(`${itemInfo.price}`));

                productAdditives.forEach((item) => {
                    item.addEventListener('click', () => {
                        finalPrice += 0.5;
                        totalPrice.textContent =`$${finalPrice.toFixed(2)}`;
                        item.classList.add('active');
                   })
                })
                menuItem.textContent =`${itemInfo.name}`;
                description.textContent =`${itemInfo.description}`;

                additives1.textContent =`${itemInfo.additives[0].name}`;
                additives2.textContent =`${itemInfo.additives[1].name}`;
                additives3.textContent =`${itemInfo.additives[2].name}`;

                const gramms = document.querySelectorAll('.product-size div');
                gramms[0].textContent = '200 ml';
                gramms[1].textContent = '300 ml';
                gramms[2].textContent = '400 ml';
            }
        })
    }

    // desserts
    for (let i = 12; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', () => {
            if (data[i].name === menuItemsTitles[i].textContent) {
                let itemInfo = data[i];
                let finalPrice = (JSON.parse(`${itemInfo.price}`));
                cardImage.style.background = `url(./images-and-icons/${imagesArray[i]}.png)`
                totalPrice.textContent =`$${finalPrice.toFixed(2)}`;

                size1.addEventListener('click', () => {
                    const parsePrice = finalPrice.toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    console.log(parsePrice);
                    productSize[0].style = `color: #E1D4C9; background-color: #665F55;`
                    productSize[1].classList.remove('active');
                    productSize[2].classList.remove('active');
                })

                size2.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 0.5).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `background-color: #E1D4C9; border: 1px solid  #C1B6AD;`
                    productSize[1].classList.add('active');
                    productSize[2].classList.remove('active');
                })
                
                size3.addEventListener('click', () => {
                    const parsePrice = (JSON.parse(`${itemInfo.price}`) + 1).toFixed(2);
                    totalPrice.textContent =`$${parsePrice}`;
                    productSize[0].style = `background-color: #E1D4C9; border: 1px solid  #C1B6AD;`
                    productSize[1].classList.remove('active');
                    productSize[2].classList.add('active');
                })

                productAdditives.forEach((item) => {
                    item.addEventListener('click', () => {
                        finalPrice += 0.5;
                        totalPrice.textContent =`$${finalPrice.toFixed(2)}`;
                        item.classList.add('active');
                   })
                })

                menuItem.textContent =`${itemInfo.name}`;
                description.textContent =`${itemInfo.description}`;

                const gramms = document.querySelectorAll('.product-size div');
                gramms[0].textContent = '200 g';
                gramms[1].textContent = '300 g';
                gramms[2].textContent = '400 g';

                additives1.textContent =`${itemInfo.additives[0].name}`;
                additives2.textContent =`${itemInfo.additives[1].name}`;
                additives3.textContent =`${itemInfo.additives[2].name}`;
            }
        })
    }
}
cardData();

  // coffeeTitles.forEach(item => {
    //     item.setAttribute('data', 'coffee-name');
    // })

console.log(`counter, size button; try to accomplish the home page slider`)
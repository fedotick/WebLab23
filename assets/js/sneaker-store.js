const sneakers = [
    {
        id: 1,
        name: 'Sneaker 1',
        image: '../assets/img/sneakers/1.png',
        price: 150,
        stock: 10
    },
    {
        id: 2,
        name: 'Sneaker 2',
        image: '../assets/img/sneakers/2.png',
        price: 120,
        stock:5
    },
    {
        id: 3,
        name: 'Sneaker 3',
        image: '../assets/img/sneakers/3.png',
        price: 135,
        stock: 2
    }
]

const cards = document.querySelector('.cards');

loadCards();

function loadCards() {
    sneakers.forEach(sneaker => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = sneaker.id;

        card.innerHTML = `
                        <p class="title">${sneaker.name}</p>
                        <div class="image-container">
                            <img src="${sneaker.image}" alt="Sneaker 1">
                        </div>
                        <p class="price">$${sneaker.price}</p>
                        <p class="stock">In stock: <span class="inStock">${sneaker.stock}</span></p>
                        <div class="buttons">
                            <div class="additional-buttons">
                                <!-- Leveling space ^-^ -->
                            </div>
                            <div class="main-button">
                                <button class="button">Add to Basket</button>
                            </div>
                            <div class="additional-buttons favorite">
                                <span class="material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        `;

        cards.append(card);
    });
}

const addToBasketButtons = document.querySelectorAll('.button');
    
addToBasketButtons.forEach(button => {
    button.addEventListener('click', addToBasket);
});

const units = new Set();

const itemsSpan = document.getElementById('items');
const unitsSpan = document.getElementById('units');
const totalSpan = document.getElementById('total');

function addToBasket(event) {
    const button = event.target;
    const card = button.closest('.card');
    const cardId = card.id;

    const sneaker = sneakers.find(sneaker => sneaker.id == cardId);

    if (sneaker.stock > 0) {
        sneaker.stock--;
        +itemsSpan.innerHTML++;

        const inStockSpan = card.querySelector('.inStock');
        inStockSpan.innerHTML = sneaker.stock;

        units.add(sneaker.id);
        unitsSpan.innerHTML = units.size;

        totalSpan.innerHTML = +totalSpan.innerHTML + sneaker.price;
    }
}

const favorites = document.querySelectorAll('.favorite');

favorites.forEach(favorite => {
    favorite.addEventListener('click', addToFavorites);
});

function addToFavorites(event) {
    const target = event.target;
    const favorite = target.closest('.favorite');

    if (favorite.classList.contains('pressed')) {
        favorite.classList.remove('pressed');
    } else {
        favorite.classList.add('pressed');
    }
}

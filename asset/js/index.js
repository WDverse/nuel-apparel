import apparelArr from './data.js';

const apparelEl = document.getElementById('menu');
const orderList = document.getElementById('order-list');
const totalPriceEl = document.getElementById('total-amt');
const payBtnEl = document.getElementById('pay-btn');

const createApparelList = (arr) => {
    arr.forEach( apparel => {
        const apparelsContainer = document.createElement('div');
        apparelsContainer.classList.add('apparels-container');

        const apparelEmojiEl =  document.createElement('span');
        apparelEmojiEl.classList.add('emoji')

        const apparelInfoContainer =  document.createElement('div');
        apparelInfoContainer.classList.add('apparelInfoContainer');

        const addButtonEl = document.createElement('button');
        addButtonEl.classList.add('addBtn');

        const itemName = document.createElement('p');
        itemName.classList.add('itemName');

        const itemMaterials = document.createElement('p');
        itemMaterials.classList.add('itemMaterials')
        const itemPrice = document.createElement('p');

        const {name, materials, price, emoji} = apparel;
        apparelsContainer.dataset.name = name // add the item name as a data-* attr to every item container 
        apparelsContainer.dataset.price = price // add the item name as a data-* attr to every item container 
        apparelEmojiEl.textContent = emoji;
        itemName.textContent = name;
        itemMaterials.textContent = materials.map(material => material).join(', ');
        itemPrice.textContent = `$${price}`;
        addButtonEl.textContent = '+';

        addButtonEl.addEventListener('click', handlePreCheckout)

        apparelInfoContainer.appendChild(itemName);
        apparelInfoContainer.appendChild(itemMaterials);
        apparelInfoContainer.appendChild(itemPrice);

        apparelsContainer.appendChild(apparelEmojiEl);
        apparelsContainer.appendChild(apparelInfoContainer);
        apparelsContainer.appendChild(addButtonEl);

        apparelEl.appendChild(apparelsContainer);
    });

};

 const allPricesArr = [];

function handlePreCheckout (e) {
    const orderListContainer = document.createElement('div');
    const addedItemNameEl = document.createElement('span');
    const addedItemPriceEl = document.createElement('span');
    const removeItemEl = document.createElement('span');

    addedItemNameEl.textContent = e.target.parentElement.dataset.name;
    addedItemPriceEl.textContent = ' $' + e.target.parentElement.dataset.price;
    removeItemEl.textContent = ' remove';
    removeItemEl.setAttribute('type','button');
    removeItemEl.addEventListener('click', handleRemoveItem);

    const total = allPricesArr.push(Number(e.target.parentElement.dataset.price));
    
    const totalPrice = allPricesArr.reduce((total, price) => total + price, 0);
    totalPriceEl.textContent = ' $' + totalPrice;

    orderListContainer.appendChild(addedItemNameEl);
    orderListContainer.appendChild(removeItemEl);
    orderListContainer.appendChild(addedItemPriceEl);

    orderList.appendChild(orderListContainer);
}

function handleRemoveItem (e) {
    e.target.parentElement.style.display = 'none';
}

payBtnEl.addEventListener('click', function handlePayment (e) {
    e.preventDefault();

    const modalEl = document.getElementById('modal');
    modalEl.style.display = 'none';
    const orderContainer = document.getElementById('order-container');
    orderContainer.style.display = 'none';
    renderMessage ();
} )


function renderMessage () {
    const mainEl = document.getElementById('main');
     const nameInputEl = document.getElementById('username');
     const messageEl = document.createElement ('div');
    const username = nameInputEl.value;
    messageEl.textContent = `Thanks, ${username}! Your order is on its way!` ;
    mainEl.appendChild(messageEl);
}


createApparelList(apparelArr);
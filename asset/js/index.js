import apparelArr from './data.js';

const apparelEl = document.getElementById('menu');
const orderList = document.getElementById('order-list');
const totalPriceEl = document.getElementById('total-amt');

const createApparelList = (arr) => {
    arr.forEach( apparel => {
        const apparelsContainer = document.createElement('div');
        apparelsContainer.classList.add('apparels-container');

        const apparelEmojiContainer =  document.createElement('div');
        const apparelInfoContainer =  document.createElement('div');
        const addButtonEl = document.createElement('button');

        const itemName = document.createElement('p');
        const itemMaterials = document.createElement('p');
        const itemPrice = document.createElement('p');

        const {name, materials, price, emoji} = apparel;
        apparelsContainer.dataset.name = name // add the item name as a data-* attr to every item container 
        apparelsContainer.dataset.price = price // add the item name as a data-* attr to every item container 
        apparelEmojiContainer.textContent = emoji;
        itemName.textContent = name;
        itemMaterials.textContent = materials.map(material => material).join(', ');
        itemPrice.textContent = `$${price}`;
        addButtonEl.textContent = '+';

        addButtonEl.addEventListener('click', handlePreCheckout)

        apparelInfoContainer.appendChild(itemName);
        apparelInfoContainer.appendChild(itemMaterials);
        apparelInfoContainer.appendChild(itemPrice);

        apparelsContainer.appendChild(apparelEmojiContainer);
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

    const total = allPricesArr.push(Number(e.target.parentElement.dataset.price));
    
    const totalPrice = allPricesArr.reduce((total, price) => total + price, 0);
    totalPriceEl.textContent = ' $' + totalPrice;

    orderListContainer.appendChild(addedItemNameEl);
    orderListContainer.appendChild(removeItemEl);
    orderListContainer.appendChild(addedItemPriceEl);

    orderList.appendChild(orderListContainer);
}


createApparelList(apparelArr);
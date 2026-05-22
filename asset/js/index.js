import apparelArr from './data.js';

const apparelEl = document.getElementById('menu');
const orderList = document.getElementById('order-list');

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
        apparelsContainer.dataset.name = name // add data-* attr to every item container 
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

function handlePreCheckout (e) {
    const orderListContainer = document.createElement('div');
    const addedItemName = document.createElement('span');

    addedItemName.textContent = e.target.parentElement.dataset.name;
    orderListContainer.appendChild(addedItemName);
    orderList.appendChild(orderListContainer);
}


createApparelList(apparelArr);
import apparelArr from './data.js';

const apparelEl = document.getElementById('menu');

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
        apparelEmojiContainer.textContent = emoji;
        itemName.textContent = name;
        itemMaterials.textContent = materials.map(material => material).join(', ');
        itemPrice.textContent = `$${price}`;
        addButtonEl.textContent = '+';

        apparelInfoContainer.appendChild(itemName);
        apparelInfoContainer.appendChild(itemMaterials);
        apparelInfoContainer.appendChild(itemPrice);

        apparelsContainer.appendChild(apparelEmojiContainer);
        apparelsContainer.appendChild(apparelInfoContainer);
        apparelsContainer.appendChild(addButtonEl);

        apparelEl.appendChild(apparelsContainer);
    });

};



createApparelList(apparelArr);
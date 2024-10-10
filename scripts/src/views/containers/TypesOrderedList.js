import Pokemon from "../../models/Pokemon.js";

/**
 * 
 * @param {Pokemon} pokemon 
 */
export default function TypesOrderedList(pokemon) {
    const orderedList = document.createElement('ol');
    orderedList.className = 'types';
    pokemon.types.map(type => {
        const listItem = document.createElement('li');
        listItem.className = 'type';
        listItem.classList.add(type);
        listItem.textContent = type;
        return listItem;
    }).forEach(listItem => orderedList.appendChild(listItem));
    return orderedList;
}
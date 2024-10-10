import Pokemon from "../../models/Pokemon.js";
import DetailContainer from "./DetailContainer.js";

/**
 * 
 * @param {Pokemon[]} pokemons 
 */
export default function PokemonsOrderedList(pokemons) {
    const orderedList = document.createElement('ol');
    orderedList.className = 'pokemons';
    orderedList.id = 'pokemonList';
    pokemons.map(pokemon => {
        const listItem = document.createElement('li');
        listItem.className = 'pokemon';
        listItem.classList.add(pokemon.type);
        const numberSpan = document.createElement('span');
        numberSpan.className = 'number';
        numberSpan.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = pokemon.name;
        const detailContainer = DetailContainer(pokemon);
        listItem.appendChild(numberSpan);
        listItem.appendChild(nameSpan);
        listItem.appendChild(detailContainer);
        return listItem;
    }).forEach(listItem => orderedList.appendChild(listItem));
    return orderedList;
}
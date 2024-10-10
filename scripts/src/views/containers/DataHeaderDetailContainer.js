import Pokemon from "../../models/Pokemon.js";
import StringsDataHeaderDetailContainer from "./StringsDataHeaderDetailContainer.js";

/**
 * 
 * @param {Pokemon} pokemon 
 */
export default function DataHeaderDetailContainer(pokemon) {
    const container = document.createElement('div');
    container.className = 'data-heading-detail';
    container.classList.add('row');
    const stringsContainer = StringsDataHeaderDetailContainer(pokemon);
    const idContainer = document.createElement('span');
    idContainer.className = 'id-data-heading-detail';
    idContainer.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
    container.appendChild(stringsContainer);
    container.appendChild(idContainer);
    return container;
}
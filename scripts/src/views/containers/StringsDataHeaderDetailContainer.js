import Pokemon from "../../models/Pokemon.js";

/**
 * 
 * @param {Pokemon} pokemon 
 */
export default function StringsDataHeaderDetailContainer(pokemon) {
    const container = document.createElement('div');
    container.className = 'strings-data-header-detail';
    container.classList.add('column');
    const nameSpan = document.createElement('span');
    nameSpan.textContent = pokemon.name;
    const typesContainer = document.createElement('ol');
    typesContainer.className = 'types';
    typesContainer.classList.add('row');
    pokemon.types.map(type => {
        const typeSpan = document.createElement('li');
        typeSpan.className = 'type';
        typeSpan.classList.add(pokemon.type);
        typeSpan.textContent = type;
        return typeSpan;
    }).forEach(typeSpan => typesContainer.appendChild(typeSpan));
    container.appendChild(nameSpan);
    container.appendChild(typesContainer);
    return container;
}
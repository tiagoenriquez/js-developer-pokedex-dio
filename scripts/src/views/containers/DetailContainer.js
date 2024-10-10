import PokemonController from "../../controllers/PokemonController.js";
import Pokemon from "../../models/Pokemon.js";
import TypesOrderedList from "./TypesOrderedList.js";

/**
 * 
 * @param {Pokemon} pokemon 
 */
export default function DetailContainer(pokemon) {
    function detail() {
        new PokemonController().procurar(pokemon.id);
    }

    const container = document.createElement('div');
    container.className = 'detail';
    container.addEventListener('click', detail);
    const orderedList = TypesOrderedList(pokemon);
    const image = document.createElement('img');
    image.src = pokemon.photo;
    image.alt = pokemon.name;
    image.className = 'pokemon-img';
    container.appendChild(orderedList);
    container.appendChild(image);
    return container;
}
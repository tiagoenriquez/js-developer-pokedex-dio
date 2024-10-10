import View from "./View.js";
import Pokemon from "../models/Pokemon.js";
import PokemonsOrderedList from "./containers/PokemonsOrderedList.js";
import Pagination from "../models/Pagination.js";
import PokemonController from "../controllers/PokemonController.js";

/**
 * 
 * @param {Pokemon[]} pokemons 
 * @param {Pagination} pagination 
 */
export default function PokemonsView(pokemons, pagination) {
    function loadMore() {
        pagination.increaseLimite();
        new PokemonController().listar(pagination);
    }

    const section = document.createElement('section');
    section.className = 'content';
    const heading = document.createElement('h1');
    heading.textContent = 'Pokedex';
    const orderedList = PokemonsOrderedList(pokemons);
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    const button = document.createElement('button');
    button.addEventListener('click', loadMore);
    button.textContent = 'Carregar mais Pokemons';
    section.appendChild(heading);
    section.appendChild(orderedList);
    section.appendChild(paginationDiv);
    paginationDiv.appendChild(button);

    const elements = [
        section
    ];

    const view = View();
    elements.forEach(element => view.appendChild(element));
}
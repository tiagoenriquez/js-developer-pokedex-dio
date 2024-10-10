import Pagination from "../models/Pagination.js";
import PokemonService from "../services/PokemonService.js";
import DetailView from "../views/DetailView.js";
import PokemonsView from "../views/PokemonsView.js";

export default class PokemonController {
    /**
     * 
     * @param {Pagination} pagination 
     */
    listar = async (pagination) => {
        const pokemons = await new PokemonService().listar(pagination.offset, pagination.limit);
        PokemonsView(pokemons, pagination);
    }

    /**
     * 
     * @param {number} id 
     */
    procurar = async (id) => {
        const pokemon = await new PokemonService().procurar(id);
        DetailView(pokemon);
    }
}
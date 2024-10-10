import urlApi from "../connections/PokemonConnection.js";
import Pokemon from "../models/Pokemon.js";

export default class PokemonService {
    /**
     * 
     * @param {number} offset 
     * @param {number} limit 
     */
    listar = async (offset, limit) => {
        /** @type {Pokemon[]} */ const pokemons = [];
        for (let i = offset; i < limit; i++) {
            const pokemon = await this.procurar(i + 1);
            pokemons.push(pokemon);
        }
        return pokemons;
    }

    /**
     * 
     * @param {number} id 
     */
    procurar = async (id) => {
        return await fetch(`${urlApi}/${id.toString()}`)
            .then(response => response.json())
            .then(response => new Pokemon(
                response.id,
                response.name,
                response.types.map(typeSlot => typeSlot.type.name),
                response.sprites.other.dream_world.front_default,
                response.height,
                response.weight,
                response.abilities.map(ability => ability.ability.name)
            ))
            .catch(error => console.log(error));
    }
}
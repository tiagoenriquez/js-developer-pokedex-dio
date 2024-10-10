import PokemonController from "./src/controllers/PokemonController.js";
import Pagination from "./src/models/Pagination.js";

const pagination = new Pagination(0, 8);
new PokemonController().listar(pagination);
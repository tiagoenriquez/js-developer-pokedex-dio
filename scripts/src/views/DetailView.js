import Pokemon from "../models/Pokemon.js";
import AboutContainer from "./containers/AboutContainer.js";
import DataHeaderDetailContainer from "./containers/DataHeaderDetailContainer.js";
import MenuDetailContainer from "./containers/MenuDetailContainer.js";
import MenuMainContainer from "./containers/MenuMainContainer.js";
import View from "./View.js";

/**
 * 
 * @param {Pokemon} pokemon 
 */
export default function DetailView(pokemon) {
    const header = document.createElement('header');
    header.className = 'detail-section';
    header.classList.add(pokemon.type);
    header.classList.add('column');
    const menuDetail = MenuDetailContainer();
    const dataHeaderDetail = DataHeaderDetailContainer(pokemon);
    const image = document.createElement('img');
    image.src = pokemon.photo;
    image.alt = pokemon.name;
    image.className = 'big-pokemon-img';
    const main = document.createElement('main');
    main.className = 'detail-section';
    const menuMain = MenuMainContainer();
    const descriptionContainer = AboutContainer(pokemon);
    header.appendChild(menuDetail);
    header.appendChild(dataHeaderDetail);
    header.appendChild(image);
    main.appendChild(menuMain);
    main.appendChild(descriptionContainer);

    const elements = [
        header,
        main
    ]

    const view = View();
    elements.forEach(element => view.appendChild(element));
}
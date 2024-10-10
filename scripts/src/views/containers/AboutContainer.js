import Pokemon from "../../models/Pokemon.js";

/**
 * 
 * @param {Pokemon} pokemon 
 */
export default function AboutContainer(pokemon) {
    const aboutContainer = document.createElement('table');
    aboutContainer.className = 'description';
    const body = document.createElement('tbody');
    const speciesRow = document.createElement('tr');
    const speciesKeyCell = document.createElement('td');
    speciesKeyCell.textContent = 'Espécie';
    const speciesValueCell = document.createElement('td');
    speciesValueCell.textContent = pokemon.name;
    const heightRow = document.createElement('tr');
    const heightKeyCell = document.createElement('td');
    heightKeyCell.textContent = 'Altura';
    const heightValueCell = document.createElement('td');
    heightValueCell.textContent = `${(pokemon.height / 10).toString().replace('.', ',')} cm`;
    const weightRow = document.createElement('tr');
    const weightKeyCell = document.createElement('td');
    weightKeyCell.textContent = 'Peso';
    const weightValueCell = document.createElement('td');
    weightValueCell.textContent = `${(pokemon.weight / 10).toString().replace('.', ',')} kg`;
    const abilitiesRow = document.createElement('tr');
    const abilitiesKeyCell = document.createElement('td');
    abilitiesKeyCell.textContent = 'Abilidades';
    const abilitiesValueCell = document.createElement('td');
    abilitiesValueCell.textContent = pokemon.abilities.join(', ');
    const eggCycleRow = document.createElement('tr');
    const eggCycleKeyCell = document.createElement('td');
    eggCycleKeyCell.textContent = 'Ciclo do ovo';
    const eggCycleValueCell = document.createElement('td');
    eggCycleValueCell.textContent = pokemon.type;
    speciesRow.appendChild(speciesKeyCell);
    speciesRow.appendChild(speciesValueCell);
    heightRow.appendChild(heightKeyCell);
    heightRow.appendChild(heightValueCell);
    weightRow.appendChild(weightKeyCell);
    weightRow.appendChild(weightValueCell);
    abilitiesRow.appendChild(abilitiesKeyCell);
    abilitiesRow.appendChild(abilitiesValueCell);
    eggCycleRow.appendChild(eggCycleKeyCell);
    eggCycleRow.appendChild(eggCycleValueCell);
    body.appendChild(speciesRow);
    body.appendChild(heightRow);
    body.appendChild(weightRow);
    body.appendChild(abilitiesRow);
    body.appendChild(eggCycleRow);
    aboutContainer.appendChild(body);
    return aboutContainer;
}
export default function MenuMainContainer(pokemon) {
    const menu = document.createElement('ul');
    menu.className = 'menu';
    const aboutItem = document.createElement('li');
    aboutItem.className = 'menu-item';
    aboutItem.textContent = 'Sobre';
    const statusItem = document.createElement('li');
    statusItem.className = 'menu-item';
    statusItem.textContent = 'Status';
    const evolutionItem = document.createElement('li');
    evolutionItem.className = 'menu-item';
    evolutionItem.textContent = 'Evolução';
    const movesItem = document.createElement('li');
    movesItem.className = 'menu-item';
    movesItem.textContent = 'Movimento';
    menu.appendChild(aboutItem);
    menu.appendChild(statusItem);
    menu.appendChild(evolutionItem);
    menu.appendChild(movesItem);
    return menu;
}
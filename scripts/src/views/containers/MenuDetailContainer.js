import IconedSpanContainer from "./IconedSpanContainer.js";

export default function MenuDetailContainer() {
    const container = document.createElement('div');
    container.className = 'row';
    container.classList.add('menu-detail');
    const arrowSpan = IconedSpanContainer('/assets/img/arrow.png', 'Seta');
    const heartSpan = IconedSpanContainer('assets/img/heart.png', 'Coração');
    container.appendChild(arrowSpan);
    container.appendChild(heartSpan);
    return container;
}
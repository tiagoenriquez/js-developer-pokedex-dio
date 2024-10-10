/**
 * @param {string} source 
 * @param {string} alt 
 */
export default function IconedSpanContainer(source, alt) {
    const span = document.createElement('span');
    const image = document.createElement('img');
    image.src = source;
    image.alt = alt;
    span.appendChild(image);
    return span;
}
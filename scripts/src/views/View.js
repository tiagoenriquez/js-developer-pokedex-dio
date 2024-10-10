export default function View() {
    const view = document.getElementsByTagName('body')[0];
    const elements = view.children;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element = null;
    }
    view.innerHTML = '';
    return view;
}
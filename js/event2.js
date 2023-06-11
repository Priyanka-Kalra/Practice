const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    document.body.style.background = RandomColor();
})
const RandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}
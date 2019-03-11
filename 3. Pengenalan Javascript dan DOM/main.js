document.querySelector('h1').textContent = "hello world";
const inputValue = document.querySelector('#data').value;
const box = document.querySelector("#box");
console.log(inputValue);

onMouseOver = () => {
    box.style.background = "aqua";
}

box.addEventListener('mouseover', onMouseOver);
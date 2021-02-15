let pageBG = document.querySelector('body');

let firstColor = document.querySelector('#first-color');
let secondColor = document.querySelector('#second-color');

let bgColorProperty = document.querySelector('.bg-color-text');

let colorInputs = document.querySelectorAll('input');

for (let inputs of colorInputs) {
  inputs.addEventListener('input', () => {
    pageBG.style.background = `linear-gradient(120deg,${firstColor.value},${secondColor.value})`;
    bgColorProperty.innerText = pageBG.getAttribute('style');
    bgColorProperty.style.opacity = 0.5;
  });
}

function storeCurrentBackground() {}

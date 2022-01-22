let HexNum = "0123456789ABCDEF"

function randomHex () {
    let randomHexNum = ""
    for (let i = 1; i<=6; i++) {
        randomHexNum += HexNum[Math.floor(Math.random() * 16)];
    }
    return randomHexNum
}

console.log(randomHex ());

let clickMe = document.querySelector('.button-box');
let backgroundColor = document.querySelector('.container')
let text = document.querySelector('.text-box')

clickMe.addEventListener('click', change);

function change () {
    let newHexNum = randomHex();
    text.textContent = `HEX COLOR :#${newHexNum}`;
    backgroundColor.style.backgroundColor = `#${newHexNum}`;
}
document.getElementById("refresh-color").addEventListener("click", () => {
    const randomColor = getRandomColor();
    const rgbColor = hexToRgb(randomColor);

    document.body.style.background = `linear-gradient(45deg, ${randomColor}, ${rgbColor})`;
    document.querySelector('.hex').textContent = `HEX: ${randomColor}`;
    document.querySelector('.rgb').textContent = `RGB: ${rgbColor}`;
    document.getElementById('hex-code').textContent = `HEX: ${randomColor}`;
    document.getElementById('rgb-code').textContent = `RGB: ${rgbColor}`;
});

document.getElementById("copy-hex").addEventListener("click", () => {
    const hexText = document.getElementById("hex-code").textContent.split(" ")[1];
    copyToClipboard(hexText);
});

document.getElementById("copy-rgb").addEventListener("click", () => {
    const rgbText = document.getElementById("rgb-code").textContent.split(" ")[1];
    copyToClipboard(rgbText);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`${text} copied to clipboard!`);
}

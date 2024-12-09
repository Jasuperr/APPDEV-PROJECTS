// script.js
document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorValue = document.getElementById('colorValue');

    // Event listener for color input changes
    colorInput.addEventListener('input', (event) => {
        const color = event.target.value;
        colorDisplay.style.backgroundColor = color;
        colorValue.textContent = `Selected Color: ${color}`;
    });
});
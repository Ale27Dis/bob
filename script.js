function changeMessage() {
    document.getElementById('welcome-message').innerText = 'Ciao, Mondo!';
};

document.getElementById('colorButton').addEventListener('click', function() {
    const text = document.getElementById('text');
    const colors = ['red', 'green', 'blue', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    text.style.color = randomColor;
});

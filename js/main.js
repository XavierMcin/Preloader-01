let button = document.querySelector('.clicker'),
    singleBatt = document.querySelectorAll('span');
    nButton = Array.from(singleBatt);

button.addEventListener('click', () => {
    nButton.forEach((curr) => {
        curr.classList.add('full');
    });
});


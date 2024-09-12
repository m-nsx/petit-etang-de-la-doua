// Glissement en douceur vers l'ancre
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fonction pour retourner les tuiles
function flipTile(tile) {
    tile.querySelector('.front').classList.toggle('flip');
    tile.querySelector('.back').classList.toggle('flip');
}
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#decouvrir').scrollIntoView({ behavior: 'smooth' });
});
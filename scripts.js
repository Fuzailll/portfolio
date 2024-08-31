document.addEventListener('DOMContentLoaded', function() {
    const bioLink = document.querySelector('a[href="#bio"]');
    console.log(bioLink); // Should log the link element

    bioLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const targetElement = document.querySelector('#bio');
        console.log(targetElement); // Should log the #bio element

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

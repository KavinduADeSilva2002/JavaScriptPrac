document.addEventListener('DOMContentLoaded', () => {
    // Image gallery data
    const images = [
        'https://picsum.photos/300/200?random=1',
        'https://picsum.photos/300/200?random=2',
        'https://picsum.photos/300/200?random=3',
        'https://picsum.photos/300/200?random=4',
    ];

    // Populate gallery
    const galleryContainer = document.querySelector('.gallery-container');
    images.forEach(src => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `<img src="${src}" alt="Gallery Image">`;
        galleryContainer.appendChild(galleryItem);
    });

    // Form submission
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formResponse.innerHTML = `Thank you, ${name}! Your message has been received.`;
            formResponse.style.color = 'green';
            form.reset();
        } else {
            formResponse.innerHTML = 'Please fill out all fields.';
            formResponse.style.color = 'red';
        }
    });

    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});
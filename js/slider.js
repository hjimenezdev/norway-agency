window.addEventListener('load', () => {
    new Glider(document.querySelector('.glider-1'), {
        slidesToShow: 1,
        dots: '.glider-dots',
        arrows: {
            prev: document.querySelector('.prev-1'),
            next: document.querySelector('.next-1')
        }
    });

    new Glider(document.querySelector('.glider-2'), {
        slidesToShow: 1,
        dots: '.glider-dots2',
        arrows: {
            prev: document.querySelector('.prev-2'),
            next: document.querySelector('.next-2')
        }
    });

    new Glider(document.querySelector('.glider-3'), {
        slidesToShow: 1,
        dots: '.glider-dots3',
        arrows: {
            prev: document.querySelector('.prev-3'),
            next: document.querySelector('.next-3')
        }
    });
});

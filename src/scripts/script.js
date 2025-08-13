const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // добавить CSS-класс, если элемент появился
        setTimeout(()=> {
            entry.target.classList.add('height');
        }, 400)
        observer.unobserve(entry.target);
        }
    });
});


// Наблюдаем за элементами с классом .rules__item
document.querySelectorAll('.rules__item').forEach((e) => {

    observer.observe(e);

});

document.querySelectorAll('.sect').forEach(card => {
    gsap.from(card, {
    transform: "translateX(-100%)",
    duration: .5,
    delay: .5,
    scrollTrigger: {
        trigger: card,
    },
    });
});
document.querySelectorAll('.sect1').forEach(card => {
    gsap.from(card, {
    transform: "translateX(100%)",
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: card,
    },
    });
});
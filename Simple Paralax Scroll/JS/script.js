window.addEventListener("scroll", () => {
    let image = document.querySelector('img');
    image.style.top = `${scrollY/2}px`;
});
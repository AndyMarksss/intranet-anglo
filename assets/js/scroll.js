window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active-scroll', window.scrollY >100);
});
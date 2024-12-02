const container = document.getElementById('container');
const loginDosenBtn = document.getElementById('logout');
const loginBtn = document.getElementById('login');

loginDosenBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
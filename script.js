let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-time');
    menu.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-time');
    menu.classList.toggle('active');
}
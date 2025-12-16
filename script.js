let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new typed('.multiple-text', {
    strings: ["Frontend Developer","Data Analyst ."],
    typeSpeed: 80,
    backspeed: 60,
    backdelay:1000,
    loop:true
  });
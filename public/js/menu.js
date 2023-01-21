var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version

let menuBtn = document.getElementById("menu-button");
let menu = document.getElementById("menu");
let menuContent = document.getElementById("menu-content");

document.getElementById("menu-button").onclick = function(){
    menuBtn.classList.toggle('rotate');
    menu.classList.toggle('expand');
    menuContent.classList.toggle('fade');
    $("#menu-content").slideUp(300);
};

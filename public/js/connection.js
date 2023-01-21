var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version

let welcomeText = document.getElementById("welcome-text");
let connectText = document.getElementById("connecting-text");
let loadingLogo = document.getElementById("loading-logo");
const img = document.createElement('img');

img.src = "images/connecting.svg";


document.getElementById("connect-button").onclick = function(){
    welcomeText.classList.toggle('fade');
    connectText.classList.toggle('fade');
    loadingLogo.classList.toggle('fade');
    loadingLogo.appendChild(img);
    $("#connect-logo img").slideUp(500, function() {
        $(this).remove();
    });
    $("#connect-logo p").slideUp(500, function() {
        $(this).remove();
    });
    $("#connect-button").slideUp(500, function() {
        $(this).remove();
    });
    setTimeout(login, 4000);
}

function login(){
    document.location.replace('./library');
}
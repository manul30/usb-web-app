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

var table = document.getElementById("table-songs");
for (var i = 0, row; row = table.rows[i]; i++) {
    trackInfo(row);
}

function trackInfo(row){
        row.onclick = function(){
        row.classList.toggle("expand");
        var content = this.children[1].children[0].children[1];
        if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
    };    
}





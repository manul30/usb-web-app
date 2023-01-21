var index = document.getElementsByClassName("index");
var song = document.getElementsByClassName("song");
var numberMinutes = document.getElementsByClassName("numberMinutes");
var playlistRow = document.getElementsByClassName("playlist-row");
const iter = playlistRow.length;
for (let i = 0; i < index.length; i++) {
    index[i].textContent = ((i+1>9)?(i+1).toString():'0'+(i+1).toString());
}

for (let i = 0; i < song.length; i++) {
    song[i].textContent = song[i].textContent.toUpperCase();
}


/*********FOR LIBRARY*******/

for (let i = 0; i < (Math.floor(iter/3)+1); i++) {
    if (playlistRow.length>1){
        playlistRow[i].appendChild(
            playlistRow[i+1].firstElementChild,
        );
        playlistRow[i+1].remove();
        playlistRow[i].appendChild(
            playlistRow[i+1].firstElementChild,
        );
        playlistRow[i+1].remove();
    }
}

/*******TRACK HISTORY*******/ 

numberMinutes[0].innerHTML = (index.length).toString() +' tracks </br>';
numberMinutes[0].innerHTML += (111).toString() +' minutes';

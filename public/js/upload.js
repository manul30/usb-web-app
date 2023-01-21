var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version

let menuBtn = document.getElementById("menu-button");
let menu = document.getElementById("menu");
let menuContent = document.getElementById("menu-content");
let statusFlag = 0;

document.getElementById("menu-button").onclick = function(){
    menuBtn.classList.toggle('rotate');
    menu.classList.toggle('expand');
    menuContent.classList.toggle('fade');

    $("#menu-content").slideUp(300);
};


let loadingLogo = document.getElementById("loading-logo");
let uploadText = document.getElementById("upload-text");
const img = document.createElement('img');
img.src = "/images/connecting.svg";


document.getElementById("connect-button").onclick = function(){
    loadingLogo.style.display = "block";
    loadingLogo.classList.toggle('fade');
    loadingLogo.appendChild(img);

    if (statusFlag==1){
        loadingLogo.style.display = "block";
        //loadingLogo.style.alignSelf = "center";
        $("#connect-logo img").slideUp(500, function() {
            $(this).remove();
        });
        $("#connect-logo p").slideUp(500, function() {
            $(this).remove();
        });
        $("#connect-button img").slideUp(500, function() {
            $(this).remove();
        });
        $("loading-logo img").toggleClass('rotate');
        menuBtn.style.display = "none";
        menu.style.display = "none";
        uploadText.textContent = "exporting to USB ... \r\n x %";
        uploadText.style.whiteSpace = "pre-line";
        setTimeout(doneExporting,4000);
    }else{
        
        $("#connect-logo img").slideUp(500, function() {
            $(this).remove();
        });
        $("#connect-logo p").slideUp(500, function() {
            $(this).remove();
        });
        $("#connect-button img").slideUp(500, function() {
            $(this).remove();
        });
        $("loading-logo img").toggleClass('rotate');
        menuBtn.style.display = "none";
        menu.style.display = "none";
        uploadText.textContent = "analyzing tracks ... \r\n x %";
        uploadText.style.whiteSpace = "pre-line";
        setTimeout(doneUploading, 4000);

    }
}


function doneUploading(){
    const img = document.createElement('img');
    img.src = "/images/export-loading.svg";
    const imgBtn = document.createElement('img');
    imgBtn.src = "/images/connect-indicator-black.svg";
    const p = document.createElement('p');
    p.textContent = "export";
    p.style.color = "black";
    statusFlag = 1;
    let connectBtn = document.getElementById("connect-button");
    let connectLogo = document.getElementById("connect-logo");

    $("#loading-logo").slideUp(500, function() {
        connectLogo.appendChild(img);
        connectBtn.appendChild(imgBtn);
        connectLogo.appendChild(p);
        $(this).display = "none";
    });
    
    $("#connect-button img").img = menuBtn;

    uploadText.textContent = "track analysis \r\n complete";
    menuBtn.style.display = "inline";
    menu.style.display = "inline";
    
}


function doneExporting(){
    $("#loading-logo").slideUp(500, function() {
        $(this).remove();
    });

    uploadText.textContent = "\r\n \r\n \r\n successfully \r\n exported";
    menuBtn.style.display = "inline";
    menu.style.display = "inline";
}


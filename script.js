function audioo() {
    var icon = document.getElementById("sound");
    if (icon.getAttribute('type') == 'off') {
        icon.setAttribute('type','on')
         icon.setAttribute('class','fa-solid fa-volume-high');
    }
    else {
        icon.setAttribute('type','off');
        icon.setAttribute('class','fa-solid fa-volume-xmark');
    }
}
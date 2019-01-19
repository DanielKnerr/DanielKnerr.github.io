function openFullImageView(id) {
    var folder = document.getElementById("__folder").value;
    var overlay = document.getElementById("overlay");
    var overlayImage = document.getElementById("overlay--image");

    overlay.style.display = "block";
    overlayImage.src = "images/" + folder + "/" + id + ".png";
}

function closeOverlay() {
    var overlay = document.getElementById("overlay");

    overlay.style.display = "none";
}

function preventCloseOverlay(event) {
    event.preventDefault();
    event.stopPropagation();
}
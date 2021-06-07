function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}
function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture");
    if (document.getElementById("big_image")) {
        var eventElement = eventObj.target;
        var imageNameParts = eventElement.id.split("_");
        var src = "img/gallery/big/" + imageNameParts[1] + ".png";
        document.getElementById("big_image").src = src;
    } else {
        appDiv.innerHTML = "";
        var eventElement = eventObj.target;
        var imageNameParts = eventElement.id.split("_");
        var src = "img/gallery/big/" + imageNameParts[1] + ".png";
        var imageDomElement = document.createElement("img");
        imageDomElement.src = src;
        imageDomElement.setAttribute("id", "big_image");
        appDiv.appendChild(imageDomElement);

        // добавляем стрелочки к большому изображению
        var arrow = document.createElement("div");
        arrow.innerText = "⮜";
        arrow.className = "arrow";
        arrow.addEventListener("click", slidePrevious);
        appDiv.insertBefore(arrow, imageDomElement);

        arrow = document.createElement("div");
        arrow.innerText = "⮞";
        arrow.className = "arrow";
        arrow.addEventListener("click", slideNext);
        appDiv.appendChild(arrow);
    }
}
window.onload = init;

function slidePrevious() {
    let sourceOld = document.getElementById("big_image").src.slice(-5, -4);
    let source =
        sourceOld == 1
            ? "img/gallery/big/" + (+sourceOld + 2) + ".png"
            : "img/gallery/big/" + (+sourceOld - 1) + ".png";
    document.getElementById("big_image").src = source;
}
function slideNext() {
    let sourceOld = document.getElementById("big_image").src.slice(-5, -4);
    let source =
        sourceOld == 5
            ? "img/gallery/big/" + (+sourceOld - 2) + ".png"
            : "img/gallery/big/" + (+sourceOld + 1) + ".png";
    document.getElementById("big_image").src = source;
}
function toggleInfo(infoId) {
    const infoElement = document.getElementById(infoId);
    if (infoElement.style.display === "block") {
        infoElement.style.display = "none";
    } else {
        infoElement.style.display = "block";
    }
}

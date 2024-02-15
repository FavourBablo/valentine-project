let isOpened = false;

function openEnvelope() {
    if (!isOpened) {
        document.getElementById("flap").style.animation = "openFlap 1s forwards";
        document.getElementById("message").classList.remove("hidden");
        document.getElementById("openBtn").style.display = "none";
        isOpened = true;
    }
}

function showNextPage() {
    // Add logic for the next page if needed
    alert("Next page content goes here!");
}

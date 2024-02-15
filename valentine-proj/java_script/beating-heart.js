let isHeartbeatOn = false;

function toggleHeartbeat() {
    const heart = document.querySelector('.heart');
    isHeartbeatOn = !isHeartbeatOn;

    if (isHeartbeatOn) {
        heart.style.animation = "heartbeat 1s infinite";
    } else {
        heart.style.animation = "none";
    }
}


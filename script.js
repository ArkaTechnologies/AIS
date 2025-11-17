let count = 5;

let timer = setInterval(() => {
    count--;

    if (count > 0) {
        document.getElementById("count").innerText = count;
    } else {
        // Hide the counter when 0 reached
        document.getElementById("count").innerText = "";
    }

    // Direct redirect when count = 0
    if (count === 0) {
        clearInterval(timer);

        window.location.href = "index.html";   // direct redirect
    }
}, 1000);
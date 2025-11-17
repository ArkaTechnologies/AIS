function showAIS() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("ais-screen").classList.remove("hidden");
}

function showRegister() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("register-screen").classList.remove("hidden");
}

function goBack() {
    document.getElementById("ais-screen").classList.add("hidden");
    document.getElementById("register-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}

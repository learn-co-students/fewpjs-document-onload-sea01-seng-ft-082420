document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#text").textContent = "This is really cool!"
})

console.log("The DOM has not loaded yet. This console log fired as soon as index.html started to load, before DOMContentLoaded is triggered.")
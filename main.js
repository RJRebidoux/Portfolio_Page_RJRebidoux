function fadeInBackground() {
    const background = document.querySelector("#contact");
    const windowHeight = window.innerHeight;

    const scrollTop = window.scrollY;
    const offsetTop = background.offsetTop;

    const visibleHeight = windowHeight + scrollTop - offsetTop;
    const totalHeight = background.offsetHeight;

    const opacity = Math.max(0, Math.min(visibleHeight / totalHeight, 1));
    background.style.opacity = opacity;
}

window.addEventListener("scroll", fadeInBackground);

function submitButton() {
    alert("Unfortunately I haven't set this up to receive messages yet but I appreciate the attempt 😊");
}





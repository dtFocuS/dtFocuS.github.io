document.addEventListener("DOMContentLoaded", () => {
    main();
})

function main() {
    setInterval(switchText, 2000);
}

function switchText() {
    
    let infoSection = document.querySelector(".center-info");
    let cur = infoSection.querySelector('p');
    let word = cur.querySelector('span');
    if (word.textContent === "hello") {
        word.textContent = "world";
    } else {
        word.textContent = "hello";
    }
}


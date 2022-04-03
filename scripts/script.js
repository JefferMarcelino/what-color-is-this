const colorDiv = document.querySelector(".color")
const buttons = document.querySelectorAll("button")
const main = document.querySelector("main")
const paragraph = document.createElement("p")
main.appendChild(paragraph)

var colors = ["red", "blue", "yellow", "green"]

buttons.forEach(button => {
    button.addEventListener("mouseenter", (e) => {
        do {
            var color = Math.floor(Math.random() * 4)
        } while(colors[color] === e.target.classList[0])
        colorDiv.style.backgroundColor = `${colors[color]}`
    })
})

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        paragraph.innerHTML = `Wrong! Try again.`
    })
})
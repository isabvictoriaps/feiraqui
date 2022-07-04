const html = document.querySelector("html")
const checkbox = document.querySelector("input")

const getStyle = (html, variavelCSS) => 
    window.getComputedStyle(html).getPropertyValue(variavelCSS)

// PEGAR CORES
const initialColors = {
    body: getStyle(html, "--body"),
    text: getStyle(html, "--text"),
    box: getStyle(html, "--box")
}

// MUDAR CORES AQUI
const darkMode = {
    body: "#333333",
    text: "#fff",
    box: "none",
}

const tranformKey = key => "--" + key.replace(/([A-Z])/).toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(tranformKey(key), colors[key])
    )
}

const changeIcon = () => {
    if (document.querySelector("#toggle-icon").className == "fa-solid fa-moon") {
        document.querySelector("#toggle-icon").className = "fa-solid fa-sun"
    } else document.querySelector("#toggle-icon").className = "fa-solid fa-moon"
}

let ligado = false

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
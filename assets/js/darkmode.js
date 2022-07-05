const html = document.querySelector("html")
const checkbox = document.querySelector("input")

const getStyle = (html, variavelCSS) => 
    window.getComputedStyle(html).getPropertyValue(variavelCSS)

// PEGAR CORES
const initialColors = {
    body: getStyle(html, "--body"),
    text: getStyle(html, "--text"),
    box: getStyle(html, "--box"),
    container: getStyle(html, "--container")
}

// MUDAR CORES AQUI
const darkMode = {
    body: "#333333",
    text: "#fff",
    box: "none",
    container: "#202425"
}

const tranformKey = key => "--" + key.replace(/([A-Z])/).toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(tranformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
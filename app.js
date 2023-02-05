const cols = document.querySelectorAll(".col")

function setRandomColors() {
    cols.forEach((col) => {
        const text = col.querySelector('h2')
        let color = genereteRandomColor()
        text.textContent = color
        col.style.background = color
    })
}

function genereteRandomColor() {
    const hexCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}
    


setRandomColors()
genereteRandomColor()
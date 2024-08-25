function solve() {
    let x = prompt("x ga qiymat kiriting")
    let y = prompt("y ga qiymat kiriting")

    if (x < 0 && y > 0) {
        document.getElementById("demo").innerHTML = "bu nuqta 2-chorakda yotadi"
    }

    else if (x == 0 && y == 0) {
        document.getElementById("demo").innerHTML = "bu nuqta koordinatalar boshida yotadi"
    }

    else {
        document.getElementById("demo").innerHTML = "bu nuqta 2-chorakda yotmaydi"
    }
}
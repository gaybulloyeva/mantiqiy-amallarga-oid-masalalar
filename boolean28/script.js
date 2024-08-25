function solve() {
    let x = prompt("x ga qiymat kiriting")
    let y = prompt("y ga qiymat kiriting")

    if (x > 0 && y > 0 || x < 0 && y < 0) {
        document.getElementById("demo").innerHTML = "bu nuqta 1 yoki 3-chorakda yotadi"
    }

    else if (x == 0 && y == 0) {
        document.getElementById("demo").innerHTML = "bu nuqta koordinatalar boshida yotadi"
    }

    else {
        document.getElementById("demo").innerHTML = "bu nuqta 1-chorakda ham 3-chorakda ham yotmaydi"
    }

}
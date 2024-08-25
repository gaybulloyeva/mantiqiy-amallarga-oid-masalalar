function solve() {
    let a = prompt("a ga qiymat kiriting")
    let b = prompt("b ga qiymat kiriting")
    let c = prompt("c ga qiymat kiriting")

    let gipo1 = +(a ** 2) + +(b ** 2)
    gipo1 = Math.sqrt(gipo1)

    let gipo2 = +(c ** 2) + +(b ** 2)
    gipo2 = Math.sqrt(gipo2)

    let gipo3 = +(a ** 2) + +(c ** 2)
    gipo3 = Math.sqrt(gipo3)

    if (a != 0 && b != 0 && c != 0 && a > 0 && b > 0 && c > 0) {
        if (c == gipo1 || a == gipo2 || b == gipo3) {
            document.getElementById("demo").innerHTML = a + ", " + b + ", " + c + "tomonli uchburchak to'g'ri burchakli uchburchak"
        }

        else {
            document.getElementById("demo").innerHTML = a + ", " + b + ", " + c + "tomonli uchburchak to'g'ri burchakli uchburchak emas"
        }
    }

    else {
        document.getElementById("demo").innerHTML = "uchburchak yasab bo'lmaydi"
    }
}
function solve() {
    let a = prompt("a ga qiymat kiriting")
    let b = prompt("b ga qiymat kiriting")
    let c = prompt("c ga qiymat kiriting")

    if (a != 0 && b != 0 && c != 0 && a > 0 && b > 0 && c > 0) {
        if (a == b || b == c || c == a) {
            document.getElementById("demo").innerHTML = a + ", " + b + ", " + c + "tomonli uchburchak teng yonli uchburchak"
        }

        else {
            document.getElementById("demo").innerHTML = a + ", " + b + ", " + c + "tomonli uchburchak teng yonli uchburchak emas"
        }
    }

    else {
        document.getElementById("demo").innerHTML = "uchburchak yasab bo'lmaydi"
    }
}
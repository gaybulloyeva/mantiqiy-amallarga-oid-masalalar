function solve() {
    let a = prompt("a ga qiymat kiriting")
    let b = prompt("b ga qiymat kiriting")
    let c = prompt("c ga qiymat kiriting")

    let sum1 = +a + +b
    let sum2 = +c + +b
    let sum3 = +a + +c

    if (a != 0 && b != 0 && c != 0 && a > 0 && b > 0 && c > 0) {
        if (a < sum2 || b < sum3 || c < sum1) {
            document.getElementById("demo").innerHTML = a + ", " + b + ", " + c + "tomonlardan uchburchak yasash mumkin"
        }

        else {
            document.getElementById("demo").innerHTML = a + ", " + b + ", " + c + "tomonlardan uchburchak yasash mumkin emas"
        }
    }

    else {
        document.getElementById("demo").innerHTML = "uchburchak yasab bo'lmaydi"
    }
}
function solve() {
    let A = prompt("butun sonni kiriting")
    let B = prompt("butun sonni kiriting")
    let C = prompt("butun sonni kiriting")

    let D = (B ** 2) - 4 * A * C

    if (A != 0) {
        if (D >= 0) {
            document.getElementById("demo").innerHTML = A + "x²" + "+" + B + "x" + "+" + C + "=0 kvadrat tenglama haqiqiy ildizga ega"
        }

        else {
            document.getElementById("demo").innerHTML = A + "x²" + "+" + B + "x" + "+" + C + "=0 kvadrat tenglama haqiqiy ildizga ega emas"
        }
    }

    else {
        document.getElementById("demo").innerHTML = "Error"
    }

}
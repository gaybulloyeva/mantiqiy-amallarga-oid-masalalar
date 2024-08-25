function solve() {
    let A = prompt("butun sonni kiriting")
    let B = prompt("butun sonni kiriting")
    let C = prompt("butun sonni kiriting")

    if (A > 0 && B > 0 && C > 0) {
        document.getElementById("demo").innerHTML = A + " " + B + " va " + C + " musbat"
    }

    else {
        document.getElementById("demo").innerHTML = "barchasi musbat emas"
    }


}
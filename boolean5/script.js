function solve() {
    let A = prompt("butun sonni kiriting")
    let B = prompt("butun sonni kiriting")



    if (A >= 0 && B <= 2) {
        document.getElementById("demo").innerHTML = "True"
    }

    else {
        document.getElementById("demo").innerHTML = "False"
    }
}
function solve() {
    let A = prompt("butun sonni kiriting")
    let B = prompt("butun sonni kiriting")
    let C = prompt("butun sonni kiriting")



    if (A <= B && B <= C && A <= C) {
        document.getElementById("demo").innerHTML = "True"
    }

    else {
        document.getElementById("demo").innerHTML = "False"
    }
}
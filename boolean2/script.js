function solve() {
    let A = prompt("butun sonni kiriting")
    let result = A % 2

    if (result == 0) {
        document.getElementById("demo").innerHTML = A + " soni juft"
    }

    else {
        document.getElementById("demo").innerHTML = A + " soni toq"
    }
}
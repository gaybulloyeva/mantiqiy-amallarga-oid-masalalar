function solve() {
    let A = prompt("butun sonni kiriting")

    if (A > 0) {
        document.getElementById("demo").innerHTML = A + " soni musbat"
    }

    else {
        document.getElementById("demo").innerHTML = A + " soni manfiy"
    }

    if (A == 0) {
        document.getElementById("demo").innerHTML = "son= " + A
    }
}
function solve() {
    let A = prompt("butun sonni kiriting")

    let yuzlar = A.slice(0, 1)
    let unlar = A.slice(1, 2)
    let birlar = A.slice(2, 3)

    if (A > 99 && A <= 999) {

        if (yuzlar != unlar && unlar != birlar && birlar != yuzlar) {
            document.getElementById("demo").innerHTML = "Barcha raqamlar xar xil"
        }

        else {
            document.getElementById("demo").innerHTML = "Bazi bir raqamlar bir biriga teng"
        }
    }

    else {
        document.getElementById("demo").innerHTML = "3 xonalik son kiriting"
    }


}
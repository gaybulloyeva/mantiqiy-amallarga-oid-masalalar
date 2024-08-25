function solve() {
    let A = prompt("butun sonni kiriting")

    let yuzlar = A.slice(0, 1)
    let unlar = A.slice(1, 2)
    let birlar = A.slice(2, 3)

    if (yuzlar != 0) {

        if (A > 99 && A <= 999) {

            if (yuzlar < unlar && unlar < birlar && yuzlar < birlar) {
                document.getElementById("demo").innerHTML = "Barcha raqamlar ketma-ket o'suvchi"
            }

            else {
                document.getElementById("demo").innerHTML = "raqamlar ketma-ket o'suvchi emas"
            }
        }

        else {
            document.getElementById("demo").innerHTML = "3 xonalik son kiriting"
        }
    }
    else {
        document.getElementById("demo").innerHTML = "yuzlar xonasiga 0 kiritdingiz!"
    }


}
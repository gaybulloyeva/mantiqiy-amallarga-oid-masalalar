function solve() {
    let A = prompt("butun sonni kiriting")

    let yuzlar = A.slice(0, 1)
    let unlar = A.slice(1, 2)
    let birlar = A.slice(2, 3)

    if (yuzlar != 0) {

        if (A > 99 && A <= 999) {

            if (yuzlar == birlar) {
                document.getElementById("demo").innerHTML = "o'ngdan o'qisak ham chapdan o'qisak ham bir xil"
            }

            else if (yuzlar == unlar && unlar == birlar & birlar == yuzlar) {
                document.getElementById("demo").innerHTML = "o'ngdan o'qisak ham chapdan o'qisak ham bir xil"
            }

            else {
                document.getElementById("demo").innerHTML = "o'ngdan o'qisak ham chapdan o'qisak ham bir xil emas"
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
let number1 = 0;
let number2 = 0

function calculator() {
    number1=prompt("אנא הכנס את המספר הראשון");
    number2=prompt("אנא הכנס את המספר השני");
    let modulu = number1 % number2;

    if (modulu != 0) {
        alert("יש שארית" + " - " + modulu)
    } else {
        alert("אין שארית");
    }

}
let clearScreen = () => {

    document.getElementById('resultScreen').value = '';
    document.getElementById('showHistory').value = '';

}

let display = (value) => {
    // console.log(`data type of variable value is: ${typeof value}`);
    // value = document.getElementById('resultScreen').value;
    // console.log(`data type of variable value is: ${typeof value}`); ///string


    document.getElementById('resultScreen').value += value;  //string + number=string
    document.getElementById('showHistory').value += value;
}

let calculate = () => {
    let result = document.getElementById('resultScreen').value;
    document.getElementById('resultScreen').value = eval(result);
    document.getElementById('showHistory').value += " = " + eval(result);

}
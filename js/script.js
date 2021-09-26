let history = ""; //to store the history;

let clearScreen = () => {
  document.getElementById("resultScreen").value = "";
  document.getElementById("showHistory").value = "";
};

let display = (value) => {
  // console.log(history);
  // console.log(`data type of variable value is: ${typeof value}`);
  // value = document.getElementById('resultScreen').value;
  // console.log(`data type of variable value is: ${typeof value}`); ///string

  let ops = ["+", "-", "/", "*", "."];

  // check for the correct expression like  5+2 ...not 5++2

  if (
    (ops.includes(value) && history === "") ||
    (ops.includes(value) && ops.includes(history.slice(-1)))
  ) {
    // alert('yes');
    alert("not a valid expression");
    return;
  }

  //adding value to the history
  history += value;
  // alert(history);

  document.getElementById("resultScreen").value += value; //string + number=string

  document.getElementById("showHistory").value += value;
};

let calculate = () => {
  let result = document.getElementById("resultScreen").value;
  document.getElementById("resultScreen").value = eval(result);
  document.getElementById("showHistory").value += " = " + eval(result);
};

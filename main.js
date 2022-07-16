const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  // document.div.classList.toggle('black')
});
// Calculator try build
/*
const calc = () => {
  let a = parseInt(document.querySelector("#value1").value);
  let b = parseInt(document.querySelector("#value2").value);
  let ope = document.querySelector("#operator").value;
  let calculate = "";

  if (ope == "add") {
    calculate = a + b;
  } else if (ope == "sub") {
    calculate = a - b;
  } else if (ope == "div") {
    calculate = a / b;
  } else if (ope == "mul") {
    calculate = a * b;
  }else{
  calculate = 0
  }
   switch (ope) {
    case "add":
      calculate = value1 + value2;
      break;
    case "sub":
      calculate = value1 - value2;
      break;
    case "div":
      calculate = value1 / value2;
      break;
    case "mul":
      calculate = value1 * value2;
    default:
      calculate = "'not a number";
      break;
  } 
  document.querySelector("#result").innerHTML = calculate;
};
*/

// 28 -6 - 2022

// practive debugging && arrays with function 
const date1 = [17,23,25]

const printForcast = function(arr){
  let str = '';
  for(let i = 0; i < arr.length; i++){
    str = str + `${arr[i]}°C in ${i + 1} days`
  }
  console.log(str);
}
printForcast(date1)

// challenge 01
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 7, 4, 33]);
console.log(amplitude);

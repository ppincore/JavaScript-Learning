function logHello() {
  console.log("Privet");
}
logHello();

function logMessage(message, count = 1) {
  for (let i = 0; i < count; i++) {
    console.log(message);
  }
}
logMessage("Привет");
logMessage("Привет", 3);
logMessage("Привет", 9);

function sum (a,b){
    return a+b
}
const result = sum(2,3)
console.log(result) 

let age = Number(prompt('Введите возраст'))

function getAgeType(age){
    
    if(typeof age ==  NaN ||typeof age == undefined)
    {
        return 'Age incorrect'
    }

    if(age < 1 || age > 125)
        {
            return 'please put ur real age'
        }
    if(age < 18)
    {
        return 'get out '
    }
    return 'welcome'
}
console.log(getAgeType(age))





// let test = Number("w")
// if(test == NaN)
// {
//     return 'Это не число '
// }
// console.log(test)

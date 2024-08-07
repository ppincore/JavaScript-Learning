// function logHello() {
//   console.log("Privet");
// }
// logHello();

// function logMessage(message, count = 1) {
//   for (let i = 0; i < count; i++) {
//     console.log(message);
//   }
// }
// logMessage("Привет");
// logMessage("Привет", 3);
// logMessage("Привет", 9);

// function sum (a,b){
//     return a+b
// }
// const result = sum(2,3)
// console.log(result)

// let age = Number(prompt('Введите возраст'))

// function getAgeType(age){

//     if(typeof age ==  NaN ||typeof age == undefined)
//     {
//         return 'Age incorrect'
//     }

//     if(age < 1 || age > 125)
//         {
//             return 'please put ur real age'
//         }
//     if(age < 18)
//     {
//         return 'get out '
//     }
//     return 'welcome'
// }
// console.log(getAgeType(age))

// let test = Number("w")
// if(test == NaN)
// {
//     return 'Это не число '
// }
// console.log(test)

// let name = 'Andrey'
// let city = 'Moscow'

// const user = {
//   name,
//   city,
// }

// console.log(user)

// const obj = {
//   isDeveloper: true,
//   age: 32,
// }
// for( const key in obj){
//   console.log(obj[key])
// }

// console.log(obj)

// console.log( 'isDeveloper' in obj)

// const obj1 = {
//   name: "Alex",
//   age: 58,
//   school:{
//     number: 38,
//     city: 'Moscow'
//   }
// };

// const obj2 = {
//   name: "Alex",
//   age: 58,
//   school:{
//     number: 38,
//     city: 'Moscow'
//   }
// };

// const areObjectsEqual = (object1, object2) => {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key in obj1){
//     const value1 = obj1[key]
//     const value2 = obj2[key]
//     const areValuesObjects = 
//       typeof value1 === 'object' && typeof value2 === 'object'
     
//       if (areValuesObjects) {
//         if (!areObjectsEqual(value1, value2)) {
//           return false
//         } else {
//           continue
//         }
//         }

//     if ( value1 !== value2)
//     {
//       return false
//     }
//   }
  
//  return true
// };
// console.log(`Равны ли объекты?`, areObjectsEqual(obj1, obj2))
let str = 'hello'
console.log(str.split('').reverse().join(''))
//  Uses -> 
// 1. Module Design Pattern
// 2. Currying
// 3. Function like once 
// 4. Memoize
// 5. Maintaining State in async 🌍
// 6. setTimeout
// 7. Iterator

// 3. Currying : ->
// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 
// Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function. 
// That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3)

// Example : -> 
// Noncurried version//
// const add = (a, b, c)=>{
//     return a+ b + c
// }
// console.log(add(2, 3, 5)) // 10

// Curried version//
// const addCurry =(a) => {
//     return (b)=>{
//         return (c)=>{
//             return a+b+c
//         }
//     }
// }
// console.log(addCurry(2)(3)(5)) // 10
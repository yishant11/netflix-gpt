// Define ->
// when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable).

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//     console.log(a);
//     console.log(b);
//     console.log(c);

// OUTPUT:
// 10
// 20
// 30
// 10

// Shadowing in JS ->
 //variation 1 ->

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// variation 2 ->

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

//output:
// 10
// 20
// 30
// 10

// var b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);
//output : ->
// 10
// 20
// 30
// 100

// var c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(c);
//output :
// 10
// 20
// 30
// 100

// Shadowing

// var c = 100;
// function x(){
//     var c=30;
//     console.log(window.c);
//     window.c = 20;
// }
// x();
// console.log(c);
 //output : ->
//  100 
//  20

// Illegal Shadowing
// let a = 20;
//    {
//     var a = 20;
//    }
// Identifier 'a' has already been declared.

// U can shadow let using let 
//  let a = 20;
//   {
//     let a = 20;
//   }

// It is also valid .
//   var a = 20;
//    {
//     var a = 20;
//    }

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//  In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    y();
}
x();


// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() { //displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  
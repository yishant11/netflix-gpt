// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste");
// }
// x();
// Output:
// Namaste
// 1(after 3 second)


// function x(){
//     for(var i=1 ; i<=5 ;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i * 2000);
// }
//     console.log("Namaste");
// }
// x();
//Output:->
//Javascript
// 6
// 6
// 6
// 6
// 6


// Q -> Do with let
function x(){
    for(let i=1 ; i<=5 ;i++){
    setTimeout(function(){
        console.log(i);
    },i * 2000);
}
    console.log("Namaste");
}
x();
// Output:->
// Javascript
// 1
// 2
// 3
// 4
// 5

// Interview Q -> Do with var and Closure
// Ans -> Using Closure we created a new copy of x everytime when setTimeout is called
function x(){
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function (){
                console.log(x);
            },x * 1000);
        }
        close(i);
    }
    console.log("Namaste")
}
x();
//Variation-1
function a(){
    console.log(b);
}
var b=10;
a();
//output -> 10

//Variation-2

function a(){
    function c(){
        console.log(b);
    }
}
var b=10;
a();
// output -> 10

//Variation -> 3

function a() {
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a();
// output -> 10

//Variation -> 4

function a() {
    var b = 10;
    c();
    function c(){
        
    }
}
a();
console.log(b);
// output -> Uncaught Reference Error : b is not defined


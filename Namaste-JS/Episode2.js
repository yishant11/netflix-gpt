// When a JS program is ran, a global execution context is created.
// The execution context is created in two phases.
// Memory creation phase - JS will allocate memory to variables and functions.
// Code execution phase
//Let's consider the below example and its code execution steps:

var n = 2;
function square(num) {
 var ans = num * num;
 return ans;
}
var square2 = square(n);
var square4 = square(4);


// The very first thing which JS does is memory creation phase, so it goes to line one of above code snippet,
// and allocate a memory space for variable 'n' and then goes to line two, and allocates a memor 28/12/2023, 12:01 y space
// for function 'square'. When allocating memory for n it stores 'undefined', a special value for 'n'. For
// 'square', it stores the whole code of the function inside its memory space. Then, as square2 and
// square4 are variables as well, it allocates memory and stores 'undefined' for them, and this is the end of first
// phase i.e. memory creation phase.
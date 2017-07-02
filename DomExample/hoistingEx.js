
// in hoisting a variable can be used before it has been declared.

//hoisting applies to variable declaration.

/* x=5; //javascript autommatically declare var x; at the top of code.
console.log(x);
var x;//declare here


var x=5;
console.log(x);
*/



//hoisting perform here.
/*x=5;
y=7;
console.log(x +" "+y);


*/
//only variable can be declared after used , not intialised
/*x=5;
var y;
console.log(x+ " "+y); //output- 5 undefined because intialisation must be before use of variable.
y=7;
*/

//hoisting applies to function declaration
add();
function add(a,b ){
return a+b;
}
console.log(add(3,5));


/*print;
   var print=function(){
   console.log("hoisting");
 }*/

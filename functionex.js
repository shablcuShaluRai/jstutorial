
// function functionname
/*function add(a,b){
  return a+b;
}
console.log(add(5,4));
*/



//function can be defined as expression and also store in a variable
/*var sum = function(a,b){
  return a+b;
}
//var x=sum(13,14);
console.log(sum(4,13));
//console.log(x);
*/


// function can be defined as javascript built in function constructor.
//var subtract= new Function("a","b","return a-b")
//console.log(subtract(7,5));


// function hoisting: can be called before declaration
console.log(add(3,4));
function add(a,b){
return a+b;
}

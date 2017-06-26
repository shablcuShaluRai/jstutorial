
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
/*console.log(add(3,4));
function add(a,b){
return a+b;
}*/

// invoke function itself
/*(function () {
    var x = "Hello!!";
    console.log(x);
})();
*/
// max method

/*function max(){
var i;
var max = -Infinity;
//argument object  contains an array of the argument used  when the function was called.
for (var i = 0; i < arguments.length; i++) {
  if(arguments[i]>max)
  max=arguments[i];
}
return max;
}
console.log(max(2,4,6));

*/

/*function min(){
var i;
var min = Infinity;
//argument object  contains an array of the argument used  when the function was called.
for (var i = 0; i < arguments.length; i++) {
  if(arguments[i]<min)
  min=arguments[i];
}
return min;
}
console.log(min(2,4,6));
*/


//With call(), you can write a method once and then inherit it in another object,
// without having to rewrite the method for the new object.

var  person = {
  fname:"shalu",
  lname:"rai",
  fullname:function(){
    return this.fname + " " +this.lname;
  }
}

var friend ={
  fname: " john",
  lname: " kali"
}

console.log(person.fullname.call(friend));

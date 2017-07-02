


//object example
/*var person={fname:"shalu",
lname: "rai",
age:22};
console.log(person.fname +" "+person.lname);
*/

//object example using new keyword
/*var person = new Object();
person.fname="shaloo";
person.lname="rai";
person.age=22;
console.log(person.fname+" "+person.age );
*/

//using object an constructer

function person(fname,lname,age){
  this.fname=fname;
  this.lname=lname;
  this.age=age;
}
//prototype allows to add new properties in existing properties
//person.prototype.nationality="indian";
person.prototype.fullname = function () {
  return this.fname +" "+this.lname

};
var myself=new person("shalu","rai",22);
//myself.nationality="indian";
//console.log(myself.nationality);
//console.log(myself.age);
console.log(myself.fullname());




/*//object using loop
var person={fname:"shalu",
lname: "rai",
age:22};
 var text="";
for(key in person){
  text+=person[key]+" ";
}
console.log(text);*/


/*var person={fname:"shalu",
lname:"rai",
age:22,
fulldetail:function() {
return this.fname + " "+ this.lname+ " "+this.age;
}
};

console.log(person.fulldetail());*/

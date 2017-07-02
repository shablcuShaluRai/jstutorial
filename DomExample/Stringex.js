
//javascript string

//declaraing string
//var name="shalu";
//console.log(name);

//Escaping characters \"....\"

//console.log("hey! \" you can do it\"");
//it will print in single quote 'i can learn it'.
//console.log("hey!\'i can learn it \'");


//"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."
//console.log("The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster.");


////comparing string:it is case sensitive
//var x="Yes";
//var y="yes";
//console.log(x==y);


//string index
/*var index=0;
var str="djfklfairdkfrjinfifnghgkg";
var len=str.length;
console.log("total lenght of string "+len);
while (index<len) {
  console.log(index,str[index]);
  index++;

}*/

//string object
var name="shalu";
console.log(typeof name); //string
var name1=new String("shalu");
console.log(typeof name1);//object
console.log(name==name1);//returns true because it has same value
console.log(name===name1);//it returns false, because operator checks the type and value both.

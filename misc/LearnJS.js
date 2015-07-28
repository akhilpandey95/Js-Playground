"use strict"; // this means we are declaring the strict mode
"allow pasting"

function show(args) {
  console.log(args);
}

// Loops --start

/* For/In loops */
var data = {
  foo : "foo",
  bar : "bar",
  foo1 : "foo1",
  bar1 : "bar1"
};

var store = "";
for(var x in data) {
  store += data[x];
}

// Loops --stop

// Number Methods  -- start

var foo = 9059556034;
var bar = 9.123456;

show(foo.toString()); // The number is converted to String
show(bar.toExponential(2)); // A string is returned and rounded using exponential notation
show(bar.toFixed(4)); // rounds off the number to specific decimals
show(bar.toPrecision(2)); // Rounds off with specific length

show(parseInt("18000 is my first money")); // returns 18000
show(parseInt("the first time i gave 10 rupees")); // returns NaN

// Number Methods --stop

// String Methods --start
var foo_string = "Do you think foo and bar will work";
var bar_string = "Bar is the best way to represent test statements and arguments, but bar is best";

/*
  String methods in Js = {
   string.indexOf("stringname");
   string.lastIndexOf("stringname");
   string.search("stringname");
   string.slice(begin, end);
   string.substring(begin, end);
   string.substr(begin, end);
   
   NOTE : If we observe properly the methods string.indexOf() and string.search() are almost one
   and the same.In the method string.search() we are actually identifying strings inside strings.
   
   TIP(string.slice()) : The method string.slice() essentially extracts part of a string and returns the new string
   which is sliced. The general notation for using the string.splice method is string.slice(pos1, pos2) where in 
   pos1 is the position of the starting index and pos2 is the position of ending index. The point to be noted here is
   if we use the string.slice() method by passing negative parameters then it ends up counting and extracting the 
   string from the end to the start. And if we donot pass the second parameter the method extracts the rest of the 
   string.
   
   TIP(string.substring()) : The method string.slice() and string.substring() fall into the same category of methods 
   that can be used for extracting part or parts of string from the source string. The difference in both is that we
   cannot use negative indexes when using the method string.substring(). For example if we pass on a negative index 
   to the method like string.substring(-7,-1) then it essentially doesnot pipe out any error indicating the mistake 
   made for using negative index but displays the string as a whole.
   
   
  }
*/

show(foo_string.indexOf("bar")); // return the index position of string bar
show(bar_string.lastIndexOf("bar")); // returns the last index position of the string bar 
show(bar_string.search("arguments")); // returns the position where it has found the index of arguments
show(foo_string.slice(1, 7)); // returns the string "o you"
show(foo_string.slice(-7, -1)); // returns the string "ll wor"
show(bar_string.slice(1)); // returns "ar is the best way to represent test statements and arguments, but bar is best"
show(bar_string.slice(7)); // returns "the best way to represent test statements and arguments, but bar is best"
show(foo_string.substring(1,7)); // returns the string "o you"
show(foo_string.substring(-7, -1)); // returns "" but in front end would show the entire string.
show(bar_string.toLowerCase()); // returns the lowercase of the input string
show(bar_string.toUpperCase()); // returns the uppercase of the input string

// String Methods --stop

// Objects --start
/*
  In Js = {
    "Booleans can be objects",
    "Numbers can be objects",
    "Strings can be objects",
    "Dates are always objects",
    "Maths are always objects",
    "Regular Expressions are always objects"
    "Arrays are always objects",
    "Functions are alaways objects",
    "Objects are objects"
  }
  So basically except the primitive values all are objects in Js
  
  Objects.create = {
    "Option1" : "Define and create an object using an Object literal."
    "Option2" : "Define and create an object using an keyword new."
    "Option3" : "Define an object constructor and then create objects of its type."
  }
  
  Object.property.deletion = {
    "Option1" : "Use the keyword 'delete' in order to delete a property of an object"
  }
  
  Note : The delete keyword is used for operations performed on objects,
  so using it on variables and functions doesn't really matter.
  
  "TIP" : Javasctipt objects are mutable which means that they are referenced by address
  and not value. For instance if 'master' is an object and 'master-backup' is also another
  object then if we pass the objects then changing one might result in changing the other 
  object also.
    {
     var master = {foo : "foo"};
     var master-backup = master;
     master.backup.bar = "bar"; // this changes master.bar and master-backup.bar
    }
    
   Object.access.property = {
    "Option1" : "we can use objectName.propertyName",
    "Option2" : "Either we can write objectName[propertyName]"
   }
*/

// creating an oject using an Object literal
var staff = {
  name : "somename",
  branch : "somebranch",
  salary : "somesalary",
  age : 20
};

// creating an object using new keyword 
var admin = new Object();
admin.name = "somename";
admin.department = "somedept";
admin.userid = 123;
admin.age = 20;

// creating an object using the object constructor
function student(name, github_nick, url, age) {
  this.name = name;
  this.github = "https://github.com/" + github_nick;
  this.url = url;
  this.age = age;
}

// using the constructor for the above defined Object
var akhil = new student("Akhil Pandey", "AkhilHector", "https://www.akhilhector.com", "20");

show(akhil.github); // accessing object methods
show(akhil.url);

/* Using the prototype property */
student.prototype.show = function() {
  return this.name + " " + this.github + " " + this.age;
}

/* Adding methods to the prototype */
function student(name, github_nick, url, age) {
  this.name = name;
  this.github = "https://github.com/" + github_nick;
  this.url = url;
  this.age = age;
  this.show = function() {
    return this.name + " " + this.github + " " + this.age;
  }
}

// Objects --stop

// Good Practises --start

/* Closures in Javscript */
var a = 0;
function counter() {
  var i = 2;
  return i*i;
}

function counter1() {
  return a+= 1;
}

// this wont work as part of Js closures
function counter_foo() {
  var a = 0;
  a += 1;
}

// this also wont work as part of Js closures
function counter_bar() {
  var c = 0;
  function go() { c+= 1;}
  go();
  return counter;
}

// this will work as part of Js closures
var counter_closure = (function () {
  var incr;
  return function() {return incr+= 1;}
})();

show(counter1());
show(counter1());
show(counter1()); // since we are added the counter three times the value of a is set to 3.
show(counter_foo());
show(counter_foo());
show(counter_foo()); // this is similar to the above but doesnot set the value of a to 3, but returns undefined.
show(counter_bar());
show(counter_bar());
show(counter_bar()); // Neither this works which will always set the value to 1
show(counter_closure());
show(counter_closure());
show(counter_closure()); // Now this is called closures implementation in Js
/*
  Function Closures in Javascript is all about how are the variables being treated and 
  referred to in the local or global scope. In Js variables can be given :
    'local scope'
    'global scope'
  There is no inbuilt concept for something called private variables, so when there is 
  a requirement for such a scenario Closures are written in Js in order to make scope 
  for variables that are private in scope.
  
  Observing the functions 'counter1()', 'counter_foo()' and 'counter_bar()' there is a
  similarity that can be observed, Basically we can understand that closures are nothing 
  but self invoking functions in Js. Observe the example 'counter_closure()' where in we
  are calling the function thrice and hoping to increment the functional value each time 
  when we call the function. So this self invoking function runs only once but it increments
  the value each time it is called. The scope of the variable is protected by the anonymous 
  return function making us assume that this can be called implementation of private 
  variables in Js.
*/

/* Usage of Tail Calls */
function f(n) { 
  if(n == 0) {
    return 1;
  }
  else {
    return n * f(n-1);
  }
}

function f1(n) {
  function r(n, m) {
    if(n == 0) {
      return m;
    }
    else {
      return r(n-1, n*m);
    }
  }
  return r(n, 1);
}

/*
  Tail calls are nothing but essentially replacing the concept of recursive
  functions with loop. In a way this can not only save time but also saves 
  space i.e better time complexity and space complexity.
  
  Observing both the alogorithms above written for factorial we can understand
  that f() is the traditional recursive method used for finding the factorial,
  but f1() is the tail call optimized algorithm which is better and fast.
*/

/* Declaraions  */
var one = {};              // instead of var one = new Object();
var two = "";              // instead of var two = new String();
var three = 0;             // instead of var three = new Number();
var four = false;          // instead of var four = new Boolean();
var five = [];             // instead of var five = new Array();
var six = /()/;            // instead of var six = new RegExp();
var seven = function(){};  // instead of var seven = new function();

// Good Practices --stop

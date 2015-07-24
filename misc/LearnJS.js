"use strict"; // this means we are declaring the strict mode

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
for(x in data) {
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
  name = "somename",
  branch = "somebranch",
  salary = "somesalary",
  age = 20
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

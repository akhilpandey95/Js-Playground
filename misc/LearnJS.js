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
for(var x in data) {
	store += data[x];
}

// Loops --stop

// Number Methods  -- start

var foo = 9059556034;
var bar = 9.123456;

show(foo.toString()); 		// The number is converted to String
show(bar.toExponential(2));     // A string is returned and rounded using exponential notation
show(bar.toFixed(4)); 		// rounds off the number to specific decimals
show(bar.toPrecision(2)); 	// Rounds off with specific length

show(parseInt("18000 is my first money")); 		// returns 18000
show(parseInt("the first time i gave 10 rupees")); 	// returns NaN

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

// Array Methods -- start
var akhil = [] // creates an Array Object
var dummyakhil = new Array() // also creates an Array Object

var testarr1 = 3 // initialized a number to testarr1
var testarr2 = ["python", "javascript", "ec-252", 1, 2] // initialized an array to testarr2

/*
  As explained clearly in the good practices it is general paradigm that we
  must follow while creating or defining arrays. In the above array creation
  'akhil' and 'dummyakhil' are two Array Objects that are not containing any
  value, we can also refer to these as arrays that are only initialised but
  donot contain any value.
*/

/*
  Before diving deep into the Array Methods, in order to verify that whether
  an object is an array or not could be determined with the help of the 
  method Array.isArray(array_name).
*/

Array.isArray(testarr1) // displays false since typeof(testarr1) is 'number'
Array.isArray(testarr2) // displays true since typeof(testarr1) is an Array 'object'

akhil.push("akhil", "pandey", "hector", "someothername", "alsosomeothername")
akhil.push("yetanothername", "andthelastname")

var n = akhil.length

if((n > 0) && (akhil.indexOf("akhil")) >=0) {
        console.log("There exists a value akhil in the Array")
}
else {
        console.log("Nope the value akhil doesnot exist in the Array")
}

dummyakhil.push("one", "two", "three", "four", "five")
var one = dummyakhil.join()
var two = dummyakhil.toString()

if(one == two) {
        console.log("The Methods join() and toString() perform the same work")
}

/*
  Let us observe the methods which are part of the Array Object :
         Array.push(),
         Array.pop(),
         Array.indexOf(),
         Array.lastindexOf(),
         Array.concat(),
         Array.splice(),
         Array.shift(),
         Array.unshift(),
         Array.reverse(),
         Array.sort(),
         Array.map(),
         Array.filter(),
         Array.some(),
         Array.reduce(),
         Array.reduceRight(),
         Array.join(),
         Array.toString()
  All The methods are part of the powerful Array data structure and as mentioned above
  thess are part of the Array.prototype. But Before we dive in and discuss each and every
  method let us see if we can declare new methods of our own to the pre - existing Array
  Object.

  [TIP] : With the available list of the Array methods we can generally perform most of
  the operations, but if we require special methods or custom methods that must be part
  of the already existing Array Object then we define the method with by taking the concept
  of Object.prototype.
*/

// METHOD : Array.push() 
var arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1); // it prints [1,2,3,4,5,6]

/*
  Array.push() is just a mutator function for adding elements to the array. So 
  we can simply mention the element as an argument to the function Array.push()
  and the mentioned element would be added as the last element in the array.  
*/

// METHOD : Array.unshift()
var arr1 = [1, 2, 3, 4, 5];
str = "akhil pandey";
arr1.unshift(str);
console.log(arr1); // it prints ["akhil pandey", 1, 2, 3, 4, 5];

/*
  Array.unshift() falls into the same category as that of Array.push(), Since
  both of them are used as mutator functions for adding elements into an array.
  The only difference between both the methods is that if we pass an argument 
  to Array.unshift() then the element would be added as the first element of 
  the array.
  If we observe the above snippet we can see that the index of the element
  '1' is shifted to the next place and "akhil pandey" is added as the first
  element of the array. So unlike Array.push() this method should not be 
  misunderstood only for adding elements since it adds elements to the start
  of the Array.
*/

// METHOD : Array.pop()
var arr1 = [1, 2, 3, 4, 5];
arr1.pop();         // removes last element from the array
arr1.pop(23);       // removes last element despite giving the number as argument
arr1.pop("lol");    // removes last element despite giving the string as argument
console.log(arr1);  // it prints [1,2,3,4]

/*
  Array.pop() is just a simple mutator function for removing the last element
  of the array. So the method doesnot take arguments, Although if we try to 
  pass arguments it would not take them. It performs only the basic operation 
  of removing the last element of the Array.
*/

// METHOD : Array.shift()
var arr1 = [1, 2, 3, 4, 5, "akhil", "chandu", "varma", "kp", "adheeth"];
arr1.shift();
arr1.shift(123);
arr1.shift("lolagain");
console.log(arr1); // it prints [4,5,6,"akhil","chandu","varma","kp","adheeth"]

/* 
  Array.shift() is no different from the above mentioned method Array.pop(),
  although the major difference comes regarding the index of the element 
  that which is to be removed. It removes the first element of the array.
  Similar to Array.pop() this method also desnot take arguments and even
  though an argument is passed it continues to perform its operation.
*/

// METHOD : Array.splice()

// case 1 : 
var arr1 = [1, 2, 3, 4, 5];
nums = [6, 7, 8, 9, 10]
arr1.splice(5,0,nums)
console.log(arr1); // it prints [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

// case 2 :
var arr2 = ['one'];
arr2.splice(1,0, 'two', 'three', 'four', 'five');
console.log(arr2); // it prints ['one', 'two', 'three', 'four', 'five']

// case 3 :
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.splice(5,5);
console.log(arr3); // it prints [1, 2, 3, 4, 5]

/*
  Array.splice() has a varied set of operations that which could be 
  performed. If we observe case 1 we are adding elements to the array
  arr1 from the fifth index. Also if we observe in case 2, we can see
  that without assigning a variable the elements that which are to be 
  added are passed as continuous arguments.
  It is to be noted that splice can not only perform the action of 
  adding elements but it also does perform the action of removing 
  elements. In the function splice(), if we choose the value of the
  second argument to be '0' then elements would only be added from
  the specified index, although if the value is not '0' then number
  specified would be the number of elements that will be removed.
*/

// METHOD : Array.reverse()
var arr1 = [1, 'akhil', 'varma', 'chandu', 'adheeth'];
arr1.reverse();
console.log(arr1); // it prints ['adheeth', 'chandu', 'varma', 'akhil', 1]

/*
  Array.reverse() is just a mutator function that which is used to 
  reverse the order of elements in the array.
*/

// METHOD : Array.sort()
var arr1 = ['varma', 'chandu', 'akhil', 'adheeth'];
var arr2 = [5, 6, 2, 9, 23];
arr1.sort();
arr2.sort();
console.log(arr1); // it prints ['adheeth', 'akhil', 'chandu', 'varma']
console.log(arr2); // it prints [2, 5, 6, 9, 23]

/*
  Array.sort() is also another mutator function that which is used to 
  put the elements in order. Both strings and numbers can be sorted 
  using the Array.sort() method. The sorting takes place in ascending
  order, so if strings or characters are elements then depending on 
  the alphabetical scale, the sorting takes place.
*/

// METHOD : Array.forEach()
function cube(num) {
        console.log(num*num*num);
}

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(cube); 
/* it prints 
        1
        8
        27
        64
        125
        216
        343
        512
        729
        1000
*/

// Manipulating the Array Object by writing your own methods
var boo = []

Array.prototype.foo = function() {
        console.log("We write our method inside this block")
}

boo.foo() // returns whatever is included inside the above mentioned code block

/* Adding methods to Array.prototype essentially means that we are adding methods
 to the global array object. So an Array.prototype would actually mean that adding
 a new prototype to the existing Array object. So a better analogy can be explained
 with the below code snippet
*/

Array.prototype.union = function(bar) {
        var l = this.length;
        var n = bar.length;
        for(i=0; i<n; ++i) {
                this[l] = bar[i];
                l++;
        }
        console.log(this);
}

var a = ["one", "two"];
var b = ["three", "four", "five", "six", "seven"];
var c = [1, 2];
var d = [3, 4, 5, 6, 7];

a.union(b);
c.union(d);

/* Observing the Above array prototype if we can carefully observe it is nothing
 but a working replica of how the Array Method Array.prototype.concat() works. So
 in concat() method another array is passed as an argument to the method and the
 primary array concats and extends the array.

 Things to lookup in the above example are how custom methods can be written in
 order to suit the specific purpose to not only the Array prototype but also all
 the Javscript recognized objects such as the String, Number, Regexp or the Object
 itself.
*/

// Associative Arrays

/* Preferable this is somewhat a great part of the language although this has
 been an integral part of many programming languages like PHP and Python, there
 is a slight change to what it offers in other programming languages to this.

 [NOTE]: In Python it is not called or referred to as Associative arrays but it
 comes with the name Dictionaries.
*/

var a = [];
var b = [];

a["one"] = "boo this is my first item";
a["two"] = "foo this is my second item";
a["three"] = "alas this is final item";

b[0] = "oh not again the first item";
b[1] = "cant help with the second item";
b[3] = "finally got rid with the third item";


console.log(a); // would display the contents of the array 'a'
console.log(b); // would display the contents of the array 'b'

var len1 = a.length;
var len2 = b.length;
var len3 = Object.keys(a).length;

console.log(len1); // would display undefined
console.log(len2); // would display 3
console.log(len3); // would display 3

/* The above snippet is a classic case implementation of arrays with named
 indexes or the associative arrays. Implementation can be done as mentioned
 above and almost all array opertions except some can be performed very
 smoothly with named indexes. The problem arises when an array with named
 indexes is asked for its length. When 'Array.prototype.length()' method is
 referred it returns only the length of the array which has numberd index,
 if we use named indexes then it is no good because the indexes are strings
 but no longer numbers.

 In such a case if we need to return the length of the named indexed array
 then Object.keys(Arrayname).length would give the length of the array.The
 same is explained by taking three variables 'len1', 'len2', 'len3' where
 both 'len1', 'len3' store the lengths of a but 'len1' returns undefined
 and 'len3' returns 3 as the length of the array.
*/

// Array Methods -- stop

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

/* Function Executions */

// Example 1
function main() {
        var str = []
        str["one"] = "this is first statement"
        str["two"] = "this is second statement"

        for(x in str) {
                console.log(str[x])
        }
}

main();

// Example 2
(function main() {
        var arr = []
        arr["first"] = "this is first item"
        arr["second"] = "this is second item"

        for(x in arr) {
                console.log(arr)
        }
}()

/*
 Observing Example 1 and 2 we can observe two ways to execute a function,
 both the execution techniques are different in their own way but let us
 see the difference between the both.

 Example one shows how we are taught to execute functions in the native
 or the traditional way, but functions can also be executed in the form
 shown in Example two. The differnce there is main() in example one gets
 exectuted whenver it is called, but main() in example two is executed
 as soon as it processes the last line of code.

 [NOTE] : It is important to note that if we are using global variables
 in Example two then the code would results in a TypeError stating that
 the object is not a function. So when your code has global variables
 that are being referenced to inside the main or the calling function,
 then it is a must that the variable has to be declared inside the scope
 of that function.

 */
// Example one - execution with globals
var f = require('fs')

function main() {
        var str = []
        var data = f.readFileSync('one.txt', 'utf-8').toString().split("\n")
        for(i=0; i<data.length; ++i) {
                str[i] = data[i]
        }

        for(x in str) {
                console.log(str[x])
        }
}

main()

// Example two - execution with locals
(function main() {
        var f = require('fs')
        var str = []
        for(x=0; x<data.length; ++x) {
                str[x] = data[x]
        }

        for(x in str) {
                console.log(str[x])
        }
})()
/*
 [IMP] : We should not declare the variable 'f' before the main function
 as a global variable in example two, as said above it would result in a
 TypeError.
*/

/* Semicolons */

// Snippet one
var foo = {}

foo.code = "this is javascript empire"
foo.engine = "node 0.12.7"
foo.author = "akhil pandey"
foo.version = 0.1

// Snippet two
var bar = {};

bar.name = "akhil pandey";
bar.url = "www.akhilhector.com";
bar.github = "AkhilHector"
bar.age = 20;

if(typeof(bar) == typeof(foo)) {
        console.log("Semicolons donot matter at all")
}

/*
 Code Snippet one and two are the same. but the fundamental difference
 between both the code samples is that one uses semicolons in the lang-
 -uage semantics but whereas the other doesnot. Basically we are taught
 to use semicolons in languages such as C, C++, Java etc since lines of
 code are terminated using ';' but in Javascript the entire scenario is
 different. There is absolutely no difference in execution of code with
 or without semicolons.
*/

// Good Practices --stop

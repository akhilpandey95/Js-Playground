/*
 * Implementation of deepCopy
 * Akhil Pandey
 */
Array.prototype.deepCopy = function (foo) {
  for(var i = 0; i < this.length; ++i) {
    foo[i] = this[i]
  }
}

var a,someArray = []

for (var i = 0; i < 10; ++i) {
  a[i] = i + 1;
}

a.shallowCopy(someArray)

a[0] = 123456
console.log(someArray) // displays 1 instead of 123456

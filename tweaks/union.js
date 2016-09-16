/*
 * Implementation of union operation for arrays
 * Akhil Pandey
 */
Array.prototype.union = function (foo) {
  for(var i = 0; i < foo.length; ++i) {
    this[this.length] = foo[i]
  }
  console.log(this)
}

var a = [1, 2, 3, 4, 5],
b = [6, 7, 8, 9, 10]

a.union(b) // displays [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

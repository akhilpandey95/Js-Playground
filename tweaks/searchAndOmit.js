/*
 * Implementation of search and omit operation
 * Akhil Pandey
 */

function nonLexSort (foo, bar) {
  return foo - bar
}

Array.prototype.searchAndOmit = function (foo) {
  var start = new Date().getTime()
  var arr0 = [],
      arr1 = foo.sort(),
      arr2 = this.sort()

  if(this.length > foo.length) {
    if(arr1 !== arr2) {
      for(var i = 0; i < this.length; ++i) {
        if(foo.indexOf(this[i]) === -1) {
          arr0.push(this[i])
        }
        if(this.indexOf(foo[i]) === -1) {
          arr0.push(foo[i])
        }
      }
      arr0.sort(nonLexSort).splice((arr0.length - (this.length - foo.length)), (this.length - foo.length))
      var stop = new Date().getTime()
      console.log(arr0)
      console.log("Total time taken is " + (stop - start) + " millisecond")
    }
  }
  else {
    if(arr1 !== arr2) {
      for(var i = 0; i < foo.length; ++i) {
        if(foo.indexOf(this[i]) === -1) {
          arr0.push(this[i])
        }
        if(this.indexOf(foo[i]) === -1) {
          arr0.push(foo[i])
        }
      }
      arr0.sort(nonLexSort).splice((arr0.length - (foo.length - this.length)), (foo.length - this.length))
      var stop = new Date().getTime()
      console.log(arr0)
      console.log("Total time taken is " + (stop - start) + " millisecond")
    }
  }
}

// Example set 1
var a = [1, 2, 2, 9, 3, 1234, 12345, 9213, 9999999999]
var b = [1, 2, 2, 4, 5, 1234, 4567]
b.searchAndOmit(a) // displays [ 3, 4, 5, 9, 9213, 12345, 9999999999 ]

// Example set 2
var c = ["akhil", "pandey", "is", "a", "javascript", "enthusiast"]
var d = ["bar", "is", "a", "javascript", "enthusiast"]

d.searchAndOmit(c) // or c.searchAndOmit(d)

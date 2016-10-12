/*
 * Implementing String Reverse
 * Akhil Pandey
 */

function reverse (foo) {
    var res = ""
    for(var x in foo) {
        res += foo[(foo.length - 1) - x]
    }
    return res
}

var t = "akhil"
reverse(t)// lihka






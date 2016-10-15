/*
* Generating a random string for URL shortner
* Akhil Pandey
*/

/*
 You can generate a string of lengths 6,7,8.. etc

* @param {Number} arg        - The pow number
* @param {Number} flag       - The flag for choosing mixcase alphabets (0 or 1)

*/

String.prototype.genStr = function (arg) {
    var str = "",
        num = Math.floor(Math.random()*(Math.pow(1000, arg))).toString()

    var store = {
        big: ['V', 'X', 'A', 'D', 'G', 'Y', 'D', 'U', 'O', 'Q']
        lil: ['w', 'b', 'k', 'm', 'c', 'z', 'i', 's'. 'f', 'p']
    }
    console.log(num)
}

var url = "https://bkt.io/"
url.genStr(4)

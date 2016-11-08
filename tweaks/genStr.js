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
    let start = new Date().getTime()
    let i = 0
    let str = ""
    let num = Math.floor(Math.random()*(Math.pow(1000, arg))).toString()

    let store = {
        big: ['V', 'X', 'A', 'D', 'G', 'Y', 'D', 'U', 'O', 'Q'],
        lil: ['w', 'b', 'k', 'm', 'c', 'z', 'i', 's', 'f', 'p']
    }

    while(str.length < 20) {
        let count = Number(num[i])
        str += num[i] + store.big[count] + store.lil[count]
        i++
    }

    let stop = new Date().getTime()
    console.log(`${this}${str}`)
    console.log(`Total time taken is ${stop - start} milliseconds`)
}

var url = "https://bkt.io/"
url.genStr(4)

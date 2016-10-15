/*
* Implementing remove all occurences of a matched character
* Akhil Pandey
*/

String.prototype.removeAll = function (arg) {
    var res = '',
        start = new Date().getTime()
    for(var x = 0; x < this.length; x++) {
        if(this[x] !== arg) {
            res += this[x]
        }
    }
    var stop = new Date().getTime()
    console.log(`Total Time taken is ${stop - start} millisecond(s)`)
    return res
}

var a = "l,i,h,k,a,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,azsdadkhjlashdlhaljhsd,,,,,,asd,,asdasd"
console.log(a.removeAll(',')) //lihkaazsdadkhjlashdlhaljhsdasdasdasd

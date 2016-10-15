/*
* Implementing remove all occurences of a matched string
* Akhil Pandey
*/

String.prototype.removeAllStr = function (arg) {
    var res = '',
        start = new Date().getTime()
    if(arg.length === 1) {
        for(var x = 0; x < this.length; x++) {
            if(this[x] !== arg) {
                res += this[x]
            }
        }
    }
    else {
        res = this.replace(arg, '')
        while((res.indexOf(arg) > -1)) {
            res = res.replace(arg, '')
        }
        var stop = new Date().getTime()
    }
    console.log(`Total Time taken ${stop - start} millisecond`)
    return res
}

var a = "l,i,h,k,a,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,azsdadkhjlashdlhaljhsd,,,,,,asd,,asdasd,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,azsdadkhjlashdlhaljhsd,,,,,,asd,,asdasd"
console.log(a.removeAllStr(',')) // lihkaazsdadkhjlashdlhaljhsdasdasdasdazsdadkhjlashdlhaljhsdasdasdasd
console.log(a.removeAllStr('azsdadkhjlashdlhaljhsd')) // l,i,h,k,a,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,asd,,asdasd,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,asd,,asdasd
console.log(a.removeAllStr(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,azsdadkhjlashdlhaljhsd,,,,,,asd,,asdasd')) // l,i,h,k,a

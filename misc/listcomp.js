// String operations and other misc stuff
// list_comp() is an example of associative arrays or list comprehensions

var fs = require('fs')

function list_comp() {
        var arr = [],
            arr1 = []
        arr["one"] = "The value in index one"
        arr["two"] = "The value in index two"
        var data = fs.readFileSync("p.txt", "utf8")
        var str = data.split(" ")
        for(x=0; x<str.length; x++) {
                var val = ("w").concat(x)
                arr1[val] = str[x]
        }
        console.log(arr1)
}

function list_first_occur(args) {
        var arr = [],
            data = fs.readFileSync("p.txt", "utf8"),
            str = data.split(" ")
        for(x=0; x<str.length; ++x) {
                var val = ("w").concat(x)
                arr[val] = str[x]
        }
        for(x in arr) {
                if(arr[x] === args) {
                        console.log(x)
                }
        }
}

function main() {
        console.log("list comprehensions and associative arrays")
        list_comp()
        list_first_occur("programming") // would pipe out ass index of programming
        list_first_occur("algorithms") // would pipe out ass index of algorithms
        list_first_occur("data") // would pipe out ass index of data
}

main()

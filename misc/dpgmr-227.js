Array.matrix = function(rows, cols, init) {
        var d1 = []
        for(var i=0; i<rows; ++i) {
                var d2 = []
                for(var j=0; j<cols; ++j) {
                        d2[j] = init
                }
        d1[i] = d2
        }
        return d1
}

function create_set(foo, n) {
        foo = Array.matrix(n, n, "")
        for(var a=0; a<n; ++a) {
                for(var b=0; b<n; ++b) {
                        foo[a][b] = "+"
                }
        }
        if(n%2 == 1) {
                x = Math.floor(((n/2) + 1) - 1)
                y = Math.floor(((n/2) + 1) - 1) 
                for(var i=0; i<n; ++i) {
                        for(var j=0; j<n; ++j) {
                                if((i == x) && (j == y)) {
                                        foo[i][j] = "1"
                                }
                                if((i == n-1) && (j == n-1)) {
                                        foo[i][j] = Math.pow(n, 2).toString()
                                }
                                if((i == 0) && (j == 0)) {
                                        foo[i][j] = (1 + Math.pow(n-1, 2)).toString()
                                }
                        }
                }
        }
        console.log("x is ", + x)
        console.log("y is ", + y)
        if(n%2 == 0) {
                console.log("Not applicable to even arrays")
        }
        for(x in foo) {
                console.log(foo[x])
        }
}

function main() {
        console.log("grid solving problem")
        var arr = []
        create_set(arr, 7)
}

main()

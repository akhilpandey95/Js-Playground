// number fun
function sum_n_nat(foo) {
        if(arguments.length == 0) {
                console.log("invalid input");
        }
        else if(arguments.length == 1) {
                var n = 1,
                    s = 0;
                while(n <= foo) {
                        s+= n;
                        n++;
                }
                console.log(s);
        }
        else {
                console.log("Too many arguments");
        }
}

function fact(bar) {
        if(bar == 0 || bar == 1) {
                return 1;
        }
        else {
                return bar = bar * fact(bar - 1);
        }
}

(function main() {
        console.log("This is numbers fun baby");
        sum_n_nat(); // gives invalid input
        sum_n_nat(10); // gives 55
        sum_n_nat(10,20); // gives too many arguments
        console.log(fact(5));
})();


function solve(n) {
   //process.stdout.write(`${foo}\n`);
   var foo = "Alex";
   var bar = "Stella";
   var winner = "";
   var count = 1;
   var start = n + 1;
   var len = 10;
   for(i = n; i < len; i++) {
       console.log(foo + " writes", i + count);
       console.log(bar + " writes", i + count + 1);
       count++;
   }
}

function isPrime(n) {
    for(i = 2; i < n; i++) {
        if(n%i === 0) {
            return false;
        }
    }
    return n > 1;
}

/* Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n'),
    a = parseInt(lines[0]);
    if((lines.length === 1) && (a >= 1 && a <= Math.pow(10, 5))) {
        solve(a);
    }
    else {
        process.stdout.write(`${"Sorry only one argument accepted"}\n`);
    }
});
*/
solve(5);


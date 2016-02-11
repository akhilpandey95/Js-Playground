function solve(n, constraint) {
   var foo = "Alex";
   var bar = "Stella";
   var count = 1;
   var res = 1;
   var len = 50;
   while(n < constraint) {
       if(isPrime(n + count)) {
            res = count;
            process.stdout.write(`${res + " " + bar}\n`);
            break;
       }
       if(isPrime(n + count + 1)) {
           res = res + count;
           process.stdout.write(`${res + " " + foo}\n`);
           break;
       }
       count = count + 2;
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

// Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n'),
    a = parseInt(lines[0]);
    var len = Math.pow(10, 5);
    if(lines.length === 1) {
        solve(a, len);
    }
    else {
        process.stdout.write(`${"Sorry only one argument accepted"}\n`);
    }
});

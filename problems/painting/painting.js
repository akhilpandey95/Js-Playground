function sumofn(n, m) {
    var a = (n*(n+1))/2,
    b = (m*(m+1))/2;
    return a*b;
}

function solve(foo, bar) {
    var rows = [0],
    cols = [0];
    var str = [];
    var one, two = 0;
    var len = foo%(Math.pow(10, 8) + 7);
    for (i = 1; i <= foo; i++) {
        str[i-1] = bar[i].split(" ");
        rows[i-1] = str[i-1][0];
        cols[i-1] = str[i-1][1];
    }
    if((foo >= 1 && foo <= 1000)) {
        for(i = 0; i < len; i++) {
            one = parseInt(rows[i]);
            two = parseInt(cols[i]);
            if((one >= 1 && one <= 10000) && (two >= 1 && two <= 10000)) {
                console.log(sumofn(one, two));
            }
        }
    }
}

// Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n'),
    //a = parseInt(lines[0]);
    a = lines[0];
    solve(a, lines);
});



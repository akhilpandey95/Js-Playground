const https = require('https');

var options = {
    host:    'api.github.com',
    path:    '/users/AkhilHector',
    headers: {'User-Agent': 'request'}
};

https.get(options, (res) => {
    let body = '';

    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            try {
                let output = JSON.parse(body);
                process.stdout.write(`${output}\n`);
            } catch (e) {
                process.stdout.write(`Caught an exception: ${e}\n`);
            }
        } else {
            process.stdout.write(`${res.statusCode}\n`);
        }
    });
}).on('error', (err) => {
    process.stdout.write(`Caught an error: ${err    }\n`);
});

var fs = require('fs')
var util = require('util')
var express = require('express')
var app = express();
var bgapp = express();
var router = express.Router();
var port = process.env.PORT || 3000;

app.use(express.static('include'));   // Store the pre's here

// Set the locals for the app
bgapp.locals.title = "Data Verification";
bgapp.locals.email = "akhilhector.1@gmail.com";


router.get('/', function(req, res) {
       // var data = fs.readFileSync('scatter-plot.html', 'utf8');
       // res.setHeader('Content-Type', 'text/html');
       // res.send(data.toString());
       res.send('Express Server started and serving the End nodes');
});

router.get('/search', function(req, res) {
        var data = fs.readFileSync('main.php?frame=search', 'utf8');
        res.setHeader('Content-Type', 'text/html');
        res.send(data.toString());
});

router.get('/plots', function(req, res) {
        var data = fs.readFileSync('main.php?frame=plots', 'utf8');
        res.setHeader('Content-Type', 'text/plain');
        res.send(data.toString());
});

app.use('/', router);
app.listen(port, function() {
        console.log("Express Started and listening on port",port);
});




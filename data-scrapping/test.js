var cheerio = require('cheerio');
var request = require('request');

var target = "http://gusac.org";

request(target,function(err,response,html){
		if(!err && response.statusCode === 200) {
			console.log(html);
		}
	});

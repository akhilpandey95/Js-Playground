/* Ah this script is just for scrapping data from a website that we want
 * and the functionality of the script is we visit a url and make a request
 * and later our request will capture the HTML of that particular page and
 * then we extract the information and save in a format. I am doing this 
 * in the form of JSON */
// -- AkhilHector
var fs = require('fs');
var req = require('request');
var data = require('cheerio');
var exp = require('express');
var mongo = require('mongoose');
var call = exp();

// Now let us get the data by making the request by giving the url

call.get('/scrape',function(request,reply) {
	url = 'http://doeresults.gitam.edu/onlineresults/pages/NewReportviewer1.aspx?&sem=4&reg=1210312601';
	request(url, function(err,response,html) {
		if(!err)
	{
		var $ = data.load(html);
		var Regno,name,subject,semester,grade,SGPA,CGPA;
		var Json = 
	{
		Regno:"",
		name:"",
		subject:"",
		semester: "",
		grade: "",
		SGPA: "",
		CGPA: ""
	};
	}
	})
});
call.listen('8005');
console.log("The Server has started and is running on port 8005");
exports = module.exports = call;
		

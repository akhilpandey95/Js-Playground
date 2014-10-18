function generateUrl(limit) {
	var url = 'http://localyellowpages.com/listing/';
	var urls = [];
	var i;

	for(i =1 ; i< limit ; i++) {
		urls.push(url+i);
	}
	return urls;
}


var Http = require('http');
var Filesys = require('fs');

Http.createServer(function(request,reply)
{
	Filesys.readFile("/path/to/file" , "utf-8", function(Error,Data) {
	reply.writeHead('200' ,{'Content-type' : 'text/plain',
       				'Connection-type': 'keep-alive'	});
	if(Error) 
	reply.write('In order to open a filesystem we specify the path in the readFile method');
	/* We have to observe that in the readFile method if we are 
	 * displaying a file then we have to give the path properly
	 * and then it is traversed to that file and displays it.
	 * */
	else
	 reply.write(Data);

	reply.end();
      });
}).listen(8004, function() { console.log('Attached to port 8004');});

console.log('The Node based server is setup and running on 8004');



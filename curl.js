const request = require('request');

function getHTML(addr){
	request(addr, function (error, response, body) {
  	//process.stdout.write('error:', error); // Print the error if one occurred
  	//process.stdout.write(response); // Print the response status code if a response was received
  	//console.log(response.statusCode)
  	//process.stdout.write(toString(response.statusCode));
  	process.stdout.write(body);
  	process.stdout.write('\nprompt > '); 
	});
}


module.exports = getHTML;
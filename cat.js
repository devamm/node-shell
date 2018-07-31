const fs = require('fs');

function cat(filename){
	filename = "./"+filename
	fs.readFile(filename, (err, data) => {
  if (err) throw err;
  	process.stdout.write(data);
  	process.stdout.write('\nprompt >');
});	
}


module.exports = cat;
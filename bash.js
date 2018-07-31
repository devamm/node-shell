const getPwd = require('./pwd');
const getfile = require('./ls');
const cat = require('./cat');
const getHTML = require('./curl');


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();
	if(cmd === 'pwd'){
		getPwd();
	} 
	else if(cmd === 'ls'){
		getfile();
	} 
	else if(cmd.startsWith('cat')){
		let file = cmd.split(" ")[1];
		cat(file);
	}
	else if(cmd.startsWith('curl')){
		let addr = cmd.split(" ")[1];
		getHTML(addr);
	}

	else {
		process.stdout.write('You typed: '+cmd);
	}
	
	process.stdout.write('\nprompt > ');
});
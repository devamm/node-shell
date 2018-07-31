function getPwd() {
	return process.stdout.write(process.cwd());
}

module.exports = getPwd;
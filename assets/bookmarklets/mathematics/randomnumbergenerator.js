javascript: void(() => {
	const buffer = new Uint32Array(1);
	self.crypto.getRandomValues(buffer);
	const min = Math.ceil(parseInt(prompt('Min value:')));
	const max = Math.floor(parseInt(prompt('Max value:')));
	prompt('Random value between ' + min + ' and ' + max + ' (inclusive):', Math.floor(buffer[0] / (0xffffffff + 1) * (max - min + 1)) + min);
})()
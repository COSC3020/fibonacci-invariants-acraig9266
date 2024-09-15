function fib(n){
	let array = new Array(n);
	if(n == 0) {
		array[0] = 0;
		return array;
	}
	array = [0, 1];
	if (n == 1) {
		return array;
	} else {
		fibHelp(n, 2, array);
	}
	return array;
}

function fibHelp(n, i, array) {
	if (n < i) {
		return;
	} else {
		array[i] = array[i - 1] + array[i - 2];
		i += 1;
		fibHelp(n, i, array);
	}
}

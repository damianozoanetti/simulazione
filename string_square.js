function string_square(s) {
    if(typeof s === 'string') {
	return(s.length*s.length);
    }
    else {
	return(-1);
    }
}


module.exports = {string_square}

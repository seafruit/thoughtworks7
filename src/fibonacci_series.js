'use strict';

function fibonacci_series(n) {
	var result=[];
	result[0]=0;		
	for(var i=1;i<=n;i++){
		if (i<3) {
			result.push(1);
		}
		else{
			result.push(result[i-1]+result[i-2]);
		}
	}	
	return result;
}

module.exports = fibonacci_series;

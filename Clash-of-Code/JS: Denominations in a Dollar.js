var n = 5.51; // Total
var d = [1,0.25,0.1,0.05,0.01]; // Denominations
var ans = [0,0,0,0,0]; // Counters

var tmp = d.map(function(c,i,a) {
var val = parseInt(n / c);
	//console.log(c+"|"+i+"|"+a+"|"+val+"|"+n);
	ans[i] = val;
	n = (n - (val*c)).toFixed(2);
	return;
});
console.log(ans);
console.log(ans.reduce((p,c) => p + " " + c));

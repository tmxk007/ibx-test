// 汇总
function sum(data){
    var result = 0;
	for (var i = 0; i < data.length; i++) {
		var row = data[i];
		if (!row.value) continue;
		var value = parseFloat(row.value);
		if (value) result += value;
	}
	return result;
}

// 最大值
function max(data){
    var result;
	for (var i = 0; i < data.length; i++) {
		var row = data[i];
		var value = parseFloat(row.value);
		if(value===NaN) continue;
		if (result === undefined||value > result) result = value;
	}
	return result;
}

// 最小值
function min(data){
    var result;
	for (var i = 0; i < data.length; i++) {
		var row = data[i];
		var value = parseFloat(row.value);
		if(value===NaN) continue;
		if (result === undefined||value < result) result = value;
	}
	return result;
}

export default {
    sum,
    max,
    min
}
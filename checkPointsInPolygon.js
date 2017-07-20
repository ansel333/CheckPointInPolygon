var crossMul = function(p1, p2) {
	return p1.x * p2.y - p2.x * p1.y;
}

var checkCross = function(a1, a2, b1, b2) {
	var v1 = {
		x: a2.x - a1.x,
		y: a2.y - a1.y
	};
	var v2 = {
		x: b1.x - a1.x,
		y: b1.y - a1.y
	};
	var v3 = {
		x: b2.x - a1.x,
		y: b2.y - a1.y
	};
	var positiveV = crossMul(v1, v2) * crossMul(v1, v3);
	var u1 = {
		x: b2.x - b1.x,
		y: b2.y - b1.y
	};
	var u2 = {
		x: a1.x - b1.x,
		y: a1.y - b1.y
	};
	var u3 = {
		x: a2.x - b1.x,
		y: a2.y - b1.y
	};
	var positiveU = crossMul(u1, u2) * crossMul(u1, u3);
	return (positiveV <= 0 && positiveU <= 0) ? true : false;
}

var checkPointInside = function(point, polygon) {
	var endPoint = {
		x: point.x - 1000000,
		y: point.y
	}; //向左延长线之端点
	var crossCount = 0;
	var polyP1, polyP2;
	for (var i = 0; i < polygon.length - 1; i++) {
		polyP1 = polygon[i];
		polyP2 = polygon[i + 1];
		if (checkCross(point, endPoint, polyP1, polyP2) == true) {
			crossCount += 1;
		}
	}
	polyP1 = polygon[polygon.length - 1];
	polyP2 = polygon[0];
	if (checkCross(point, endPoint, polyP1, polyP2) == true) {
		crossCount += 1;
	}
	console.log(crossCount);
	return (crossCount % 2 == 0) ? false : true;
}
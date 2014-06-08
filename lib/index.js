var circle = require('./circle');
var square = require('./square');

exports.getArea = getArea;
exports.getCircumference = getCircumference;

function getArea(length, type) {
	if (isNaN(length) || length < 0)
		return NaN;
	if (type === 'circle')
		return circle.getArea(length);
	else if (type === 'square')
		return square.getArea(length);
	else
		return NaN;
}

function getCircumference(length, type) {
	if (isNaN(length) || length < 0)
		return NaN;
	if (type === 'circle')
		return circle.getCircumference(length);
	else if (type === 'square')
		return square.getCircumference(length);
	else
		return NaN;
}
var assert = require('assert');
var math = require('..');

describe('area of', function() {
	describe('circle', function() {
		it('negative number returns NaN', function() {
			assert.equal(true, isNaN(math.getArea(-1, 'circle')));
			assert.equal(true, isNaN(math.getArea(-2, 'circle')));
			assert.equal(true, isNaN(math.getArea(-3, 'circle')));
			assert.equal(true, isNaN(math.getArea(-124, 'circle')));
			assert.equal(true, isNaN(math.getArea(-99999, 'circle')));
		});

		it('NaN returns NaN', function() {
			assert.equal(true, isNaN(math.getArea(NaN, 'circle')));
		});

		it('zero returns zero', function() {
			assert.equal(0, math.getArea(0, 'circle'));
		});

		it('positive number returns correct value', function() {
			var PI = Math.PI;
			var EPSILON = 1e-8;
			assert.equal(PI, math.getArea(1, 'circle'));
			assert.equal(4 * PI, math.getArea(2, 'circle'));
			assert.equal(64 * PI, math.getArea(8, 'circle'));
			assert.equal(true, Math.abs(math.getArea(12.34, 'circle') - 152.2756 * PI) < EPSILON);
			assert.equal(true, Math.abs(math.getArea(3526.44, 'circle') - 12435779.0736 * PI) < EPSILON);
		});
	});

	describe('square', function() {
		it('negative number returns NaN', function() {
			assert.equal(true, isNaN(math.getArea(-1, 'square')));
			assert.equal(true, isNaN(math.getArea(-2, 'square')));
			assert.equal(true, isNaN(math.getArea(-3, 'square')));
			assert.equal(true, isNaN(math.getArea(-124, 'square')));
			assert.equal(true, isNaN(math.getArea(-99999, 'square')));
		});

		it('NaN returns NaN', function() {
			assert.equal(true, isNaN(math.getArea(NaN, 'square')));
		});

		it('zero returns zero', function() {
			assert.equal(0, math.getArea(0, 'square'));
		});

		it('positive number returns correct value', function() {
			assert.equal(1, math.getArea(1, 'square'));
			assert.equal(16, math.getArea(4, 'square'));
			assert.equal(64, math.getArea(8, 'square'));
			assert.equal(152.2756, math.getArea(12.34, 'square'));
			assert.equal(12435779.0736, math.getArea(3526.44, 'square'));
		});
	});

	describe('other shape', function() {
		it('returns NaN'), function() {
			assert.equal(true, isNaN(math.getArea(0, 'rectangle')));
			assert.equal(true, isNaN(math.getArea(0, 'triangle')));
			assert.equal(true, isNaN(math.getArea(0, 'start')));
			assert.equal(true, isNaN(math.getArea(0, 'sphere')));
		}
	});
});

describe('circumference of', function() {
	describe('circle', function() {
		it('negative number returns NaN', function() {
			assert.equal(true, isNaN(math.getCircumference(-1, 'circle')));
			assert.equal(true, isNaN(math.getCircumference(-2, 'circle')));
			assert.equal(true, isNaN(math.getCircumference(-3, 'circle')));
			assert.equal(true, isNaN(math.getCircumference(-124, 'circle')));
			assert.equal(true, isNaN(math.getCircumference(-99999, 'circle')));
		});

		it('NaN returns NaN', function() {
			assert.equal(true, isNaN(math.getCircumference(NaN, 'circle')));
		});

		it('zero returns zero', function() {
			assert.equal(0, math.getCircumference(0, 'circle'));
		});

		it('positive number returns correct value', function() {
			var PI = Math.PI;
			assert.equal(2 * PI, math.getCircumference(1, 'circle'));
			assert.equal(4 * PI, math.getCircumference(2, 'circle'));
			assert.equal(16 * PI, math.getCircumference(8, 'circle'));
			assert.equal(24.68 * PI, math.getCircumference(12.34, 'circle'));
			assert.equal(7052.88 * PI, math.getCircumference(3526.44, 'circle'));
		});
	});

	describe('square', function() {
		it('negative number returns NaN', function() {
			assert.equal(true, isNaN(math.getCircumference(-1, 'square')));
			assert.equal(true, isNaN(math.getCircumference(-2, 'square')));
			assert.equal(true, isNaN(math.getCircumference(-3, 'square')));
			assert.equal(true, isNaN(math.getCircumference(-124, 'square')));
			assert.equal(true, isNaN(math.getCircumference(-99999, 'square')));
		});

		it('NaN returns NaN', function() {
			assert.equal(true, isNaN(math.getCircumference(NaN, 'square')));
		});

		it('zero returns zero', function() {
			assert.equal(0, math.getCircumference(0, 'square'));
		});

		it('positive number returns correct value', function() {
			assert.equal(4, math.getCircumference(1, 'square'));
			assert.equal(16, math.getCircumference(4, 'square'));
			assert.equal(32, math.getCircumference(8, 'square'));
			assert.equal(49.36, math.getCircumference(12.34, 'square'));
			assert.equal(14105.76, math.getCircumference(3526.44, 'square'));
		});
	});

	describe('other shape', function() {
		it('returns NaN'), function() {
			assert.equal(true, isNaN(math.getArea(0, 'rectangle')));
			assert.equal(true, isNaN(math.getArea(0, 'triangle')));
			assert.equal(true, isNaN(math.getArea(0, 'start')));
			assert.equal(true, isNaN(math.getArea(0, 'sphere')));
		}
	});
});
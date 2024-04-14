// Write an analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

export default analyseArray = function (arr) {
	return {
		average: getAverage(arr),
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	};
};

const getAverage = nums => nums.reduce((acc, val) => acc + val, 0) / nums.length;

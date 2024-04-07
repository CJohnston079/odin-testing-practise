// Write a reverseString function that takes a string and returns it reversed.

export default reverseString = function (str = "") {
	const reversedStr = str.split("").reverse().join("");

	return reversedStr;
};

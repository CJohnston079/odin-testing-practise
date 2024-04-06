// Write a capitalize function that takes a string and returns it with the first character capitalized.

export default capitalise = function (str = "") {
	const capitalisedStr = str.charAt(0).toUpperCase() + str.slice(1);

	return capitalisedStr;
};

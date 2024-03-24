// Write a caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
// Read more about how a Caesar cipher works on this website.
// https://crypto.interactive-maths.com/caesar-shift-cipher.html

// Don’t forget to test wrapping from z to a.

// Don’t forget to test keeping the same case.

// Don’t forget to test punctuation!

// For this one, you may want to split the final function into a few smaller functions.
// One concept of Testing is that you don’t need to explicitly test every function you write, just the public ones.
// In this case you only need tests for the final caesarCipher function.
// If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

export default caesarCipher = function (str, shiftFactor = 0) {
	const encodedStr = str.replace(/[a-z]/gi, char => shiftChar(char, shiftFactor));

	return encodedStr;
};

const shiftChar = function (char, shiftFactor) {
	const charCode = char.charCodeAt(0);
	let shiftedCharCode = charCode;

	if (char.match(/[a-z]/i)) {
		const isLowerCase = char === char.toLowerCase();
		const minCharCode = isLowerCase ? 97 : 65;

		shiftedCharCode = ((((charCode - minCharCode + shiftFactor) % 26) + 26) % 26) + minCharCode;
	}

	return String.fromCharCode(shiftedCharCode);
};

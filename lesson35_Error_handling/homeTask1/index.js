export const parseUser = (jsonStr) => {
	try {
		const userData = JSON.parse(jsonStr);
		return console.log(userData);
	} catch (e) {
		const result = null;
		return console.log(result);
	}
};

const testString = JSON.stringify("some text");
const test = "must be null";

parseUser(testString);
parseUser(test);

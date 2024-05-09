export const parseUser = (jsonStr) => {
	try {
		const userData = JSON.parse(jsonStr);
		return userData;
	} catch (e) {
		return null;
	}
};

const testString = JSON.stringify({ name: "Tom" });
const test = "must be null";

parseUser(testString);
parseUser(test);

const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_WORD = process.env.SECRET_WORD;

const generateAuthToken = (user) => {
	const payload = {
		_id: user._id,
		name: user.name,
		isAdmin: user.isAdmin,
		isHome: user.isHome,
	};
	const token = jwt.sign(payload, SECRET_WORD);
	return token;
};

const verifyToken = (tokenFromClient) => {
	try {
		const payload = jwt.verify(tokenFromClient, SECRET_WORD);
		return payload;
	} catch (error) {
		return null;
	}
};

module.exports = { generateAuthToken, verifyToken };

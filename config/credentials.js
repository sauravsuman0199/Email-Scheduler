// #  SECRET_PASS = 'xsmtpsib-084da5b141c7165dea4d6ce916b0e42f73bdba2fa1c4b546d4dceb6275f9b3ff-rU9EsTzYLfapBCKj';
// #  USER_EMAIL = 'sauravsuman0199@gmail.com ';

// # # module.exports = {USER_EMAIL,SECRET_PASS}
require('dotenv').config();
const USER = process.env.USER_EMAIL;
const PASS = process.env.SECRET_PASS;
module.exports = { USER,PASS }
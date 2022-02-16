let validator = require('validator');

const verifyEmail = validator.isEmail('foo@bar.com');
console.log(verifyEmail)


const parseData = "Hellothisisparsedata123";
const checkAlphaNumberic = validator.isAlphanumeric(parseData)
console.log(checkAlphaNumberic);

const jwt = require("jsonwebtoken");
const config = require('../config/config')

const generateToken = (userId, expires, type, secret) => {

    try {
      const payload = {
        sub: userId,
        type,
        exp: expires,
        iat: Date.now()/1000
      };
      const token = jwt.sign(payload, secret);
      return token;
    } catch (error) {
      throw error;
    }
  
  };
const generateAuthToken = async (id)=>{

  const accessTokenExpiry = Math.floor(Date.now()/1000) + 60 * 60; //minutes to seconds
  const type = "access";
  const secret = config.jwt.secret
  try {
    const token = await generateToken(id, accessTokenExpiry, type,secret);
    const response = {
      [type]: {
        token: token,
        expires: new Date(accessTokenExpiry * 1000),
      },
    };
    return response;
  } catch (err) {
    throw err;
  }
}

module.exports = {generateAuthToken}
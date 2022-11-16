const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { findUserById } = require("../services/auth.service");

const config = require("./config")
const jwtOptions = {
    secretOrKey: config.jwt.secret,
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  };
  
  const jwtVerify = async (payload, done) => {

    if( payload.type!== config.tokenTypes.ACCESS)
    {
      return done("Invalid token type",false);
    }
    try{
        const id = payload.sub;
        
      const user = findUserById(id);
      if(user)
      {
        
        return done(null,user);
      }
      else
      {
        return done(null,false);
      }
    }
    catch(error)
    {
      return done(error,false);
    }
   

};
const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
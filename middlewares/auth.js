const passport = require("passport");

const verifyCallback = (req, resolve, reject) => async (err, user, info) => {
  
  if( info )
  {
    console.log("info :",info)
    reject({"message" : info.message })
  }
  if( err)
  {
    console.log("err :",err)
    reject(err)
  }
  if( !user)
  {
    reject({"message":"User not found"})

  }
  if( user )
  {
    req.user = user;
    resolve();
  }
  
  
  };
  const auth = async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verifyCallback(req, resolve, reject)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => {
        res.status(401).json(err);
      });
  };

  module.exports = auth;
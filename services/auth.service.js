const users = require('../users.json')["users"];
const verifyEmailAndPassword = (email,password)=>{
    for( let i=0;i<users.length;i++)
    {
        if( users[i]["email"] == email && users[i]["password"]===password )
        {
            return users[i]["id"];
        }
    }
    return null;
}
const findUserById = (id)=>{
    for( let i=0;i<users.length;i++)
    {
        if(users[i]["id"] === id )
        {
            return users[i];
        }
    }
    return null;
}

module.exports = {verifyEmailAndPassword,findUserById}
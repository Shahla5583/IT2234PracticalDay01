const users = require ('./userdb') 

function getusers()
{
    return users;
}

function getuser(id)
{
    return users.find((user)=>user.id===id);
}



module.exports={ getusers,getuser }




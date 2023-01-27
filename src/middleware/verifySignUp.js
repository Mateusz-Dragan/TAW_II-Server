const models = require("../models/index.js").models;

const User = models.User

checkDuplicateUsername= (req, res)=>{
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then(user=>{
        res.status(400).send({
            message: "Failed! Username is already in use!"
        });
        return 
    })
}

const verifySignUp = {
    checkDuplicateUsername:checkDuplicateUsername
}

module.exports = verifySignUp;
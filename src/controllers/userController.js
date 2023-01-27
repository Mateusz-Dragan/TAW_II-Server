const models = require("../models/index.js").models;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const config = require('../config.js');
const{verifySignUp} = require("../middleware")

const User = models.User

module.exports = class UserController {

    signUp = async (req, res) => {
        if(await User.findOne({where:{username: req.body.username}})){
            res.status(409).send({message:'user already exists'})
            return
        }
        User.create({
            name: req.body.name,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8)
        }).then(data => {
            res.status(201).send({message:'User registered'});
        })
        .catch(err => {
            res.status(500).send({
                message: 'Invalid input, object invalid'
            });
        });
    }

    signIn = (req, res) =>{
        User.findOne({where:{username: req.body.username}}).then(user => {
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            var passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
            );
      
            if (!passwordIsValid) {
              return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
              });
            }
      
            var token = jwt.sign({ id: user.id }, config.secret, {
              expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                name: user.name,
                accessToken: token
            })


        }).catch(err => {
            res.status(500).send({ message: 'err.message' });
          });
    }
}

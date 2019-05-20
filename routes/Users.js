const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
users.use(cors());
process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const userData = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    type: req.body.type
  };

  User.findOne({
    where: {
      id: req.body.id
    }
  })

    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.id + "registered" });
            })
            .catch(err => {
              res.send("error : " + err);
            });
        });
      } else {
        res.json({ error: "User already exist" });
      }
    })
    .catch(err => {
      res.send("error :" + err);
    });
});
users.post("/login", (req, res) => {
  User.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        }
      } else {
        res.status(400).json({ error: "User does not exist" });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

module.exports = users;

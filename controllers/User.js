const jwt = require("jsonwebtoken");
const app = require("express");
const { User } = require("../database/database");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const saltRounds = 10;
exports.createAccount = async (req, res) => {
  try {
    const { user } = req.body;
    await User.create({
      name: user.name,
      password: user.password,
    }).then((response) => {
      console.log(response);
    });
    // bcrypt.hash(user.password, saltRounds, async function (err, hash) {
    //   if (err) return res.sendStatus(401);

    // })
  } catch (error) {
    console.log(error);
  }
};
exports.showAccounts = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

exports.loginAccount = async (req, res) => {
  try {
    const { user } = req.body;
    const users = await User.findOne({ where: { name: user.name } });

    if (users?.dataValues.password == user.password) {
      const accessToken = jwt.sign(
        JSON.parse(JSON.stringify(users.dataValues)),
        process.env.ACCESSTOKEN
      );
      const refreshToken = jwt.sign(
        JSON.parse(JSON.stringify(users.dataValues)),
        process.env.REQUESTTOKEN
      );
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      console.log('====================================');
      console.log(accessToken);
      console.log('====================================');
      res.json({ accessToken: accessToken , message:"success" });


    } else
    {
      console.log('====================================');
      console.log("err");
      console.log('====================================');
      res.json({message:"nouser"})
    }
  } catch (error) {
    console.log(error);
  }
};
exports.refresh = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    jwt.verify(refreshToken, process.env.REQUESTTOKEN, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign(user, process.env.ACCESSTOKEN);

      res.json({ accessToken: accessToken });
    });

    jwt.verify();
  } catch (error) {
    console.log(error);
  }
};

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
      role: user.role,
    }).then((response) => {
      res.json(response);
    });
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
exports.updateAccount = async (req, res) => {
  try {
    const { user } = req.body;
    console.log(user);
    return await User.update(user, { where: { id: user.id } });
  } catch (error) {
    console.log(error);
  }
};
exports.deleteAccount = async (req, res) => {
  try {
    return await User.destroy({ where: { id: req.params.id } });
  } catch (error) {}
};
exports.loginAccount = async (req, res) => {
  try {
    const { user } = req.body;
    console.log(user, "user");
    const users = await User.findOne({ where: { name: user.name } });

    if (users?.dataValues.password == user.password) {
      const accessToken = jwt.sign(
        JSON.parse(JSON.stringify(users.dataValues)),
        process.env.ACCESSTOKEN,
        { expiresIn: "1d" }
      );
      const refreshToken = jwt.sign(
        JSON.parse(JSON.stringify(users.dataValues)),
        process.env.REQUESTTOKEN
      );

      return res
        .cookie("jwt", refreshToken, {
          httpOnly: false,
          sameSite: "None",
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        })
        .json({
          user: users,
          accessToken: accessToken,
          message: "success",
        });
    } else {
      console.log("====================================");
      console.log("err");
      console.log("====================================");
      res.json({ message: "nouser" });
    }
  } catch (error) {
    console.log(error, "eerr");
  }
};
exports.refresh = async (req, res) => {
  try {
    console.log(cookies, "cookie");
    const cookies = req.cookies;
    console.log(req, "cookie");
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    jwt.verify(refreshToken, process.env.REQUESTTOKEN, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign(user, process.env.ACCESSTOKEN);

      res.json({ accessToken: accessToken });
    });
  } catch (error) {
    return res.sendStatus(403);
  }
};

exports.checkLogin = (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token, "tok");
  jwt.verify(token, process.env.ACCESSTOKEN, (err, user) => {
    if (err) res.sendStatus(401);

    res.sendStatus(200);
  });
};

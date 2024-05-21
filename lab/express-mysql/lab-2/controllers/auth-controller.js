const userModel = require('../models/user-model');

exports.register = async (req, res, next) => {
  try {
    // validate input (request body)
    // own validator or third party module eg. validator, joi, yup, zod
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'username or password is empty' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'password must be at least 6 characters' });
    }

    // Insert to user table
    await userModel.insertUser(username, password);
    res.status(201).json({ message: 'user created' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    // validate input (request body)
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'username or password is empty' });
    }

    // search table user
    const user = await userModel.findUserByUsernameAndPassword(
      username,
      password
    );

    if (user.length === 0) {
      return res.status(400).json({ message: 'invalid credentials' });
    }

    res.status(200).json({ meesage: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.changePassword = (req, res, next) => {};

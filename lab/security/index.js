const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient({ log: ['query'] });

const app = express();

// parsing request body
app.use(express.json());

// Feature Register: handle ENDPOINT POST /register
app.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // find if username exists
    const existUser = await prisma.user.findUnique({
      where: { username: username }
    });

    if (existUser) {
      return res.status(400).json({ message: 'username already in use' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // insert new user
    await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword
      }
    });

    res.status(201).json({ message: 'user created' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Feature Login: Handle login request POST /login
app.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // find user by username
    const targetUser = await prisma.user.findUnique({
      where: {
        username: username
      }
    });

    if (!targetUser) {
      return res
        .status(400)
        .json({ message: 'username or password is invalid' });
    }

    const isMatch = await bcrypt.compare(password, targetUser.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: 'username or password is invalid' });
    }

    res.status(200).json({ message: 'login success' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(8007, () => console.log('server 8007'));

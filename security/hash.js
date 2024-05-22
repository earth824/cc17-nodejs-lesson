const bcrypt = require('bcryptjs');

const plainText = 'Hello my dog jump into the rive';

// 'Hello my dog jump into the river' ===> BCRYPT HASH ALG ===> '$2a$10$.OV6c9UbQmVPtRgD7AtBaeW0DLYRn2bgZRGEHmKDnJPZKdZvFASTq'

const hashToVerify =
  '$2a$10$.OV6c9UbQmVPtRgD7AtBaeW0DLYRn2bgZRGEHmKDnJPZKdZvFASTq';

const run = async () => {
  // const digest = await bcrypt.hash(plainText, 10);
  // console.log(digest);

  // extrach salt value (s) and hash value (h)
  // plain text(p) concat salt ===> ps
  // ALG2a(ps) ===> digest (d)
  // compare d and h ? d === h return true : d !== h return false
  const isMatch = await bcrypt.compare(plainText, hashToVerify);
  console.log(isMatch);
};

run();

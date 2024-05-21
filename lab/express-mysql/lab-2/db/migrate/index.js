const db = require('..');

const sqlList = require('./2024052109110001');

const run = async () => {
  for (let sql of sqlList) {
    await db.execute(sql);
  }
};

run();

process.exit(0);

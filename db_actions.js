const sql = require("./db");
// get data from my sql database

function getDataFromDataBase() {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM sensor", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

module.exports = { getDataFromDataBase };

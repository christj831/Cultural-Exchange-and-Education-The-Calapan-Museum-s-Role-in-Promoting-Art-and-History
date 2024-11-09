// Backend/models/User.js
const dbp = require('../config/dbpromise');

const User = {
  createUser: (userData, callback) => {
    const { first_name, middle_name, last_name, birthdate, gender, phone_number } = userData;
    const query = `
      INSERT INTO Users_db (first_name, middle_name, last_name, birthdate, gender, phone_number)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    dbp.query(query, [first_name, middle_name, last_name, birthdate, gender, phone_number], callback);
  },
};

module.exports = User;

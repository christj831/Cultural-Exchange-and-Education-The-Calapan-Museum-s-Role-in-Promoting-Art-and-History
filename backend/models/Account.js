const db = require('../config/db');
const dbp = require('../config/dbpromise');
const bcrypt = require('bcrypt');

const Account = {
  createAccount: async (accountData, userId, callback) => {
    const { role, email, password, verification_token } = accountData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO Accounts_db (role, email, password, verification_token, user_id)
      VALUES (?, ?, ?, ?, ?)
    `;
    dbp.query(query, [role, email, hashedPassword, verification_token, userId], callback);
  },

  verifyAccount: (token, callback) => {
    const query = `
      UPDATE Accounts_db SET is_verified = TRUE, verification_token = NULL
      WHERE verification_token = ?
    `;
    dbp.query(query, [token], callback);
  },

  getAccountByEmail: (email, callback) => {
    const query = 'SELECT * FROM Accounts_db WHERE email = ?';
    dbp.query(query, [email], callback);
  },
  getUserById: (userId, callback) => {
    const query = `
      SELECT first_name, middle_name, last_name FROM users_db WHERE user_id = ?
    `;
    dbp.query(query, [userId], (error, results) => {
      if (error) return callback(error);
      callback(null, results[0]); // Return the first (and likely only) result
    });
  },
  
};

module.exports = Account;

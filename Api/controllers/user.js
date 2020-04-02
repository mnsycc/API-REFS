const UserModel = require('models/user');

const createuser = async (username) => {
  const doc = new UserModel({ username });
  await doc.save();
  return doc.id;
};

module.exports.createuser = createuser;

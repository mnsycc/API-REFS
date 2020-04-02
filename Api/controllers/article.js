const ArticleModel = require('models/article');
require('models/user');
require('models/review');

const getList = async (name) => {
  const docs = await ArticleModel.find({
    title: name,
  }).populate('author').populate('review');
  return docs;
};
const create = async (title, content, userid, reviewid) => {
  const doc = new ArticleModel({
    title, content, author: userid, review: reviewid,
  });
  await doc.save();
  return doc.id;
};
module.exports.getList = getList;
module.exports.create = create;

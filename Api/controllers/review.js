const ReviewModel = require('models/review');

const createreview = async (review) => {
  const doc = new ReviewModel({ review });
  await doc.save();
  return doc.id;
};

module.exports.createreview = createreview;

const Suit = require('../models/Suit');
// const Comment = require('../model/Comment');

const list = async (req, res, next) => {
  try {
    const criteria = {}
    const { skip = 0, limit = 10, genre, year, director } = req.query;
    // if (genre) { criteria.genres = genre }
    // if (year) { criteria.year = year }
    // if (director) { criteria.directors = director }
    // console.log(req.query.director)
    res.json({
      // count: await Suit.countDocuments(criteria),
      items: await Suit.find(criteria)
      // .skip(+skip).limit(+limit)
    });
  } catch (error) {
    next(error)
  }
}
const getById = async (req, res, next) => {
  try {
    res.json({
      item: await Suit.findById(req.params.id),
      // comments: await Comment.find({ Suit_id: req.params.id })
    })
  } catch (error) {
    next(error)
  }

}
module.exports = {
  list,
  getById
}
const suites = require("../../../data/suites.json")

export default function handler(req, res) {
  res.status(200).json({ item: suites.find(suit => suit.id === +req.query.id) })
}
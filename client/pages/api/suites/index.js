const suites = require("../../../data/suites.json")

export default function handler(req, res) {
  res.status(200).json({ items: suites })
}
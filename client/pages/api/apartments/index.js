const apartments = require("../../../data/apartments.json")

export default function handler(req, res) {
  res.status(200).json({ items: apartments })
}
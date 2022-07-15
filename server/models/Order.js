const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  "userId": Schema.Types.ObjectId,
  "suitId": Schema.Types.ObjectId,
  "rentPrice": {
    "beginDate": Date,
    "endDate": Date,
    "price": Number,
    "totalAvailable": Number
  },
  confirmed: Boolean
});

const model = mongoose.model('Order', OrderSchema, 'orders');

module.exports = model;
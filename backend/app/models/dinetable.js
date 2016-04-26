// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dineTables = new Schema({
  restaurantID: String,
  dineTables: Number
}, { collection: 'dineTables' });

dineTables.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('dineTables', dineTables);


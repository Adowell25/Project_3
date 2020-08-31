var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
  _id: {
    type: new mongoose.types.ObjectId(),
    required: true
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  numberAttending: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }
  ]
});

var Events = mongoose.model('Events', EventsSchema);

module.exports = Events;
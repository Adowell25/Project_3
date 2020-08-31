
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: {
    type: new mongoose.types.ObjectId(),
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  events: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Events'
  }
  ]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
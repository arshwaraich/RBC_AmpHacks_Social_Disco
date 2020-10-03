var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var interestSchema = new Schema({
    name: String
});

interest = mongoose.model("interests", interestSchema);
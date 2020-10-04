var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var activitySchema = new Schema({
    name: String,
    interestIds: [String]
});

activity = mongoose.model("activities", activitySchema);

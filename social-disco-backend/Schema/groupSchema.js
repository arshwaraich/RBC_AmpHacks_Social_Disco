var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var groupSchema = new Schema({
    activityId: String,
    membersId: [String]
});

group = mongoose.model("groups", groupSchema);

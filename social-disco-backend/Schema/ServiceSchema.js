var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var serviceSchema = new Schema({
    name: String,
    image: String,
    serviceDescription: String,
    item:[{
        name: String,
        price: String
    }
    ]
});

service = mongoose.model("service", serviceSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExhibitSchema = new Schema({
    name: String,
    description: String,
    comments: [{userId: String, userName: String, stars: Number, detail: String}]
});

module.exports = mongoose.model('Exhibit',ExhibitSchema);
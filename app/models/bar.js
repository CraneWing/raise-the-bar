var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
	_id: String,
	name: String,
	location: String,
	address: String,
	city: String,
	state: String,
	country: String,
	phone: String,
	image_url: String,
	snippet: String,
	review_count: Number,
	rating: Number,
	url: String
});

mondule.exports = mongoose.model('Bar', barSchema);
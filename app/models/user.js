var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	password: String,
	display_name: String,
	searches: [{
		term: String,
		created_at: {
			type: Date,
			default: Date.now()
		}
	}],
	user_created: {
		type: Date,
		default: Date.now()
	}
});

// password hasher
userSchema.methods.generateHash = function generateHash(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// compare passwords in local login
userSchema.methods.validPassword = function validPassword(password) {
	return bcrypt.compareSync(password, this.local.password);
};

mondule.exports = mongoose.model('User', userSchema);
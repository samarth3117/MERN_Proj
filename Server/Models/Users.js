const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Company Name is required"],
		unique: [true, "Company Name Already Exists"],
	},
    email: {
		type: String,
		required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		unique: [true, "Email already exists"],
	},
	age: {
		type: String,
		required: [true, "User phone number required"],
		min: [12, "Too Few. Not valid number. Eg. 251-XXX-XXXXXX"],
		max: [12, "Too long. Not valid number. Eg. 251-XXX-XXXXXX"],
	},

});

module.exports = mongoose.model("users", UserSchema);

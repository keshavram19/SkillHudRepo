const mongoose = require("mongoose");

const stacksUsersDataSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const StackUsersData = mongoose.model("StackUserData", stacksUsersDataSchema);

module.exports = StackUsersData;

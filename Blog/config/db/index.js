const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://tintt:Tin123456@f8-db.jiez7.mongodb.net/F8-db?retryWrites=true&w=majority"
    );
    console.log("Connect Success!");
  } catch (error) {
    console.log("Connect Fail!");
  }
}

module.exports = { connect };

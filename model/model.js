const mangoose = require("mongoose");

const listSchema = new mangoose.Schema({
  item: {
    type: String,
    require: true,
  },
});

module.exports = mangoose.model("todoItems", listSchema);

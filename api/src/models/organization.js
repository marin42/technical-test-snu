const mongoose = require("mongoose");

const MODELNAME = "organization";

const Schema = new mongoose.Schema({
  name: { type: String, trim: true, unique: true },
  created_at: { type: Date, default: Date.now },
  last_updated_at: { type: Date, default: Date.now },
});

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;

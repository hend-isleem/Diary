const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://localhost/hendBase", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const Schema = mongoose.Schema;

const schemaRecord = new Schema({
  // id: { type: Number, unique: true },
  name: { type: String },
  date: { type: Date, default: Date.now },
  text: { type: String, trim: true },
});

const Record = mongoose.model("Record", schemaRecord);

var saveDb = (record, callback) => {
  let newRecord = new Record({
    // id: Date.now().toString(),
    name: record.name,
    date: record.date === null ? Date.now : record.date,
    text: record.text,
  });
  newRecord.save((err, data) => {
    if (err) {
      console.log("there was an err in saving the record " + err);
    } else {
      // console.log('////////////', typeof record.date)
      console.log("success in saving the record");
      callback(null, data);
    }
  });
};

var search = (name, callback) => {
  // console.log("searching!!");
  var query = Record.find({ name: name });
  query.exec((err, data) => {
    if (err) {
      console.log("there was an err in fetching records");
      callback(err, null);
    } else {
      console.log("success in fetching records ");
      callback(null, data);
    }
  });
};

module.exports = { saveDb: saveDb, search: search };

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppliedJobSchema = new Schema({
  job_id: String,
  user_id: String,
  status:String,
});



module.exports = mongoose.model('AppliedJob', AppliedJobSchema);

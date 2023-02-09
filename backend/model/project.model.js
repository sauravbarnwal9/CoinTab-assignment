const mongoose = require("mongoose");

const project = mongoose.Schema({
  gender: String,
  name: Object,
  location: Object,
  email: String,
  dob: Object,
  phone: String,
  login: Object,
  registered: Object,
  cell: String,
  id: Object,
  picture: Object

});

const ProjectModel = mongoose.model("project", project);

module.exports = ProjectModel;

const ProjectModel = require("../model/project.model");



exports.allData = async (req, res) => {
  try {
    const { filter } = req.query;
    if (filter) {
      const result = await ProjectModel.find({ gender: filter });
      res.status(201).send(result);
    } else {
      const result = await ProjectModel.find();
      res.status(201).send(result);
    }
  } catch (error) {
    res.status(404).send({ message: "something went wrong!" });
  }
};
exports.getData = async (req, res) => {
  try {
    const { page, limit, filter } = req.query;
    console.log(page, limit, filter);
    if (filter != "") {
      const Alldata = await ProjectModel.find({ gender: filter })
        .skip((page - 1) * limit)
        .limit(limit);
      console.log(Alldata.length);
      res.status(201).send(Alldata);
    } else {
      const AllJobs = await ProjectModel.find({})
        .skip((page - 1) * limit)
        .limit(limit);
      res.status(201).send(AllJobs);
    }
  } catch (error) {
    res.status(404).send({ message: "something went wrong!" });
  }
};
exports.deleteData = async (req, res) => {
  try {
    const result = await ProjectModel.deleteMany({});
    res.status(201).send({ message: "Data Removed" });
  } catch (error) {
    res.status(404).send({ message: "something went wrong!" });
  }
};

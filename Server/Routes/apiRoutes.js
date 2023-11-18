const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Creating a Schema

const schemaData = new mongoose.Schema(
  {
    instituionName: { type: String, required: true },
    headOfInstitutionName: { type: String, required: true },
    primaryEmail: { type: String, required: true },
    primaryContact: { type: String, required: true },
    secondaryEmail: { type: String, required: true },
    secondaryContact: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    institutionCode: { type: String, required: true },
    institutionType: { type: String, required: true },
    accessPlan: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Instituion = mongoose.model("Institution", schemaData);

//read
router.get("/", async (req, res) => {
  const data = await Instituion.find({});
  res.json({ success: true, data: data });
});

// create

router.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new Instituion(req.body);
  await data.save();
  res.send({ success: true, message: "data saved successfully", data: data });
});

//update

router.put("/update", async (req, res) => {
  console.log(req.body);
  const { _id, ...rest } = req.body;
  console.log(rest);
  const data = await Instituion.updateOne({ _id: _id }, rest);
  res.send({ success: true, message: "Data Updated successfully", data: data });
});

//delete

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const data = await Instituion.deleteOne({ _id: id });
  res.send({
    success: true,
    message: "Data deleted successfully",
    data: data,
  });
});
module.exports = router;

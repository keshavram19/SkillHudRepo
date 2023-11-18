const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtAuth = require("../middleware/jwtAuth");
const stacksUsersData = require("../models/stacksUsers");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is auth Routes Page ");
});

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExit = await stacksUsersData.findOne({ email: email });
    if (!isUserExit) {
      const hashPassword = await bcrypt.hash(password, 10);
      console.log(hashPassword);
      const user = new stacksUsersData({
        email: email,
        password: hashPassword,
      });
      user.save();
      return res.status(201).json({ message: "Registration Success" });
    } else {
      return res
        .status(400)
        .json({ message: "User Already Registered with this mail ID" });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExit = await stacksUsersData.findOne({ email: email });

    if (isUserExit) {
      const isPasswordMatched = await bcrypt.compare(
        password,
        isUserExit.password
      );
      if (isPasswordMatched) {
        const payload = {
          id: isUserExit._id,
        };
        //token create
        let token = jwt.sign(payload, "Keshav", { expiresIn: "24hr" });
        console.log(token);

        return res.status(200).json({ message: "Login Success", token: token });
      } else {
        return res.status(401).json({ message: "Password Not Matched" });
      }
    } else {
      return res.status(400).json({ message: "User Email Was Not Found" });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

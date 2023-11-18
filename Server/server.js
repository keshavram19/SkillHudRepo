const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StackUserData = require("./models/stacksUsers");

const app = express();
const port = process.env.PORT || 4446;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://keshavram19:Maheshkeshav19@cluster0.lbtfyh5.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(port, () => console.log(`Server Running at ${port}`));
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
    process.exit(1);
  });

app.use("/auth", require("./Routes/authRoutes"));
app.use("/api", require("./Routes/apiRoutes"));
app.use("/user", require("./Routes/userRoutes"));

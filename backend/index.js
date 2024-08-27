const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Form = require("./schemas/Form");
const User = require("./schemas/User");

const app = express();
const port = 5000;

const conuri = "your connection string";

mongoose.connect(conuri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded directly

app.post("/createuser", async (req, res) => {
  if (!req.body.name) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ error: "Mail not found" });
    } else {
      if (user.password === req.body.password)
        res.status(200).json({ msg: "Success", user: user });
      else res.status(401).json({ error: "Password mismatch" });
    }
  } else {
    const user = new User(req.body);
    user.save();
    res.status(200).json({ msg: "Success", user: user });
  }
});

app.post("/submitform", (req, res) => {
  const form = new Form(req.body);
  form.save();
  res.json(form._id);
});

app.get("/view/:id", async (req, res) => {
  const id = req.params.id;
  const form = await Form.findById(id);

  res.json(form);
});

app.listen(port, () => {
  console.log("App is running on port 5000.");
});

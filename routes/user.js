const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const user = await User.findById(req.params.id);
  console.log(user);
  return res.status(200).send(user);
});

router.get("/", async (req, res) => {
  const users = await User.find({});
  return res.status(200).send(users);
});

router.post("/login", async(req,res) => {
    const emailUser = await User.findOne({email: req.body.email})
    if(emailUser == null) {
      return res.status(401).send({error: "This email address does not exist"}); 
    } else if (emailUser.password != req.body.password){
      return res.status(401).send({error: "This is the incorrect password"}); 
    } else {
      return res.status(200).send({status: "success"}); 
    }
})

router.post("/", async (req, res) => {
  console.log("The body is " + req.body.displayName);
  console.log(req.body.username);
  const user = new User({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profilePic: req.body.profilePic,
  });
  const data = await user.save();
  console.log(data);
  return res.status(200).send(data);
});

module.exports = router;

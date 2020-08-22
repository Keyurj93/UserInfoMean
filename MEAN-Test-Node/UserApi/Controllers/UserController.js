const { UserModel } = require("../Models/UserModel");

module.exports = {
  createUser: async (req, res) => {

    try {
        let userbody = { ...req.body };
        let user = new UserModel(userbody);
        user = await user.save();
        res
        .status(201)
        .send({ status: { code: 201, msg: "Success" }, result: user });
         
    } catch (err) {
      console.log(err);
      res.status(400).send({ status: 400, msg: err });
    }
  },
  updateUser: async (req, res) => {
    try {
      await UserModel.update(
        { email: req.body.email },
        req.body
      );
      let user = await UserModel.findOne({
         email: req.body.email 
      });
      res
        .status(200)
        .send({ status: { code: 200, msg: "Success" }, result: user });
    } catch (err) {
      console.log(err);
      res.status(400).send({ status: 400, msg: err });
    }
  },

  getUsers: async (req, res) => {
    
    try {
     let users = await UserModel.find({});
      res
        .status(200)
        .send({ status: { msg: "Success" }, result: users });
    } catch (err) {
      console.log(err);
      res.status(400).send({ msg: err });
    }
  },

  deleteUser: async (req, res) => {
    try {
     let deleted = await UserModel.deleteOne({
        email: req.body.email
     });
      
      res
        .status(200)
        .send({ status: { msg: "Success" }, result: deleted });
    } catch (err) {
      console.log(err);
      res.status(400).send({  msg: err });
    }
  }

  
};

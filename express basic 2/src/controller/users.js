const { usersDB } = require("../database");

const userController = {
  getUsers: (req, res) => {
    let qparam = req.query.email;
    console.log(qparam);
    tempUsers = usersDB;
    if (qparam) {
      tempUsers = tempUsers.filter((val) => {
        return val.email == qparam;
      });
    }

    res.status(200).json({
      message: "user fetched",
      result: tempUsers,
    });
  },
  addUser: (req, res) => {
    const data = req.body;

    console.log(data);
    if (!data.username) {
      res.status(400).json({
        message: "insert the username",
      });
    }
    usersDB.push(data);

    res.status(201).json({
      message: "user added",
      result: data,
    });
  },
  deleteUser: (req, res) => {
    const userId = req.params.userId;

    const findIndex = usersDB.findIndex((val) => {
      return val.id == userId;
    });
    console.log(findIndex);

    if (findIndex == -1) {
      res.status(400).json({
        message: `user id ${userId} not found`,
      });
      return;
    }

    usersDB.splice(findIndex, 1);

    res.status(200).json({
      message: "user deleted",
    });
  },
};

module.exports = userController;

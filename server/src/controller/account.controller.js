const User = require("../model/user");

const controller = {
  checkUser: async (req, res) => {
    const { name } = req.params;
    const check = await User.findOne({ name });

    if(check != null) {
      res.send(200).json({
        type: "failed",
        message: "이미 사용중인 이름입니다."
      });
    } else {
      res.send(200).json({
        type: "success",
        message: "사용 가능한 이름입니다."
      })
    }
  },

  register: async (req, res) => {
    const { name, password } = req.params;
  },

  login: async (req, res) => {},

  logout: async (req, res) => {},
};

module.exports = controller;

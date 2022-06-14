const bcrypt = require('bcrypt');
const User = require('../model/user');

const controller = {
  checkUser: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.send(400).json({
        status: 'failed',
        message: '비정상적인 요청입니다.',
      });
    }
    const check = await User.findOne({ id });

    if (check != null) {
      res.send(200).json({
        status: 'failed',
        message: '이미 사용중인 이름입니다.',
      });
    } else {
      res.send(200).json({
        status: 'success',
        message: '사용 가능한 이름입니다.',
      });
    }
  },

  register: async (req, res) => {
    const { id, password, name } = req.params;
    if (!id || !password || !name) {
      res.send(400).json({
        status: 'failed',
        message: '비정상적인 요청입니다.',
      });
    }

    const pKey = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, pKey);
    const user = new User({
      id,
      name,
      password: encryptedPassword,
      pKey,
    });

    try {
      await user.save();
      res.send(200).json({
        status: 'success',
      });
    } catch (e) {
      res.send(500).json({
        status: 'failed',
        message:
          '회원가입 중 오류가 발생했습니다. 새로고침 후 다시 이용해주세요.',
      });
    }
  },

  login: async (req, res) => {
    const { id, password } = req.params;
    const user = await User.findOne({ id });

    if (user == null) {
      res.send(200).json({
        status: 'failed',
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      });
    } else {
    }
  },

  logout: async (req, res) => {},
};

module.exports = controller;

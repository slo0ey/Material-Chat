const { Router } = require("express");
const accountController = require("../controller/account.controller");

const router = Router();

router.post("/checkUser", accountController.checkUser);
router.post("/register", accountController.register);
router.post("/login", accountController.login);
router.post("/logout", accountController.logout);

module.exports = router;

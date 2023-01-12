const router = require("express").Router();

const {User} = require("../database/database");
const {createAccount,showAccounts,loginAccount,refresh} = require('../controllers/User');


const {checkLogin} = require('../middleware/user')



router.post("/create", createAccount);

router.get('/show',showAccounts);
router.post('/refresh',refresh);
router.post('/login',loginAccount);

module.exports = router;

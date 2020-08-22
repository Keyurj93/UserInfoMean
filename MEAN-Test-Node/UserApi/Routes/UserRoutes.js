const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


router.post('/create', UserController.createUser);
router.put('/update', UserController.updateUser);
router.put('/delete', UserController.deleteUser);
router.get('', UserController.getUsers);

module.exports = router;

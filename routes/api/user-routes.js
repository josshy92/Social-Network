const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../../controllers/userController");

router.route('/users')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);


router.route('users/:userId/friends/:friendId')    
    
module.exports = router;
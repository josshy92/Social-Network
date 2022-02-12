// make routes for all the users

const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require("../../controllers/userController");

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);


router.route('users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)    
    
module.exports = router;
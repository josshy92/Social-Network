// create functions that will reference user model and connects to routes

const User = require('../models/User')

module.exports = {
    //get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //get one user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID found" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //create one user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err))
    },

    //update one user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID found" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    //delete one user!
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID found" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },

    // add a friend to user
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            //switched from req.body to req._id
            { $addToSet: { friends: req.body } },
            // { $addToSet: { friends: req._id } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID found" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // delete friend from user
    deleteFriend(req, res) {
        User.findOneAndRemove(
            { _id: req.params.userId },
            { $pull: { friends: { friendId: req.params.friendId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID found" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    }
}

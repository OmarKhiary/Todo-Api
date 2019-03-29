const User = require('../models/user');

// CREATE USER func 
const createUser = async(req, res) => {
    const user  = new User(req.body);
    try{
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

// LOGIN USER func 
const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user);
        console.log('User Logged In');
    } catch(error) {
        res.status(400).send();
    } 
}

// GET ALL USERS func 
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) { 
        res.status(500).send(error);
    }
}
// GET SINGLE USER func 
const getUser = async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

// UPDATE USER func 
const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates'});
    }
    try {
        const user = await User.findById(req.params.id);
        console.log(`****${user}****`);
        console.log(updates);
        console.log(req.body);        
        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();
        if(!user){
            return res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}
// DELETE USER func 
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
}

module.exports = {createUser, login ,getUsers, getUser, updateUser, deleteUser};
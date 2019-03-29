const express = require('express');
const router = express.Router();
const {createUser, login, getUser, getUsers, updateUser, deleteUser} = require('../controllers/user');

// POST ROUTE CREATE USER 
router.post('/users', createUser );
// POST ROUTE LOGIN USER 
router.post('/users/login', login );
// GET ROUTE FETCH ALL USERS 
router.get('/users', getUsers);
// GET ROUTE FETCH SINGLE USER 
router.get('/users/:id', getUser);
// PATCH ROUTE EDIT USER 
router.patch('/users/:id', updateUser);
// DELETE ROUTE DELETE USER 
router.delete('/users/:id', deleteUser);

module.exports = router;


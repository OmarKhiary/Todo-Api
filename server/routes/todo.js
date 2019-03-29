const express = require('express');
const router = express.Router();
const {createTodo, getTodos, getTodo, updateTodo, deleteTodo} = require('../controllers/todo');
//POST ROUTE CREATE TODO
router.post('/todos', createTodo);
//GET ROUTE GET ALL TODOS
router.get('/todos', getTodos);
// GET ROUTE FETCH SINGLE TODO
router.get('/todos/:id', getTodo);
// UPDATE ROUTE EDIT TODO
router.patch('/todos/:id', updateTodo);
// DELETE ROUTE DELETE TODO
router.delete('/todos/:id', deleteTodo);

module.exports = router;


const Todo = require('../models/todo');

// Create Todo function 

const createTodo = async (req, res) => {
    const todo = new Todo(req.body);
    console.log(req.body);
    try {
        await todo.save();
        res.status(201).send(todo);
    } 
    catch (error) {
        res.status(400).send(error);
    }
};

// GET TODOS func

const getTodos = async (req, res) => {
    
    try {
      const todos = await Todo.find({});
        res.send(todos);
    } catch (error) {
        res.status(500).send();
    }
};
// GET SINGLE TODO func
const getTodo = (req, res) => {
    const _id = req.params.id;
    // if(!ObjectID.isValid(id)){
    //   return  res.status(404).send();
    // }
    try {
        const todo = await Todo.findById(_id);
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
};


// UPDATE TODOS func
const updateTodo = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates'});
    }
    try {
        const todo = await todo.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true});
        
        if(!todo){
            return res.status(404).send();
        }

        res.send(todo);
    } catch (error) {
        res.status(400).send(error);
    }
}
// DELETE TODO func

const deleteTodo = (req, res) => {
    // get the id 
    //const id = req.params.id;
    // if(!ObjectID.isValid(id)){
    //     return res.status(400).send()
    // }
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    } catch (error) {
        res.status(500).send(e);
    }
};

module.exports = {createTodo, getTodos, getTodo, updateTodo, deleteTodo};
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo',{
    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}); 

module.exports = Todo;

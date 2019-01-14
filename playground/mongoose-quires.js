const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5bf71c2645661b387cf95295';

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// }); 

// Todo.findOne({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos', todos)
// })
// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found')
//     }
    
//     console.log('Todo by id', todo)
// }).catch((e) =>console.log(e));
User.findById(id).then((user)=>{
    if(!user){
        return console.log('Id not found')
    }
    
    console.log(JSON.stringify(user, undefined, 2))
}).catch((e) =>console.log(e));

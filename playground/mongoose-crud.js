const {mongoose} = require('./../server/db/mongoose');
const Schema = mongoose.Schema;

const PersonName = new Schema({
    name:String,
    age:Number,
    isSingle:Boolean,
    birthday:Date,
    description:Buffer
})


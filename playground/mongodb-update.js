const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client)=> { 
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bf5e2724a909215b8b5233f')
    }, {
        $set:{
            name: 'omar khairy'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        db.collection('Todos').
        console.log(result)
    });

    client.close();
})
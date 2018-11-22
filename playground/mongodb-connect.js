const MongoClient = require('mongodb').MongoClient; 

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client)=> { 
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log("unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name:'Khairy',
        age: 21,
        location:' cairo'
    }, (err, result) => {
        if(err) {
            return console.log("unable to insert user", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close();
})
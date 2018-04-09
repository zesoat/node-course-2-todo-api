const {
  MongoClient,
  ObjectID
} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!')
  }
  console.log('Connected to MongoDB server!')
  const db = client.db('TodoApp')

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ac34c836d18bd1c5e6208cb')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  client.close()
})

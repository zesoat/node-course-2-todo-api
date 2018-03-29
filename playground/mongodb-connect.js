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

  db.collection('Todos').insertOne({
    text: 'Doing something',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  // db.collection('Users').insertOne({
  //   name: 'Steve Jobs',
  //   age: 89,
  //   location: 'Silicon Valley'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })


  client.close()
})

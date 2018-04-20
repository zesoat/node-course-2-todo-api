let { mongoose } = require('../db/mongoose')

let User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
})

module.exports = { User }

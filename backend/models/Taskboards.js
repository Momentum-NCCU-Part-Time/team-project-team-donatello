const mongoose = require('mongoose')

const BoardSchema = new mongoose.Schema({
  boardname: { type: String, max: 50, required: true },
  createdAt: { type: Date }, /// Mongoose can do the times it's self
  updatedAt: { type: Date },
  dueAt: { type: Date },

  tasks: [
    {
      type: new mongoose.Schema({
        name: String,
        details: String,
        complete: Boolean
      })
    }
  ]
})

module.exports = mongoose.model('Board', BoardSchema)

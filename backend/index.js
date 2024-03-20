const express = require('express')
const mongoose = require('mongoose')

const port = 3000
// Datbase connection
mongoose.connect(
  'mongodb+srv://vdleonard:Nikki1422@tasksboards.zsdrwsn.mongodb.net/local_library?retryWrites=true&w=majority'
)
const db = mongoose.connection
db.once('open', () => console.log(' :3 Connected to MongoDB'))
const app = express()
app.use(express.json())
const TaskBoards = require('./models/Taskboards')

// get all
app.get('/boards', (req, res) => {
  //  Ask database Boards
  TaskBoards.find().then((results) => res.status(200).json(results))
})

// create board
app.post('/boards', (req, res) => {
  const newSTaskBoards = new TaskBoards(req.body)
  newTaskBoards.save()
  res.status(201).json(newTasksBoards)
})

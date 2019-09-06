const express = require('express')

const router = express.Router()

projectsDb = require('./../data/helpers/projectModel.js')

router.get('/', (req, res) => {
  projectsDb.get()
    .then(projects => {
      res.status(200).json({
        projects
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'The projects could no be retrieved from the database'
      })
    })
})

router.post('/', (req, res) => {
  projectsDb.insert(req.body)
    .then(project => {
      res.status(201).json({
        project
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'There was an error saving the project to the database'
      })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  projectsDb.remove(id)
    .then(deletedProject => {
      res.status(200).json({
        message: 'Project has been deleted'
      })
    })
    .catch(error => {
      console.timeLog(error)
      res.status(500).json({
        error: 'Could not delete project from the database'
      })
    })
})

module.exports = router
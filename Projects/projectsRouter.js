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

module.exports = router
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

module.exports = router
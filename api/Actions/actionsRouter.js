const express = require('express')

const router = express.Router()

actionsDb = require('./../data/helpers/actionModel.js')
projectsDb = require('./../data/helpers/projectModel.js')

router.get('/', (req, res) => {
  actionsDb.get()
    .then(actions => {
      res.status(200).json({
        actions
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'The actions could no be retrieved from the database'
      })
    })
})

router.post('/:id', validateProjectId, (req, res) => {
  const { id } = req.params

  newAction = {
    project_id: id,
    description: req.body.description,
    notes: req.body.notes
  }

  actionsDb.insert(newAction)
    .then(action => {
      res.status(201).json({
        action
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'There was an error saving the action to the database'
      })
    })
})

router.put('/:id', (req, res) => {
  const { id } = req.params

  actionsDb.update(id, req.body)
    .then(editedAction => {
      res.status(200).json({
        editedAction
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'Could not edit action in database'
      })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  actionsDb.remove(id)
    .then(deletedAction => {
      res.status(200).json({
        message: 'Action has been deleted from the database'
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'Could not delete action in the database'
      })
    })

})

// custom middleware to validate project_id
function validateProjectId(req, res, next) {
  const { id } = req.params

  projectsDb.get(id)
    .then(project => {
      if (!project) {
        res.status(400).json({
          message: 'Invalid Project ID'
        })
      } else {
        next()
      }
    })
}

module.exports = router
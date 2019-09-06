const express = require('express')

const router = express.Router()

actionsDb = require('./../data/helpers/actionModel.js')

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

router.post('/:id', (req, res) => {
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

module.exports = router
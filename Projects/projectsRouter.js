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

router.get('/:id', (req, res) => {
  const { id } = req.params

  projectsDb.get(id)
    .then(project => {
      res.status(200).json({
        project
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'Could not get project from the database'
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

router.put('/:id', (req, res) => {
  const { id } = req.params

  projectsDb.update(id, req.body)
    .then(updatedProject => {
      res.status(200).json({
        updatedProject
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: 'Could not make modifications to project in the database'
      })
    })
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params

  projectsDb.getProjectActions(id)
    .then(projectActions => {
      res.status(200).json({
        projectActions
      })
    })
    .catch(error => {
      res.status(500).json({
      error: 'Could not get the actions for this Project from the database'
      })
    })
})

module.exports = router
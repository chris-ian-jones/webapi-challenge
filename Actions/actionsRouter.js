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

module.exports = router
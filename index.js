const express = require('express')

const server = express()

const projectsRoutes = require('./Projects/projectsRouter.js')

server.use(express.json())

server.use('/api/projects', projectsRoutes)

server.use('/', (req, res) => res.send('API is up...'))

const port = 4567

server.listen(port, () => console.log(`\n ** API on port ${port} ** \n`))
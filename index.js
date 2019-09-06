const express = require('express')

const server = express()

const projectsRoutes = require('./Projects/projectsRouter.js')
const actionsRoutes = require('./Actions/actionsRouter.js')

server.use(express.json())

server.use('/api/projects', projectsRoutes)
server.use('/api/actions', actionsRoutes)

server.use('/', (req, res) => res.send('API is up...'))

const port = 4567

server.listen(port, () => console.log(`\n ** API on port ${port} ** \n`))
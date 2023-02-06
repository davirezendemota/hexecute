// IMPORTS
import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
// #####

const server = express()

// read body request
server.use(bodyParser.json())

//
server.use(routes)

// 404 Page
server.use((req: Request, res: Response) => {
  res.status(404).json({message: "Route not found"})
})

// Server port
const port = 4000
server.listen(port, () => console.log(`Server running on port ${port}`))
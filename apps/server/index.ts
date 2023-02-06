import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
// #####

const server = express()

server.use(bodyParser.json())

// 404 Page
server.use((req: Request, res: Response) => {
  res.status(404).json({message: "Route not found"})
})

// Server port
const port = 4000
server.listen(port, () => console.log(`Server running on port ${port}`))
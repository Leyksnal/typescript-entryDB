import express, {Response, Request} from 'express'
import cors from 'cors'
import db from './utils/db'

const port: number = 2121
const app = express()

app.use(express.json())
app.use(cors())
db

app.get("/", (req: Request, res: Response): Response =>{
    return res.status(200).json(`Api is working and connected`)
})

app.listen(port, (): void =>{
    console.log(`Running on ${port}`)
})
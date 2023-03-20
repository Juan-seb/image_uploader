import express from 'express'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import routerPhotos from './routes/photos.routes.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './photos/',
  debug: true
}))

app.use(routerPhotos)
app.use(bodyParser.json())

app.listen(3001)

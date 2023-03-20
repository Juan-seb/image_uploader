import { Router } from 'express'
import { uploadPhoto } from '../cloudinary.js'

const router = Router()

router.post('/upload', async (req, res) => {
  console.log(req.files)
  const file = req.files.photo
  const result = await uploadPhoto(file.tempFilePath)
  res.send(result)
})

export default router

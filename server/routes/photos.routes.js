import { Router } from 'express'
import { uploadPhoto } from '../cloudinary.js'
import fs from 'fs'

const router = Router()

router.post('/upload', async (req, res) => {
  const file = req.files.photo
  try {
    const result = await uploadPhoto(file.tempFilePath)

    fs.unlink(file.tempFilePath, (err) => {
      if (err) throw err
      console.log('File deleted successfully' + file.tempFilePath)
    })

    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

export default router

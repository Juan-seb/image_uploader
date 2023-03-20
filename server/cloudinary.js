import cloudinary from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

const cloud = cloudinary.v2
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET

cloud.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
})

const uploadPhoto = async (filePath) => {
  try {
    return await cloud.uploader.upload(filePath)
  } catch (error) {
    console.log(error)
  }
  /* return cloud.uploader.upload(filePath, (error, result) => {
    if (error) return error
    return result
  }) */
}

export { uploadPhoto }

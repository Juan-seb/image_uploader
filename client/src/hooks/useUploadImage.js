import { useState, useEffect } from 'react'
import { states } from '../helpers/states'

export default function useUploadImage () {
  const [file, setFile] = useState(null)
  const [urlPreview, setUrlPreview] = useState(null)
  const [condition, setCondition] = useState(states.UPLOAD_IMAGE)

  useEffect(() => {
    const sendImage = async () => {
      if (!file) return
      const formData = new FormData()

      formData.append('photo', file)
      console.log(formData)

      try {
        const res = await fetch('http://localhost:3001/upload', {
          method: 'POST',
          body: formData
        })

        const json = await res.json()

        setUrlPreview(json.secure_url)
        setCondition(states.UPLOADED)
      } catch (error) {
        console.log(error)
      }
    }

    sendImage()
    file && setCondition(states.UPLOADING_IMAGE)
  }, [file])

  return { condition, urlPreview, setFile }
}

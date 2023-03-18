import { useState, useEffect } from 'react'
import { states } from '../helpers/states'

export default function useUploadImage() {
  const [file, setFile] = useState(null)
  const [urlPreview, setUrlPreview] = useState(null)
  const [condition, setCondition] = useState(states.TO_UPLOAD)

  useEffect(() => {
    const sendImage = async () => {

    }

    sendImage()
    file && setCondition(states.UPLOADING_IMAGE)
  }, [file])

  return { condition, urlPreview, setFile }
}

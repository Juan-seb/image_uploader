import { states } from '../../helpers/states'
import Loader from '../Loader'
import PreviewImage from '../PreviewImage'
import UploadImage from '../UploadImage'
import useUploadImage from '../../hooks/useUploadImage'

const UploadZone = () => {
  const { condition, urlPreview, setFile, setCondition } = useUploadImage()

  return (
    <>
      {condition === states.UPLOAD_IMAGE && <UploadImage setFile={setFile} />}
      {condition === states.UPLOADING_IMAGE && <Loader />}
      {condition === states.UPLOADED && <PreviewImage urlPreview={urlPreview} setCondition={setCondition} />}
    </>
  )
}

export default UploadZone

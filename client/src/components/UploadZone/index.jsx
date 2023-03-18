import UploadImage from '../UploadImage'
import { states } from '../../helpers/states'
import useUploadImage from '../../hooks/useUploadImage'
import Loader from '../Loader'

const UploadZone = () => {
  const { condition, urlPreview, setFile } = useUploadImage()

  return (
    <>
      {condition === states.TO_UPLOAD && <UploadImage setFile={setFile} />}
      {condition === states.UPLOADING_IMAGE && <Loader />}
    </>
  )
}

export default UploadZone

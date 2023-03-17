import UploadImage from '../UploadImage'
import { useState } from 'react'
import { states } from '../../helpers/states'

const UploadZone = () => {
  const [condition, setCondition] = useState(states.TO_UPLOAD)

  return (
    <>
      {condition === states.TO_UPLOAD && <UploadImage setCondition={setCondition} />}
    </>
  )
}

export default UploadZone

import { useState, useEffect } from 'react'
import DragDropFile from '../DragDropFiles'

const UploadImage = ({ setFile }) => {
  const [invalidType, setInvalidType] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInvalidType(false)
    }, 2000)
  }, [invalidType])

  const handleChange = (e) => {
    const file = e.target.files[0]

    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      setFile(file)
      return
    }

    setInvalidType(true)
  }

  return (
    <div className='flex flex-col justify-evenly items-center w-[405px] h-[470px] px-8 rounded-xl bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] py-1 font-poppins text-[#828282]'>
      <h1 className='font-medium text-lg leading-6 text-[#4F4F4F]'>Upload your image</h1>
      <p className='text-xs'>File should be Jpeg, Png</p>
      <DragDropFile setFile={setFile} setInvalidType={setInvalidType} />
      <p className='text-xs'>or</p>
      <div className='flex justify-center'>
        <label htmlFor='input_file' className='w-max px-4 py-2 cursor-pointer rounded-md text-white bg-[#2F80ED] text-sm'>
          Choose File
          <input type='file' id='input_file' className='hidden' onChange={handleChange} />
        </label>
      </div>
      {invalidType && (<p className='text-xs text-red-500'>The file is not a image</p>)}
    </div>
  )
}

export default UploadImage

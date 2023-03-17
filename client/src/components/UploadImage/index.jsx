import { useState } from 'react'

const UploadImage = () => {
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)

  const handleChange = (e) => {
    console.log('Cambio')
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
      return
    }

    if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    //* The file only appear when I access at the property .files not when access only the dataTransfer property
    /* if(e.type==='drop'){} */
  }

  return (
    <div className='flex flex-col w-[405px] h-[470px] px-8 rounded-xl bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png</p>
      <form
        onSumbit={(e) => e.preventDefault()}
        className='relative border w-full h-[219px]'
        onDragEnter={handleDrag}
      >
        {dragActive && (
          <div
            className='absolute w-full h-full'
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
        )}
      </form>
    </div>
  )
}

export default UploadImage

import image from '../../../public/drag-drop.png'
import './styles.css'

const DragDropFile = ({ setFile, setInvalidType }) => {
  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()

    //* Change the css class
    /*
    if (e.type === 'dragenter' || e.type === 'dragover') {

    }

    if (e.type === 'dragleave') {

    } */
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    //* The file only appear when I access at the property .files not when access only the dataTransfer property
    if (e.dataTransfer.files[0].type === 'image/png' || e.dataTransfer.files[0].type === 'image/jpeg') {
      setFile(e.dataTransfer.files[0])
      return
    }

    setInvalidType(true)
  }

  return (
    <>
      <div
        className='box flex flex-col justify-evenly items-center relative w-full h-[219px] rounded-xl bg-[#F6F8FB]'
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <img src={image} className='' />
        <p className='font-poppins text-[#BDBDBD] text-xs'>Drag & Drop your image here</p>
      </div>
    </>
  )
}

export default DragDropFile

import succesIcon from '../../../public/success_icon.png'
import { states } from '../../helpers/states'

const PreviewImage = ({ urlPreview, setCondition }) => {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(urlPreview)
    } catch (err) {
      console.log(err)
    }
  }

  const changeCondition = () => setCondition(states.UPLOAD_IMAGE)

  return (
    <div className='flex flex-col justify-evenly items-center w-[405px] px-8 py-10 rounded-xl bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] font-poppins text-[#828282]'>
      <img src={succesIcon} alt='Upload Successfully' className='mb-4' />
      <h1 className='font-semibold text-lg mb-6'>Uploaded successfully!</h1>
      <img src={urlPreview} alt='Image uploaded' className='max-w-[338px] w-min h-min max-h-[230px] mb-6' />
      <div className='flex w-full h-[34px] items-center bg-[#F6F8FB] border border-[#E0E0E0] rounded-lg hover:ring hover:ring-[#A9A9A9] mb-6'>
        <input
          type='text'
          className='flex-grow border-none outline-none overflow-x-hidden text-xs text-[#4F4F4F] px-2 py-1'
          value={urlPreview}
          readOnly
        />
        <button
          onClick={handleClick}
          className='w-max h-[30px] px-4 text-xs text-white rounded-lg bg-[#2F80ED] hover:bg-green-600'
        >
          Copy Link
        </button>
      </div>
      <p onClick={changeCondition} className='cursor-pointer text-sm text-[#4F4F4F] hover:underline'>Add other image</p>
    </div>
  )
}

export default PreviewImage

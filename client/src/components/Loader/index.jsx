import './styles.css'

const Loader = () => {
  return (
    <div className='w-[405px] h-max px-8 py-6 rounded-xl bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] font-poppins text-[#828282]'>
      <p className='py-2'>Uploading....</p>
      <span className='loader' />
    </div>
  )
}

export default Loader

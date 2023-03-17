import UploadZone from './components/UploadZone'

function App () {
  return (
    <>
      <main className='grid w-screen h-[95vh] items-center place-items-center bg-[#FAFAFB]'>
        <UploadZone />
      </main>
      <footer className='flex justify-center h-[5vh]'>
        <p className='font-montserrat font-medium text-sm'>
          Create by <span className='font-semibold underline'>Juan-seb</span> - devChallenges.io
        </p>
      </footer>
    </>
  )
}

export default App

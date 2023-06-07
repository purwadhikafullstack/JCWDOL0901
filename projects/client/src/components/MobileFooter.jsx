import CompanyLogo from '../components/CompanyLogo'

const MobileFooter = () => {
  return (
    <div className='pb-28 mt-8 font-light text-sm w-full'>
        <div className='w-full py-2 bg-green-200 text-green-100 mb-5 text-medium font-semibold'>Got any question?</div>
        <div className='flex flex-row justify-around'>
            <div className='flex flex-col items-center'>
                <span className="material-icons-outlined mb-1">mail</span>
                <div className='font-light'>super@groseria.com</div>
            </div>
            <div className='flex flex-col items-center'>
                <span className="material-icons-outlined mb-1">support_agent</span>
                <div className='font-light'>1-500-505</div>
            </div>
        </div>
    </div>
  )
}

export default MobileFooter

import CompanyContact from "./CompanyContact"

const MobileFooter = () => {
  return (
    <div className='pb-28 mt-8 font-light text-sm w-full'>
        <div className='w-full py-2 bg-green-200 text-green-100 mb-5 text-medium font-semibold'>Got any question?</div>
        <div className='flex flex-row justify-around'>
            <CompanyContact />
        </div>
    </div>
  )
}

export default MobileFooter

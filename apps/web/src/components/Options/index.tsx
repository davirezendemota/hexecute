import { FaEllipsisH } from 'react-icons/fa'

export default function Options(){

  return (
    <div className="absolute right-8 bottom-8 p-4 bg-neutral-dark rounded-full flex justify-center items-center cursor-pointer hover:bg-neutral-dark-hover">
      <FaEllipsisH className='text-white'/>
    </div>
  )
}
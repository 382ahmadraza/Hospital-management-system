import { Search } from 'lucide-react'
import React from 'react'

const SearchField = ({className}) => {
  return (
    <div className='flex items-center   h-full px-2 text-sm'>
        <input type="text" placeholder="Looking for..." className={`py-2 ${className}`}/>
         <Search size={18}/>
    </div>
  )
}

export default SearchField
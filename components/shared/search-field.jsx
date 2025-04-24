import { Search } from 'lucide-react'
import React from 'react'

const SearchField = () => {
  return (
    <div className='flex items-center   h-full px-2 text-sm'>
        <input type="text" placeholder="Looking for..." />
         <Search size={18}/>
    </div>
  )
}

export default SearchField
import { Search } from 'lucide-react'
import React from 'react'

const SearchField = ({className=""}) => {
  return (
    <div className={`flex items-center justify-between h-full px-2 text-sm ${className}`}>
        <input type="text"  placeholder="Looking for..." className={`py-2 outline-none  `}/>
         <Search size={18}/>
    </div>
  )
}

export default SearchField
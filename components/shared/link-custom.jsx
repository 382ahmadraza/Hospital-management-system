{/* wrapper component for link now i no need to import link in every file from next/link */}

import Link from 'next/link'
import React from 'react'


const LinkCustom = ({children , className="" , url="#" , target=''}) => {
  return (
    <Link href={url} className={className} target={target}>
        {children}
    </Link>
  )
}

export default LinkCustom
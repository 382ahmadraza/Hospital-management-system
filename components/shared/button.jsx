import Link from 'next/link'
import React  from 'react'
import LinkCustom from './link-custom'

const Button = ( {btnText="" , className="" , url="#"}) => {
  return (
        <LinkCustom url={url} className={`py-3 text-sm  hover:text-primary ${className}`}>
             {btnText}
        </LinkCustom>
  )
}   

export default Button
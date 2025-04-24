import Link from 'next/link'
import React  from 'react'

const Button = ( {btnText , className}) => {
  return (
        <Link href={"#"} className={`py-3 text-sm  hover:text-primary ${className}`}>
             {btnText}
        </Link>
  )
}   

export default Button
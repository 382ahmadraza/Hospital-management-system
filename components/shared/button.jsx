import Link from 'next/link'
import React  from 'react'

const Button = ( {btnText , className}) => {
  return (
        <Link href={"#"} className={`p-3 text-sm bg-red-500 ${className}`}>
             {btnText}
        </Link>
  )
}   

export default Button
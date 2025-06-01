import React from 'react'
import Heading from './heading'
import Container from './container'

const HeadingWithBg = ({text , subText='' , addStyle=''}) => {
  return (
    <Container parentStyle={`text-white h-36 pl-5 flex items-center bg-[url('/assets/trustee-bg.jpg')] w-full bg-center object-cover mb-10 ${addStyle}`}>
        <p>{subText}</p>
        <Heading CustomHeading={text}/>
    </Container>
  )
}

export default HeadingWithBg
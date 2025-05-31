import React from 'react'

const Container = ({ children, className, parentStyle }) => {
    return (
        <div className={`w-full flex justify-center font-montserrat ${parentStyle}`}>
            <div className={`max-w-[1780px] w-full px-4 md:px-16 lg:px20 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Container

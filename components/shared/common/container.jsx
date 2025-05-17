import React from 'react'

const Container = ({ children, className, parentStyle }) => {
    return (
        <div className={`w-full flex justify-center ${parentStyle}`}>
            <div className={`max-w-[1780px] w-full ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Container

import React from 'react'
import Button from '../shared/common/button'

const InfoCards = () => {

const cards = [
    { tile:"Board of Trustees" , description:'The Board of Trustees guides Ahmad Raza Hospital to exceptional healthcare standards with strategic insight.' , btn:'READ MORE'} ,
    { tile:"Message of Trustee" , description:'Ahmad Raza Hospital was established in 1979 by our elders with the vision to serve the humanity' , btn:'READ MORE'},
    { tile:"Professional staff" , description:'Hospitals employ a variety of health professions to deliver competent, ethical and professional services' , btn:'READ MORE'},
    { tile:"Consult our doctors" , description:'Select the doctor you prefer and book a visit with him or her in a matter of minutes. Click the bellow:' , btn:'CHOOSE A DOCTOR'},
]


  return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   w-[90%] mx-auto '>
            {cards.map((card, index) => (
            <div key={index} className="flex flex-col justify-between text-white odd:bg-primary even:bg-primaryLight p-11">
                <h2 className="text-xl font-bold mb-2">{card.tile}</h2>
                <p className=" ">{card.description}</p>
                <Button btnText={card.btn} className='w-fit mt-8 border hover:bg-white font-semibold'/>
            </div>
            ))}
        </div>
  )
}

export default InfoCards
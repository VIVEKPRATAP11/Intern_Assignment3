import React from 'react'

export default function TestimonialCard({name, imageNo}) {
    return (
        <div className='flex my-4 md:my-0 flex-col justify-center items-center w-72'>
            <img className='w-24' 
             src={require(`../assets/Testimonial${imageNo}.jpg`)} alt="Testimonial" />
            <h1 className='border-b-2 border-green-600 pb-2'>{name}</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking layout.</p>
        </div>
    )
}

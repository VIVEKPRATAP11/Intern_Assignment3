import React from 'react'
import TestimonialCard from '../Shared/TestimonialCard'

export default function Testimonials() {
    return (
        <div className='py-10'>
            <h1 className='font-semibold text-4xl text-center my-10'>Testimonials</h1>
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <TestimonialCard imageNo="1" name="Corey Korsgaard" />
                <TestimonialCard imageNo="2" name="Jakob Aminoff" />
                <TestimonialCard imageNo="3" name="Carla Press" />
            </div>
        </div>
    )
}

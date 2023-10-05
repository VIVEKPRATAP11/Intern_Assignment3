import React from 'react'

export default function DestinationCard({ name, address}) {

    return (
        <div className='h-96 w-[320px] shadow-lg rounded-lg'>
            <img className='h-[300px] w-[320px]'
                src={require(`../assets/${name}.jpg`)} alt="University" />
            <h1 className='font-extrabold text-2xl my-2 px-2'>{name} University</h1>
            <address className='font-semibold text-sm mt-1 px-2'>{address}</address>
        </div>
    )
}

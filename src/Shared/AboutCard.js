import React from 'react'

export default function AboutCard({ avatarNo }) {
    return (
        <div className='flex items-center shadow-2xl rounded-xl my-8 p-2 w-80'>
            <img className='mr-4'
             src={require(`../assets/avatar${avatarNo}.jpg`)} alt="AboutImage" />
            <div>
                <h1 className='font-semibold text-lg'>Jenny Wilson</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
        </div>
    )
}

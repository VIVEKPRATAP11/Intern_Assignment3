import React from 'react'
import DestinationCard from '../Shared/DestinationCard'

export default function Schedules() {
    return (
        <div className='py-10 md:ml-10 ml-2'>
            <h1 className='font-semibold text-3xl'>Our Destinations</h1>
            <div className='flex flex-col md:flex-row gap-5 my-10 justify-between md:items-end items-center'>
                <DestinationCard name="Harvard" address="Cambridge, Massachusetts, UK" />
                <DestinationCard name="Oxford" address="Oxford, England" />
                <DestinationCard name="Stanford" address="Stanford, California" />
                <DestinationCard name="Nanyang" address="Nanyang Ave, Singapura" />
            </div>
            <div className='flex justify-center gap-5'>
                <img src={require("../assets/left-arrow.jpg")} alt="Arrow" />
                <p> <b className='font-bold text-3xl'>2</b> / 140</p>
                <img src={require("../assets/right-arrow.jpg")} alt="Arrow" />
            </div>
        </div>
    )
}

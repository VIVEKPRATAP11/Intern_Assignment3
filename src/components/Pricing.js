import React from 'react'

export default function Pricing() {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center py-10  '>
            <img className='h-[500px] '
                src={require("../assets/Group 167.png")} alt="PricingImage" />
            <div className='w-96 shadow-xl rounded-xl p-10 h-[500px]'>
                <h1 className='font-extrabold text-2xl'>Book Now</h1>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipipric elit member.</p>
                <form className='flex flex-col gap-4'>
                    <div>
                        <label className='block font-bold mb-1'>CITY</label>
                        <input className='w-[100%] p-1.5 bg-[#dde1e3] rounded-lg'
                            type="text" placeholder='Placeholder' />
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <label className='block font-bold mb-1'>ARRIVAL</label>
                            <input className='w-[100%] p-1.5 bg-[#dde1e3] rounded-lg'
                                type="text" placeholder='10 October' />
                        </div>
                        <div>
                            <label className='block font-bold mb-1'>DEPARTURE</label>
                            <input className='w-[100%] p-1.5 bg-[#dde1e3] rounded-lg'
                                type="text" placeholder='11 October' />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <label className='block font-bold mb-1'>STAR</label>
                            <div className='flex text-center'>
                                <span className='text-3xl font-bold w-[15%] bg-[#b1b7b9] rounded-s-lg'>-</span>
                                <input className='w-[70%] p-1.5 bg-[#dde1e3]'
                                    type="text" placeholder='4' />
                                <span className='text-2xl font-bold w-[15%] bg-[#b1b7b9] rounded-e-lg'>+</span>
                            </div>
                        </div>
                        <div>
                            <label className='block font-bold mb-1'>ROOM</label>
                            <div className='flex text-center'>
                                <span className='text-3xl font-bold w-[15%] bg-[#b1b7b9] rounded-s-lg'>-</span>
                                <input className='w-[70%] p-1.5 bg-[#dde1e3]'
                                    type="text" placeholder='1' />
                                <span className='text-2xl font-bold w-[15%] bg-[#b1b7b9] rounded-e-lg'>+</span>
                            </div>
                        </div>
                    </div>
                </form>
                <button className='bg-black font-bold text-white py-1.5 px-4 mt-8 rounded-lg '>
                    Book Now
                </button>
            </div>
        </div>
    )
}

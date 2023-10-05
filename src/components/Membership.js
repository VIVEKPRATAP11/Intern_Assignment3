import React from 'react'

export default function Membership() {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center py-10'>
            <div>
                    <img
          className="h-11 w-11"
          src={require("../assets//Ellipse 46.png")}
          alt="Ellipse"
        />

                <p className='font-medium my-3'>Get 20% off for student</p>
                <h1 className='font-semibold text-4xl'>Students discounts available.</h1>
                <h2 className='text-2xl'>Get ready for some fun in the sun!</h2>
                <ul className='list-disc my-5 mb-6'>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit</li>
                    <li>tortor id euismod habitant</li>
                    <li> Sed suspendisse id in ultrices</li>
                </ul>
                <button className='bg-[#F27A44] text-white py-1.5 px-6 rounded-3xl my-2'>
                    Explore More
                </button>
            </div>
            <img className='h-[500px] rounded-[50%]'
                src={require("../assets/Mask group.png")} alt="MembershipImage" />
        </div>
    )
}

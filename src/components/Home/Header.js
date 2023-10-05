import React from 'react'
import { Link } from 'react-scroll'
import "./Header.css";

export default function Header() {

    return (
        <nav className='h-20 bg-white fixed top-0 left-0 right-0 flex flex-col md:flex-row items-center justify-around w-[100]% md:text-xl text-lg shadow-lg'>
            <ul className='flex items-center md:gap-6 gap-2 font-bold cursor-pointer'>
                <li>
                    <Link className='hover:border-b-4 active:border-b-4 border-green-600'
                        activeClass='active' to="home"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-35}
                        duration={500}
                    > Home </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 active:border-b-4 border-green-600'
                        activeClass='active' to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-20}
                        duration={500}
                    > About </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 active:border-b-4 border-green-600'
                        activeClass='active' to="schedules"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-10}
                        duration={500}
                    > Schedules </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 active:border-b-4 border-green-600'
                        activeClass='active' to="membership"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                    > Membership </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 active:border-b-4 border-green-600'
                        activeClass='active' to="pricing"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={10}
                        duration={500}
                    > Pricing </Link>
                </li>
            </ul>
            <ul className='flex items-center md:gap-6 gap-2 font-light cursor-pointer'>
                <li>Offers</li>
                <li className='bg-[#F27A44] text-white py-1.5 px-5 rounded-3xl'>
                    <button>Courses</button>
                </li>
            </ul>
        </nav>
    )
}

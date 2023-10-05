import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center py-10'>
        <ul className='flex gap-4'>
            <li>Privacy Policy</li>
            <li>Term of Use</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
        </ul>
        <ul className='flex font-semibold gap-4'>
            <li>About</li>
            <li>Schedules</li>
            <li>Pricing</li>
            <li>Membership</li>
            <li>Joins</li>
        </ul>
    </div>
  )
}

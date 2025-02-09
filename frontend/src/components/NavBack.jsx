import React from 'react'
import { Link } from 'react-router-dom'

const NavBack = () => {
  return (
    <div className='flex justify-start w-[1100px] dark:text-white mt-5'>
      <Link className='hover:border-b-2' to="/">Back</Link>
    </div>
  )
}

export default NavBack

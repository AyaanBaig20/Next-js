import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='bg-red-500 flex justify-center gap-5'>
        <h1>Navbar</h1>
        <div className='flex gap-5'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

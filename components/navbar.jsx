import Link from 'next/link'
import React from 'react'
import NavLinks from './nav-links'
import CartAction from './cart-action'

export default function NavBar() {
  return (
    <header className='py-2 border-b'> 
      <div className="container flex items-center justify-between px-4 mx-auto lg:px-0">  
        <div className='flex items-center'>
          <Link href='/' className='text-3xl font-bold'>
            Hub.
          </Link>
          <NavLinks />
        </div>

        <CartAction />
      </div>    
    </header>
  )
}

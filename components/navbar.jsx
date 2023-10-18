import Link from 'next/link'

import NavLinks from './nav-links'
import CartAction from './cart-action'
import getCategories from '@/actions/getCategories'

export default async function NavBar() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <header className='border-b '> 
      <div className="container flex items-center justify-between px-4 mx-auto lg:px-8 h-14">  
        <div className='flex items-center'>
          <Link href='/' className='text-3xl font-bold'>
            Hub.
          </Link>
          <NavLinks data={categories} />
        </div>

        <CartAction />
      </div>    
    </header>
  )
}

import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'

export default function CartAction() {
  return (
    <div className='flex items-center gap-4'>
      <Button className='flex items-center gap-2 rounded-3xl'>
        <ShoppingBag size={18} color='white' />
        <span>0</span>
      </Button>
    </div>
  )
}

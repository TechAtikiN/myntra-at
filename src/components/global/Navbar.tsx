import { signIn, signOut, useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { selectItems } from '@/src/slices/basketSlice'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  {
    text: 'CLOTHING',
  },
  {
    text: 'ELECTRONIC',
  },
  {
    text: 'DECOR',
  },
  {
    text: 'HOME & LIVING',
  },
  {
    text: 'BEAUTY',
  },
  {
    text: 'STUDIO',
  },
]

const Navbar = () => {
  const session = useSession()
  const items = useSelector(selectItems)
  const router = useRouter()

  console.log(items)
  return (
    <nav className='p-2 border-b border-gray-300 sticky top-0 z-50 flex justify-between items-center bg-white'>

      {/* left section */}
      <div className='flex justify-start items-center ml-5'>
        <Image
          onClick={() => router.push('/')}
          className='hover:cursor-pointer'
          src='https://media.istockphoto.com/id/964266962/vector/vector-logo-letter-n.jpg?s=612x612&w=0&k=20&c=-yfh2ZxdpLPK2Irbf_0csBJqBYYxmXh2_nBZD24Y0EI='
          alt='logo-img'
          height={80}
          width={80}
        />
        <div className='hidden md:flex justify-evenly space-x-10'>
          {navLinks.map(link => (
            <p key={link.text} className='font-bold hover:cursor-pointer hover:scale-110 hover:text-red-400 text-gray-600'>{link.text}</p>
          ))}
        </div>
      </div>

      {/* right section */}
      <div className='hidden md:flex'>
        <input className='w-96 px-4 py-2 focus:bg-white bg-gray-100 focus:outline-none focus:border border-gray-200' type='Search for products, brands, categories....' />
        <MagnifyingGlassIcon className='h-7 w-7 text-gray-500 relative right-10 top-3' />
      </div>

      <div className='hidden md:flex space-x-8'>
        <Link href='/checkout' className='nav-link'>
          <ShoppingCartIcon className='h-6 w-6 text-black' />
          <p className='text-red-600'>Basket</p>
        </Link>
        <div className='nav-link'>
          <ShoppingBagIcon className='h-6 w-6 text-black' />
          <p className='text-red-600'>Orders</p>
        </div>
        <div className='nav-link' onClick={() => signIn()}>
          <UserIcon className='h-6 w-6 text-black' />
          <p className='text-red-600'>{session.data ? `Hello ${session.data.user?.name}` : 'Sign In'}</p>
        </div>
      </div>
      {session.status !== 'unauthenticated' ? (<p onClick={() => signOut()} className='cursor-pointer ml-2 px-3 py-2 bg-red-600 text-white'>Logout</p>) : null}
    </nav>
  )
}

export default Navbar

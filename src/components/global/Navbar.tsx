import Image from 'next/image'
import { MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

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
  return (
    <nav className='p-2 border-b shadow-lg  border-gray-300 sticky top-0 flex justify-between items-center z-50 bg-white'>

      {/* left section */}
      <div className='flex justify-start items-center ml-5'>
        <Image
          className='hover:cursor-pointer'
          src='https://media.istockphoto.com/id/964266962/vector/vector-logo-letter-n.jpg?s=612x612&w=0&k=20&c=-yfh2ZxdpLPK2Irbf_0csBJqBYYxmXh2_nBZD24Y0EI='
          alt='logo-img'
          height={80}
          width={80}
        />
        <div className='hidden md:flex justify-evenly space-x-10'>
          {navLinks.map(link => (
            <p className='font-bold hover:cursor-pointer hover:scale-110 hover:text-red-400 text-gray-600'>{link.text}</p>
          ))}
        </div>
      </div>

      {/* right section */}
      <div className='hidden md:flex space-x-10 mr-14'>
        <div className='flex'>
          <input className='w-96 px-4 py-2 focus:bg-white bg-gray-100 focus:outline-none focus:border border-gray-200' type='Search for products, brands, categories....' />
          <MagnifyingGlassIcon className='h-7 w-7 text-gray-500 relative right-10 top-3' />

        </div>
        <div className='flex space-x-8'>
          <div className='nav-link'>
            <UserIcon className='h-6 w-6 text-black' />
            <p className='text-red-600'>Profile</p>
          </div>
          <div className='nav-link'>
            <ShoppingCartIcon className='h-6 w-6 text-black' />
            <p className='text-red-600'>Basket</p>
          </div>
          <div className='nav-link'>
            <ShoppingBagIcon className='h-6 w-6 text-black' />
            <p className='text-red-600'>Orders</p>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar

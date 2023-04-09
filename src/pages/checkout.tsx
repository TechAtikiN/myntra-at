import { CheckBadgeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { CartProducts, Navbar } from '../components'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSession } from 'next-auth/react'
import Currency from 'react-currency-formatter'

import Image from 'next/image'
import Link from 'next/link'

const Checkout = () => {

  const items: Product[] = useSelector(selectItems)
  const total: number = useSelector(selectTotal)
  const session = useSession()
  console.log(session)

  return (
    <div>
      <Navbar />

      {items?.length === 0 ? (
        <main className='flex flex-col items-center'>
          <Image
            src='https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png'
            alt='empty-cart'
            width={600}
            height={600}
          />
          <p className='text-3xl font-bold text-gray-700 -mt-16'>Hey, it feels so light!</p>
          <p className='text-gray-400 text-xl font-light mt-2'>There&apos;s nothing in your bag, lets add some items</p>
          <Link href='/' className='checkout-btn text-center'>Go to Home</Link>
        </main>
      ) :
        <main className='md:grid md:grid-cols-4 md:mx-10 mt-10'>

          {/* Left */}
          <div className='col-span-3'>
            <h1 className='text-4xl tetx-gray-700 font-bold m-5'>My Cart</h1>

            <div className='mt-4 p-6'>
              {items.map((item, i) => (
                <CartProducts key={i} category={item.category} id={item.id} title={item.title} description={item.description} image={item.image} price={item.price} />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className='col-span-1 h-96 flex flexcol bg-white p-10 shadow-md'>
            {items.length > 0 && (
              <div>
                <h2 className='text-xl font-semibold my-3'>Subtotal ({items.length} <span className='text-base'>items</span>):
                  <span className='mx-3 font-bold'>
                    <Currency quantity={total} currency="USD" />
                  </span>
                </h2>

                <button
                  disabled={!session}
                  className={`${session.status === 'unauthenticated' ? 'bg-gray-300' : 'bg-red-500 text-white'} px-3 py-2 font-semibold`}
                >
                  {!session ? 'Sign in to Checkout' : 'Proceed to checkout'}
                </button>
              </div>
            )}
          </div>

        </main>
      }
    </div >
  )
}

export default Checkout
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useSelector } from "react-redux"
import { CartProducts, Navbar } from "../components"
import { selectItems } from "../slices/basketSlice"

const Checkout = () => {

  const items: Product[] = useSelector(selectItems)

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
          <p className='text-gray-400 text-xl font-light mt-2'>There's nothing in your bag, lets add some items</p>
          <button className='checkout-btn'>Go to Home</button>
        </main>
      ) :
        <main className='lg:flex max-w-screen-2xl mx-auto md:ml- mt-10'>

          {/* Left */}
          <div className='border-r w-3/4 border-gray-200'>

            <div className='flex text-lg justify-between space-x-10 items-center border border-gray-200 p-4'>
              <p className='font-bold text-gray-700'>Check delivery times & services</p>
              <button className='checkout-btn'>Enter Pin Code</button>
            </div>
            <div className='flex text-lg justify-start space-x-10 items-center border border-gray-200 p-4 mt-4'>
              <CheckBadgeIcon className='h-7 w-7' />
              <p className='font-bold text-gray-700'>Available Offers</p>
            </div>
            <div className="mt-4 p-6">
              {items.map(item => (
                <CartProducts item={item} />
              ))}
            </div>
          </div>
          <div>

          </div>
        </main>
      }

    </div >
  )
}

export default Checkout
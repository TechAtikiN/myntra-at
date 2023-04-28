import { Navbar } from '../components'
import { useRouter } from 'next/router'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const Success = () => {

  const router = useRouter()
  return (
    <div className='bg-red-50 h-screen'>
      <Navbar />

      <main className='max-w-screen-lg mx-auto mt-4 text-gray-700'>
        <div className='flex flex-col p-10 bg-white'>
          <div className='flex space-x-3 items-center mx-auto'>
            <CheckCircleIcon className='text-green-500 h-8 w-8' />
            <h2 className='text-2xl text-center font-bold'>Thank You! Your order has been confirmed</h2>
          </div>
          <p className='mt-4 text-lg text-center'>Thank You for shopping with us! We&apos;ll send a confirmation once your item has shipped, If you would like to check the status of your order(s) then please click the link below</p>
          <button onClick={() => router.push('/orders')} className='checkout-btn mt-4 mx-auto'>Go to my orders</button>
        </div>
      </main>

    </div>
  )
}

export default Success

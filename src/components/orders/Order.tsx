import moment from 'moment'
import Image from 'next/image';

interface Props {
  id: string;
  amount: number;
  amountShipping: number;
  items: any;
  timestamp: number;
  images: string[]
}
const Order = ({ id, amount, amountShipping, items, timestamp, images }: Props) => {
  return (
    <div className='relative border rounded-md'>
      <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
        <div>
          <p className='font-semibold text-lg'>Order Placed</p>
          <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
        </div>

        <div>
          <p className='font-semibold text-lg'>Total</p>
          <p>$ {amount}</p>
        </div>

        <p
          className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'
        >
          {items.length} item(s)
        </p>

        <p className='absolute top-2 text-md right-2 w-40 lg:w-72 truncate whitespace-nowrap'>ORDER # {id}</p>
      </div>
      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
          {images.map((image, index) => (
            <Image key={index} className='object-contain sm:h-32' src={image} height={450} width={450} alt='order-image' />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Order

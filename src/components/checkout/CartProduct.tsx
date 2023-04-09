import { addToBasket, removeFromBasket } from '@/src/slices/basketSlice'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

interface Props {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}
const CartProducts = ({ id, title, price, description, category, image }: Props) => {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id, title, description, category, image, price
    }
    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className='md:flex justify-start space-x-5 my-4 p-4 border border-gray-200'>
      <Image className='' src={image} alt='product-img' height={200} width={200} />
      <div className='flex flex-col space-y-3'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>{title}</p>
          <XMarkIcon onClick={removeItemFromBasket} className='h-6 w-6 text-red-600 cursor-pointer' />
        </div>
        <p>{description}</p>
        <p className='text-3xl text-red-500 font-bold'>${price}</p>
      </div>
    </div>
  )
}

export default CartProducts

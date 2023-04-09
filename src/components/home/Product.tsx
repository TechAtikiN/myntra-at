import { addToBasket, selectItems } from '@/src/slices/basketSlice'
import { useDispatch, useSelector } from 'react-redux'

import Image from 'next/image'

interface Props {
  product: Product
}
const Product = ({ product }: Props) => {
  const dispatch = useDispatch()
  const items: Product[] = useSelector(selectItems)

  const addItemToBasket = () => {
    dispatch(addToBasket(product))
  }

  return (
    <div className='p-5 border-gray-200 shadow-md rounded-md space-y-4'>

      <p className='text-sm text-gray-700  top-0 right-0'>{product.category}</p>
      <Image src={product.image} alt='product-image' height={200} width={200} />
      <p className='text-lg font-semibold text-gray-700'>{product.title}</p>
      <p className='text-sm text-gray-700'>{`${product.description.substring(0, 50)}...`}</p>
      <p className='font-semibold'>${product.price}</p>

      <button
        onClick={addItemToBasket}
        className={`align-bottom px-3 py-2 rounded-sm font-semibold border border-red-600 hover:bg-red-500 ${items.includes(product) ? 'bg-red-500 text-white' : 'bg-white text-red-500 hover:text-white'}`}
      >
        {items.includes(product) ? 'Added Successfully!' : 'Add to Basket'}
      </button>

    </div>
  )
}

export default Product

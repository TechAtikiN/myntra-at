import Image from "next/image"

interface Props {
  item: Product
}
const CartProducts = ({ item }: Props) => {
  return (
    <div className='flex justify-start space-x-5 border border-gray-200 my-4 py-4'>
      <Image className='' src={item.images[0]} alt='product-img' height={400} width={400} />
      <div className='flex flex-col space-y-3'>
        <p className='font-bold text-lg'>{item.title}</p>
        <p>{item.description}</p>
        <p className='text-md font-semibold'>{` Category: ${item.category}`}</p>
        <p className='text-2xl text-red-500 font-semibold'>$ {item.price}</p>
        <p>14 Days return available</p>
      </div>
    </div>
  )
}

export default CartProducts

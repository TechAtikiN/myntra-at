import Image from "next/image"

interface Props {
  product: Product
}
const Product = ({ product }: Props) => {
  return (
    <div className='p-5 border-gray-200 shadow-md rounded-md space-y-4'>
      <p className='text-sm text-gray-700  top-0 right-0'>{product.category.name}</p>
      <Image src={product.images[1]} alt='product-image' height={500} width={500} />
      <p className='text-xl font-semibold text-gray-700'>{product.title}</p>
      <p className='font-semibold'>${product.price}</p>
      <button className='bg-gradient-to-b from-red-300 to-red-600 text-white px-3 py-2 rounded-sm font-semibold border border-red-600 hover:bg-red-700'>Add to Basket</button>
    </div>
  )
}

export default Product
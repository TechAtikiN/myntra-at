import Image from "next/image"
import Product from "./Product"

interface Props {
  products: Product[]
}

const ProductFeed = ({ products }: Props) => {
  return (
    <div className=''>
      <div className='px-8 my-10'>
        <h2 className='text-2xl my-10 font-bold text-red-600'>TOP PICKS FOR YOU</h2>
        <div className='grid md:grid-cols-5 grid-flow-row-dense gap-x-10 gap-y-5'>
          {products.slice(0, 5).map((product: Product) => (
            <Product product={product} />
          ))}
        </div>
      </div>

      <Image
        className='h-[30rem] w-full object-cover'
        src='https://burst.shopifycdn.com/photos/makeup-and-jewelry.jpg?width=1850&format=pjpg&exif=1&iptc=1'
        alt='banner-icon'
        height={400}
        width={400}
      />

      <div className='px-8'>
        <h2 className='text-2xl my-10 font-bold text-red-600'>Brands at slashed prices</h2>
        <div className='grid md:grid-cols-3 grid-flow-row-dense gap-x-10 gap-y-5'>
          {products.slice(5, 11).map((product: Product) => (
            <Product product={product} />
          ))}
        </div>
      </div>

      <div className='px-8'>
        <h2 className='text-2xl my-10 font-bold text-red-600'>Categories to bag</h2>
        <div className='grid md:grid-cols-6 grid-flow-row-dense gap-x-5 gap-y-5'>
          {products.slice(11, 29).map((product: Product) => (
            <div className='flex flex-col space-y-4 items-center hover:cursor-pointer'>
              <Image alt='category-product' className='rounded-full h-[11rem] w-[11rem]' src={product.images[2]} height={270} width={250} />
              <p className='font-bold text-lg text-gray-700'>{product.category.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProductFeed

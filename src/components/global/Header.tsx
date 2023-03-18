const Header = () => {
  const categories = ['Watches', 'Offers', 'Essentials', 'Shoes', 'Buy Again', 'Search by Brand', 'Top Picks', 'Pet Supplies', 'Gifts', 'Recent Collection']
  return (
    <div className='hidden md:flex justify-center items-center space-x-10'>
      {categories.map(category => (
        <p className='font-semibold p-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer'>{category}</p>
      ))}
    </div>
  )
}

export default Header

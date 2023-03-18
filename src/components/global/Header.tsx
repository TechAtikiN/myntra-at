const Header = () => {
  const categories = ['Watches', 'Bath Essentials', 'Shoes', 'Dresses', 'Teens Wear', 'Search by Brand', 'Top Picks', 'Luxe', 'Gifts', 'Recent Collection']
  return (
    <div className='flex justify-center shadow-lg items-center space-x-10'>
      {categories.map(category => (
        <p className='font-semibold p-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer'>{category}</p>
      ))}
    </div>
  )
}

export default Header

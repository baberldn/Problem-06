// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin

export default function ButtonVariants() {
  return (
    <span className='flex space-x-4'>
      <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>Create</button>
      <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>Update</button>
      <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>Delete</button>
    </span>
  )
}

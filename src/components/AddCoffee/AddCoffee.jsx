const AddCoffee = () => {
  return (
    <div className='flex flex-col space-y-5 items-center justify-center h-screen'>
      <div>
        <h1 className='text-3xl font-bold my-2 uppercase text-blue-500'>
          Add New Coffee
        </h1>
      </div>
      <form
        // onSubmit={handleUpdate}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='grid grid-cols-2 gap-5'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name='name'
              type='text'
              placeholder='Enter coffee name'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='chef'
            >
              Chef
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='chef'
              name='chef'
              type='text'
              placeholder='Enter coffee chef'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='Supplier'
            >
              Supplier
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='Supplier'
              name='Supplier'
              type='text'
              placeholder='Enter coffee supplier'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='text'
            >
              Taste
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='Taste'
              name='Taste'
              type='text'
              placeholder='Enter coffee taste'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='Category'
            >
              Category
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='Category'
              name='Category'
              type='text'
              placeholder='Enter coffee cagegory'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='Details'
            >
              Details
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='Details'
              name='Details'
              type='text'
              placeholder='Enter coffee details'
              required
            />
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='Photo'>
            Photo
          </label>
          <input
            className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='Photo'
            name='Photo'
            type='text'
            placeholder='Enter photo url'
            required
          />
        </div>
        {/* Submit button */}
        <div className='flex items-center justify-between '>
          <button
            className='bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;

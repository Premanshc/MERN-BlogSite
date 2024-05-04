import Header from '../components/Header'

function BlogCard(){
    return(
        <>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <img className='rounded-t-lg' src='./images/blog card images/category/1.png' alt='image' />
                <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>heading or title</h3>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>description</p>
            </div>
        </>
    )
}

function Category() {
  return (
    <>
    <Header />
    <div className='flex justify-center'>
        <h1 className='text-4xl font-bold mb-3'>Category</h1>

    </div>
    <div className='flex justify-center gap-4 '>
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
    </>
  )
}

export default Category

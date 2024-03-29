const BlogPost = () => {
  const postContent = {
    title: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    description:
      'Vel nulla magni nemo harum accusantium magnam ipsum quidem odio omnis sunt dolorum quo officiis dolore fugit consequuntur distinctio, quae nihil perferendis!',
    imageSrc:
      'https://www.wonderplugin.com/wp-content/uploads/2019/05/sydney-opera-house.jpg',
  }

  const renderPost = () => (
    <div className='flex flex-col'>
      <a
        href='/'
        className='flex flex-col bg-gray-50 border border-gray-200  items-center justify-center rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <img
          className='object-cover w-2/3 mt-3 h-2/3 rounded-lg'
          src={postContent.imageSrc}
          alt=''
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {postContent.title}
          </h5>
          <p className='mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400'>
            {postContent.description}
          </p>
        </div>
      </a>
    </div>
  )

  return (
    <div className='flex flex-col items-center space-y-4'>
      <h2 className='font-bold text-2xl'>
        Memnuniyet hakkında bişeyler & Yorumlar falan{' '}
      </h2>
      <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
        {renderPost()}
        {renderPost()}
        {renderPost()}
      </div>
    </div>
  )
}

export default BlogPost

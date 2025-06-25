import React from 'react'

export const Blogcard = ({blog}) => {
  return (
   <div className="card bg-base-100  shadow-sm h-full hover:shadow-2xl mx-2">
  <figure className='h-[250px]'>
    <img className='h-full w-full'
      src={blog?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{blog?.title}</h2>
    <p className='line-clamp-2'>{blog?.content}</p>
    <div className="card-actions flex-wrap justify-start mt-2">
          {blog.tags?.map((tag, ind) => (
            <span key={ind} className="badge badge-outline text-sm">
              #{tag}
            </span>
          ))}
        </div>
  </div>
</div>
  )
}

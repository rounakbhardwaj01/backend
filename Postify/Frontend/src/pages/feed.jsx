import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: 'https://images.unsplash.com/photo-1786148268017-b0d8b9b31e9b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'buck in velvet'
        }
    ])


    useEffect(() => {

      axios.get('http://localhost:3000/post')
      .then((res) => {
        setPosts(res.data.post)
      })

    }, [])

    return (
        <section 
        className=" flex flex-col items-center justify-center gap-5  h-full w-full bg-amber-100 p-5 m-10">

            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} 
                    className="mb-5">

                        <img 
                        className='w-full rounded-b-lg'                      
                        src={post.image} alt="" />

                        <p
                        className='text-2xl text-center'
                        >{post.caption}</p>

                    </div>
                ))
            ) : (
                <h1>No Post available</h1>
            )}

        </section>
    )
}

export default Feed
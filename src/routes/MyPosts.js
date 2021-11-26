import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Post from '../components/Post'

const MyPosts = () => {
    const username = useSelector(state=> state.user.username)
    const posts = useSelector(state => state.posts.posts)
    const userPosts = posts.filter(post => post.author === username)
    return (
        <div>
          <br />
            <Banner title="My Posts" /> 
          
          <br />
          <br />
        <div className="posts_container">
        <div class="row " style={{ justifyContent: "space-evenly" }}>
            {userPosts.length === 0 && <h1 style={{textAlign: 'center'}}>You currently have no posts</h1>}
          {userPosts &&
            userPosts.map((post) => (
              <div class="col-4" style={{ marginLeft: 0, marginTop: 20 }}>
                  
                <Post
                  title={post.title}
                  language={post.language}
                  description={post.description}
                  createdAt={post.createdAt}
                  id={post.id}
                  likes={post.likes}
                  author={post.author}
                  showButtons = {true}
                ></Post>
              </div>
            ))}
        </div>
        </div>
            
        </div>
    )
}

export default MyPosts

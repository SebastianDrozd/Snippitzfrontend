import React from 'react'
import SideBar from '../components/SideBar'
import SinglePost from '../components/SinglePost'
const PostPage = () => {
    return (
        <div>
             <div class="container">
        <div class="row">
          <div class="col-2">
            <SideBar/>
        
          </div>
          <div class="col-8">
            <SinglePost/>
            
          </div>
        </div>
      </div>
        </div>
    )
}

export default PostPage

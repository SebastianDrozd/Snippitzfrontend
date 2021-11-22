import React from 'react'
import SideBar from '../components/SideBar'
import SinglePost from '../components/SinglePost'
const PostPage = () => {
    return (
        <div>
             <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <SideBar/>
        
          </div>
          <div class="col-9">
            <SinglePost/>
            
          </div>
        </div>
      </div>
        </div>
    )
}

export default PostPage

import React from 'react'
import CreatePostContent from '../components/CreatePostContent'
import SideBar from '../components/SideBar'

const CreatePost = () => {
    return (
        <div className="container">
            <div class="row" style={{ padding: "1em" }}>
        <div class="col-2">
          <SideBar />
        
        </div>
        <div class="col-9">
          
        <CreatePostContent/>
        </div>
      </div>
          
        </div>
    )
}

export default CreatePost

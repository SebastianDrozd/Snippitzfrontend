import React from 'react'
import './CommentBox.css'
const CommentBox = () => {
   // {loggedIn == true? <div> <textarea onChange={(e) => {setComment(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="50" /> <button onClick={handleSumbit}>post comment</button></div> : ""}
        
    return (
        <div>
            <div className="comments">
		<div className="comment-wrap">
				<div className="photo">
						<div className="avatar" ></div>
				</div>
				<div className="comment-block">
						<form action="">
								<textarea name="" id="" cols="30" rows="3" placeholder="Add comment..."></textarea>
						</form>
				</div>
		</div>

		

		
</div>

</div>
            
            
    )
}

export default CommentBox

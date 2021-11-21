import moment from 'moment';
import React,{useState,useEffect} from 'react'
import CommentBox from './CommentBox'
import './CommentSection.css'
const CommentSection = ({comments,id}) => {
	const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")));
  useEffect(() => {
    
    console.log(loggedIn);
  }, []);
    return (
        <div>
      
	<div className="comments-container">
		<h1 style={{display: 'inline'}}>Comments</h1>
        <p style={{ paddingLeft: 70, display: "inline" }}>Sort by </p>
        <select id="cars">
          <option value="volvo">Popularity</option>
          <option value="saab">Date Created</option>
        </select>
        {loggedIn == true? <CommentBox id={id}/> : ""}
		
		<ul id="comments-list" className="comments-list">
		{comments && comments.map(comment => (
			<li>
				<div className="comment-main-level">
				
					<div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/></div>
				
					<div className="comment-box">
						<div className="comment-head">
							<h6 className="comment-name"><a href="http://creaticode.com/blog">{comment.snipUser}</a></h6>
							<span>{moment(comment.createdAt).fromNow()}</span>
							
							<i className="fa fa-reply"></i>
							<i className="fa fa-heart"></i>
						</div>
						<div className="comment-content">
							{comment.commentMessage}
						</div>
					</div>
				</div>
			</li>
		))}

			
		</ul>
	</div>
        </div>
    )
}

export default CommentSection

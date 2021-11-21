import React from 'react'
import CommentBox from './CommentBox'
import './CommentSection.css'
const CommentSection = () => {
    return (
        <div>
      
	<div className="comments-container">
		<h1 style={{display: 'inline'}}>Comments</h1>
        <p style={{ paddingLeft: 70, display: "inline" }}>Sort by </p>
        <select id="cars">
          <option value="volvo">Popularity</option>
          <option value="saab">Date Created</option>
        </select>
        <CommentBox/>
		<ul id="comments-list" className="comments-list">
			<li>
				<div className="comment-main-level">
				
					<div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
				
					<div className="comment-box">
						<div className="comment-head">
							<h6 className="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
							<span>hace 20 minutos</span>
							<i className="fa fa-reply"></i>
							<i className="fa fa-heart"></i>
						</div>
						<div className="comment-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						</div>
					</div>
				</div>
			
				<ul className="comments-list reply-list">
					<li>
					
						<div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/></div>
					
						<div className="comment-box">
							<div className="comment-head">
								<h6 className="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
								<span>hace 10 minutos</span>
								<i className="fa fa-reply"></i>
								<i className="fa fa-heart"></i>
							</div>
							<div className="comment-content">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
							</div>
						</div>
					</li>

					<li>
					
						<div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
					
						<div className="comment-box">
							<div className="comment-head">
								<h6 className="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
								<span>hace 10 minutos</span>
								<i className="fa fa-reply"></i>
								<i className="fa fa-heart"></i>
							</div>
							<div className="comment-content">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
							</div>
						</div>
					</li>
				</ul>
			</li>

			<li>
				<div className="comment-main-level">
				
					<div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/></div>
				
					<div className="comment-box">
						<div className="comment-head">
							<h6 className="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
							<span>hace 10 minutos</span>
							<i className="fa fa-reply"></i>
							<i className="fa fa-heart"></i>
						</div>
						<div className="comment-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
        </div>
    )
}

export default CommentSection

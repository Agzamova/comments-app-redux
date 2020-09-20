import React from 'react'

const CommentsList = ({ commentList, deleteComment }) => {
	let noComments

	if (commentList.comments.length) {
		noComments = commentList.comments.map(comment => {
			return (
				<li className='comment__item' key={comment.id}>
					<p className='comment__author'>{comment.author}</p>
					<p className='comment__text'>{comment.comment}</p>
					<div className='comment__details'>
						<p className='details__data'>{comment.date} {comment.time}</p>
						<button 
							className='details__btn'
							title='delete'
							onClick={() => {
							deleteComment(comment.id)
							}}
						>delete</button>
					</div>
				</li>
			)
		})
		} else {
			noComments = <p className='form__title'>No comments left</p>
	}

	return noComments
}

export default CommentsList

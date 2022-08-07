import React from 'react'
import { connect } from 'react-redux'
import Form from './components/Form'
import CommentsList from './components/CommentsList'
import { addComment, getComment, deleteComment, handleAuthor, handleComment } from './actions/actions'

const App = ({ form, handleAuthor, handleComment, addComment, deleteComment, comments }) => {
	return (
		<div className='wrapper'>
			<header>
				<h1 className='title'>Comments</h1>
			</header>
			<main>
				<Form
					author={form.author}
					comment={form.comment}
					handleAuthor={handleAuthor}
					handleComment={handleComment}
					addComment={addComment}
					deleteComment={deleteComment}
				/>
				<ul className='comment__list'>
					<CommentsList 
						commentList={comments} 
						deleteComment={deleteComment} 
					/>
				</ul>
			</main>
		</div>
	)
}

const mapStateToProps = store => {
	return {
		form: store.form,
		comments: store.comments,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleAuthor: e => dispatch(handleAuthor(e)),
		handleComment: e => dispatch(handleComment(e)),
		addComment: comment => dispatch(addComment(comment)),
		deleteComment: id => dispatch(deleteComment(id)),
		getComment: () => dispatch(getComment())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react'

const Form = props => {
	const { handleAuthor, handleComment, addComment } = props

	const getDateComment = () => {
		const date = new Date().getDate() + '.' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '.' + new Date().getFullYear()
		return date
	}

	const getTimeComment = () => {
		const time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'})
		return time
	}

	const validateInput = str => {
		if (str.match(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi)) {
			return false
		}
			return true
	}

	const validateComment = e => {
		e.preventDefault()
		const authorVal = props.author.trim()
		const commentVal = props.comment.trim()

		if (authorVal && commentVal) {
			if (validateInput(props.author) && validateInput(props.comment)) {
				return true
			} else {
				alert('Not correct value of the fields')
			}
		} else {
			alert('No content. Fields should not be empty')
		}
	}

	return (
		<div className='add__comment'>
			<form
				className='form'
				name='comments'
				onSubmit={e => {
					if (validateComment(e)) {
						addComment({
							id: `${(+new Date()).toString(16)}`,
							author: props.author,
							comment: props.comment,
							date: getDateComment(),
							time: getTimeComment(),
						})
						document.querySelector('.form__input').value='';
                        document.querySelector('.form__textinput').value='';
					} 
				}}
			>
				<fieldset className='form__field'>
					<legend className='form__title'>Add a new comment</legend>
					<input
						className='form__input'
						type='text'
						name='author'
						placeholder="Author's name"
						onChange={e => {
							handleAuthor(e)
						}}
					/>
					<textarea
						className='form__textinput'
						type='text'
						name='text'
						placeholder='Your comment here'
						onChange={e => {
							handleComment(e)
						}}
					/>
					<button className='form__btn' type='submit'>Add</button>
				</fieldset>
			</form>
		</div>
	)
}

export default Form

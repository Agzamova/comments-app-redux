export function addComment(comment) {
	return {
		type: 'ADD_COMMENT',
		comment,
	}
}
export function getComment() {
	return {
		type: 'GET_COMMENT'
	}
}
export function deleteComment(id) {
	return {
		type: 'DELETE_COMMENT',
		id,
	}
}

export function handleAuthor(e) {
	const newValue = e.target.value
	return {
		type: 'CHANGE_AUTHOR',
		newValue,
	}
}

export function handleComment(e) {
	const newValue = e.target.value
	return {
		type: 'CHANGE_COMMENT',
		newValue,
	}
}
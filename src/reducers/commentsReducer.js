const initialState = {
	comments: [
		{id: 1, author: 'Natalia Agzamova', comment: 'Hello world', date: '16.07.2022', time: '9:00:00'},
		{id: 2, author: 'Vlad Ivanov', comment: 'Hello there', date: '18.07.2022', time: '9:00:10'},
		{id: 3, author: 'Maksim Petrov', comment: 'Hello people', date: '26.07.2022', time: '10:00:20'},
	],
}

export function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_COMMENTS':
			return state
		case 'ADD_COMMENT':
			return { ...state, comments: [action.comment, ...state.comments] }
		case 'DELETE_COMMENT':
			const updateList = {
				comments: state.comments.filter(comment => comment.id !== action.id)
			}
			return updateList
		default:
			return state
	}
}

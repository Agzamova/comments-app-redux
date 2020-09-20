const initState = {
	author: '',
	comment: '',
}

export function formReducer(state = initState, action) {
	switch (action.type) {
		case 'CHANGE_AUTHOR':
			return {
				...state,
				author: action.newValue,
			}
		case 'CHANGE_COMMENT':
			return {
				...state,
				comment: action.newValue,
			}

		default:
			return state
	}
}

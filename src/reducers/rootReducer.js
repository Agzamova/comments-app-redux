import { combineReducers } from 'redux'
import { formReducer } from './formReducer'
import { commentsReducer } from './commentsReducer'

export const rootReducer = combineReducers({
	form: formReducer,
	comments: commentsReducer,
})
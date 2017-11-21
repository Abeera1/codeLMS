import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers/FinalReducer'

const initialState = 
{
	loggedIn: false,
	isLoading: false, // miss
	errorOccured: false, // miss
	dataFetched: {}, // miss
	enrolledCourses: [],
	activeCourse: ''
}

export default function configureStore() 
{
	//console.log(initialState)
	return createStore
	(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);
}

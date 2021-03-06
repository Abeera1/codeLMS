import axios from 'axios'


// actions
export const USER_LOGGED_IN = 'USER_LOGGED_IN'


// action creators

export const isLoading = bool =>
({
	type: 'LOADING',
	isLoading: bool
});


export function loggedIn(input) // and you dont need any argument here...?
{
	//console.log('user logged in!')
	//console.log(input)
	return { type: USER_LOGGED_IN, input }
}


export const errorOccured = error =>
({
	type: 'ERROR_OCCURED',
	errorOccured: bool
});

export const dataFetched = data =>
({
	type: 'DATA_FETCHED',
	data
});

export const studentLoginRequest = userData =>
{
	return (dispatch) =>
	{
		return axios.post('/loginS', userData)
	}
}


export const instructorLoginRequest = userData =>
{
	return (dispatch) =>
	{
		return axios.post('/loginI', userData)
	}
}


export const getInstructorCourses = userData =>
{
	return dispatch =>
	{
		return axios.post('/loginI/instructor', userData)
	}
}

export const getCoursesAfterLoginSuccess = username =>
{
	return (dispatch) =>
	{
		return axios.post('/loginS/student', username)
	}
}




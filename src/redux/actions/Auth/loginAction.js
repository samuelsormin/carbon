import axios from 'axios'
import qs from 'qs'
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../types'

export const login = formData => async dispatch => {
  const post = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(formData),
    url: 'https://glint-ecomerce.herokuapp.com/api/v1/users/auth',
  }

  try {
    const response = await axios(post)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data.token
    })

  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: LOGIN_FAIL, 
      payload: error.response.data
    })
  }
}
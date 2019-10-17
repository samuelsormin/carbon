import axios from 'axios'
import qs from 'qs'
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../../types'

export const register = formData => async dispatch => {
  const post = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(formData),
    url: 'https://glint-ecomerce.herokuapp.com/api/v1/users',
  }

  try {
    const response = await axios(post)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data.results
    })

  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: REGISTER_FAIL, 
      payload: error.response.data
    })
  }
}
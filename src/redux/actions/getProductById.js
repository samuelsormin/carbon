import axios from 'axios'
import { GET_PRODUCT_BY_ID } from '../types'

export const getProductById = id => async dispatch => {
  const get = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    url: `https://glint-ecomerce.herokuapp.com/api/v1/product/${id}`,
  }

  const response = await axios(get)

  dispatch({
    type: GET_PRODUCT_BY_ID,
    payload: response.data.results
  })
}
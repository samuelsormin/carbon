import axios from 'axios'
import { GET_PRODUCTS } from '../types'

export const getProducts = () => async dispatch => {
  const get = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    url: 'https://glint-ecomerce.herokuapp.com/api/v1/product',
  }

  const response = await axios(get)

  dispatch({
    type: GET_PRODUCTS,
    payload: response.data.results
  })
}
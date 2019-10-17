import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from '../types'

const initialState = {
  products: [],
  details_by_Id: [],
  loading: true,
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload
      }

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        details_by_Id: payload
      }

    default:
      return state
  }
}
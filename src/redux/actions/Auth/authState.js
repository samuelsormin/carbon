import { GET_AUTH_STATE } from '../../types'

export const authState = () => async dispatch => {
  dispatch({
    type: GET_AUTH_STATE
  })
}
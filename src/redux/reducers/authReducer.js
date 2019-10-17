import { 
  REGISTER_SUCCESS, 
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL, 
  GET_AUTH_STATE
} from '../types'

const initialState = {
  token: sessionStorage.getItem('auth_token'),
  isAuthenticated: null,
  isRegistered: null,
  loading: true,
  error: []
}

export default function(state = initialState, action) {
  const {type, payload} = action
  
  switch(type) {
    case GET_AUTH_STATE:
      return {
        ...state
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        loading: false
      }
    
    case REGISTER_FAIL:
      return {
        ...state,
        isRegistered: false,
        loading: false
      }

    case LOGIN_SUCCESS:
      sessionStorage.setItem('auth_token', payload)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    
    case LOGIN_FAIL:
      sessionStorage.removeItem('auth_token')
      return {
        ...state,
        isAuthenticated: false,
        loading: false
      }
    
    default:
      return state
  }
}
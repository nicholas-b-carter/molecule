import { getUser } from 'utils/auth'
import { LOGIN_SUCCESS, LOGIN_FAILED, SIGN_UP_FAILED } from './constants'

const initialState = {
  user: getUser(),
}

function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case LOGIN_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    case SIGN_UP_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state
  }
}

export default authReducer

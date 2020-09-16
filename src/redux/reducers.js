import { ACTION_TYPE } from './constants'

const initialState = {
  medList: []
}

export default (state = initialState, action) =>  {
  switch (action.type) {
    case ACTION_TYPE.SET_MED_LIST: {
      return state
    }
    default: return state
  }
}


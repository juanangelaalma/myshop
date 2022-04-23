import { SET_MENU } from "../actions/type"

const initialState = {
  active: "home"
}

export default function(state = initialState, action) {
  switch(action.type){
    case SET_MENU:
      return action.payload
    default:
      return state
  }
}
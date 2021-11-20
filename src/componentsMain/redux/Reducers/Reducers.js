import {ADD_VALUES} from './../Actions/ActionTypes';

const initialState = {
  values: []
}

export const addValues = (state = initialState, action) => {
  switch(action.type){
    case ADD_VALUES : {
      return {
        ...state,
        values: action.payload
      }
    }
    default: 
    return state
  }
}
import {ADD_VALUES} from './ActionTypes'

export const addValues = (values) => {
  return (dispatch) => {
    dispatch({type: ADD_VALUES, payload: values})
  }
}
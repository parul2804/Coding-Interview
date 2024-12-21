import {ADD_A_WIDGET, DELETE_WIDGET, SET_WIDGETS, UPDATE_WIDGET} from '../constants'
export const createWidget = (widget) => ({
    type: ADD_A_WIDGET,
    payload: widget,
  });
  
  export const deleteWidget = (widget) => (
    
    {
    type: DELETE_WIDGET,
    payload: widget,
  });
  
  export const updateAWidget = (updatedWidget) => ({
    type: UPDATE_WIDGET,
    payload: updatedWidget,
  });
  export const setWidgets = (widgetsArr) => ({
    type: SET_WIDGETS,
    payload: widgetsArr,
  });
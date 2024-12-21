// services/Reducers/widgetReducer.js

import { SET_WIDGETS, ADD_A_WIDGET, DELETE_WIDGET, UPDATE_WIDGET } from '../constants';

const initialState = {
  widgets: [],  // Initialize the widgets array
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WIDGETS: 
    return {
   ...state,
        widgets: action.payload,
  };
    case ADD_A_WIDGET:

        console.log('action w widgets', [...state.widgets, action.payload]);
        console.log('action w is', action.payload);
        
       
      return {
        ...state,
        widgets: [...state.widgets, action.payload],  // Add new widget to the array
      };
    case DELETE_WIDGET: 
    console.log('Parul deleteWidget', action.payload)
    console.log('Parul deleteWidget state.widgets', state.widgets)
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.name !== action.payload.name),  // Remove widget by id
      };
    case UPDATE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.map(widget =>
          widget.id === action.payload.id ? action.payload : widget  // Update widget by id
        ),
      };
    default:
      return state;
  }
};

export default widgetReducer;

// store.js

import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from '../services/Reducers/widgetReducer'; // Adjust path if needed

const store = configureStore({
  reducer: {
    widgets: widgetReducer,  // Make sure the reducer is correctly named
  },
});

export default store;

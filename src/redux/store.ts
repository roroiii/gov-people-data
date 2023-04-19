import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingReducer';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export default store;

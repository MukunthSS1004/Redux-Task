import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../components/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer
  }
});

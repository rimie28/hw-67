import { configureStore } from '@reduxjs/toolkit';
import keypadLockReducer from '../containers/KeypadLock/KeypadLockSlice.ts'


export const store = configureStore({
  reducer: {
    keypadLock: keypadLockReducer,
  }
})

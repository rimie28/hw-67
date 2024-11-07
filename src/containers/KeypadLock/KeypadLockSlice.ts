import { createSlice } from '@reduxjs/toolkit';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;

interface keypadLockState {
  input: string,
  access: "pass"| "wrong" | null,
  pin: string,
}

const initialState:keypadLockState = {
  input: "",
  access: null,
  pin: "1337"
}

const keypadLockSlice = createSlice({
  name: 'keypadLock',
  initialState,
  reducers: {
    writeInput: (state, action) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    deleteInput: (state) => {
      state.input = state.input.slice(0, -1);
    },
    checkPin: (state) => {
      state.access = state.input === state.pin ? "pass" : "wrong";
      state.input =''
    }
  }
})

export const {writeInput, deleteInput, checkPin} = keypadLockSlice.actions;
export default keypadLockSlice.reducer;
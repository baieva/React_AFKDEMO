import { createSlice } from '@reduxjs/toolkit'

export const powSlice = createSlice({
  name: 'pow',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementPow: (state) => {
      state.value += 1
    },
    decrementPow: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountPow: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountPow: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountPow: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementPow, decrementPow, incrementByAmountPow, decrementByAmountPow, setAmountPow } = powSlice.actions

export default powSlice.reducer
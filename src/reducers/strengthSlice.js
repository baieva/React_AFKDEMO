import { createSlice } from '@reduxjs/toolkit'

export const strengthSlice = createSlice({
  name: 'str',
  initialState: {
    value: 3,
  },
  reducers: {
    incrementStr: (state) => {
      state.value += 1
    },
    decrementStr: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountStr: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountStr: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountStr: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementStr, decrementStr, incrementByAmountStr, decrementByAmountStr, setAmountStr } = strengthSlice.actions

export default strengthSlice.reducer
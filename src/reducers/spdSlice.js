import { createSlice } from '@reduxjs/toolkit'

export const spdSlice = createSlice({
  name: 'spd',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementSpd: (state) => {
      state.value += 1
    },
    decrementSpd: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountSpd: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountSpd: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountSpd: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementSpd, decrementSpd, incrementByAmountSpd, decrementByAmountSpd, setAmountSpd } = spdSlice.actions

export default spdSlice.reducer
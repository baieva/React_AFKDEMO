import { createSlice } from '@reduxjs/toolkit'

export const agilitySlice = createSlice({
  name: 'agi',
  initialState: {
    value: 3,
  },
  reducers: {
    incrementAgi: (state) => {
      state.value += 1
    },
    decrementAgi: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountAgi: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountAgi: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountAgi: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementAgi, decrementAgi, incrementByAmountAgi, decrementByAmountAgi, setAmountAgi } = agilitySlice.actions

export default agilitySlice.reducer
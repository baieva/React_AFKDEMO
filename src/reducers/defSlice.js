import { createSlice } from '@reduxjs/toolkit'

export const defSlice = createSlice({
  name: 'def',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementDef: (state) => {
      state.value += 1
    },
    decrementDef: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountDef: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountDef: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountDef: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementDef, decrementDef, incrementByAmountDef, decrementByAmountDef, setAmountDef } = defSlice.actions

export default defSlice.reducer
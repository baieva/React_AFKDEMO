import { createSlice } from '@reduxjs/toolkit'

export const lukSlice = createSlice({
  name: 'luk',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementLuk: (state) => {
      state.value += 1
    },
    decrementLuk: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountLuk: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountLuk: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountLuk: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementLuk, decrementLuk, incrementByAmountLuk, decrementByAmountLuk, setAmountLuk } = lukSlice.actions

export default lukSlice.reducer
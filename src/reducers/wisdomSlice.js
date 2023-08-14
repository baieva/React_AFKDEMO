import { createSlice } from '@reduxjs/toolkit'

export const wisdomSlice = createSlice({
  name: 'wis',
  initialState: {
    value: 3,
  },
  reducers: {
    incrementWis: (state) => {
      state.value += 1
    },
    decrementWis: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountWis: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountWis: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountWis: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementWis, decrementWis, incrementByAmountWis, decrementByAmountWis, setAmountWis } = wisdomSlice.actions

export default wisdomSlice.reducer
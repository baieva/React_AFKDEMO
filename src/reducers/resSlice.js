import { createSlice } from '@reduxjs/toolkit'

export const resSlice = createSlice({
  name: 'res',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementRes: (state) => {
      state.value += 1
    },
    decrementRes: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountRes: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountRes: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountRes: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementRes, decrementRes, incrementByAmountRes, decrementByAmountRes, setAmountRes } = resSlice.actions

export default resSlice.reducer
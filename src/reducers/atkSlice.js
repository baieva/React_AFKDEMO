import { createSlice } from '@reduxjs/toolkit'

export const atkSlice = createSlice({
  name: 'atk',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementAtk: (state) => {
      state.value += 1
    },
    decrementAtk: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountAtk: (state, action) => {
        state.value += action.payload
    },
    decrementByAmountAtk: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountAtk: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementAtk, decrementAtk, incrementByAmountAtk, decrementByAmountAtk, setAmountAtk } = atkSlice.actions

export default atkSlice.reducer
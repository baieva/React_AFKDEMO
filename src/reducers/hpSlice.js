import { createSlice } from '@reduxjs/toolkit'

export const hpSlice = createSlice({
  name: 'hp',
  initialState: {
    value: 1,
    max: 100,
    overload: 0,
  },
  reducers: {
    incrementHp: (state) => {
      state.value += 1
    },
    decrementHp: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountHp: (state, action) => {
        state.value += action.payload
        if(state.value < 0) state.value = 0
    },
    decrementByAmountHp: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountHp: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
    incrementHpM: (state) => {
      state.max += 1
    },
    decrementHpM: (state) => {
      if(state.max > 0) {
        state.max -= 1
      }
    },
    incrementByAmountHpM: (state, action) => {
        state.max += action.payload
    },
    decrementByAmountHpM: (state, action) => {
      state.max -= action.payload
      if(state.max < 0) state.max = 0
    },
    setAmountHpM: (state, action) => {
        if(action.payload >= 0) state.max = action.payload
    },
    checkHpLimit: (state, action) => {
        if(state.value > action.payload) state.value = action.payload
    },
    setOverloadHp: (state, action) => {
        state.overload = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementHp, decrementHp, incrementByAmountHp, decrementByAmountHp, setAmountHp, incrementHpM, decrementHpM, incrementByAmountHpM, decrementByAmountHpM, setAmountHpM, checkHpLimit, setOverloadHp } = hpSlice.actions

export default hpSlice.reducer
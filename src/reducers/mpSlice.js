import { createSlice } from '@reduxjs/toolkit'

export const mpSlice = createSlice({
  name: 'mp',
  initialState: {
    value: 1,
    max: 20,
    overload: 0,
  },
  reducers: {
    incrementMp: (state) => {
      state.value += 1
    },
    decrementMp: (state) => {
      if(state.value > 0) state.value -= 1
    },
    incrementByAmountMp: (state, action) => {
        state.value += action.payload
        if(state.value < 0) state.value = 0
    },
    decrementByAmountMp: (state, action) => {
      state.value -= action.payload
      if(state.value < 0) state.value = 0
    },
    setAmountMp: (state, action) => {
        if(action.payload >= 0) state.value = action.payload
    },
    incrementMpM: (state) => {
      state.max += 1
    },
    decrementMpM: (state) => {
      if(state.max > 0) {
        state.max -= 1
      }
    },
    incrementByAmountMpM: (state, action) => {
        state.max += action.payload
    },
    decrementByAmountMpM: (state, action) => {
      state.max -= action.payload
      if(state.max < 0) state.max = 0
    },
    setAmountMpM: (state, action) => {
        if(action.payload >= 0) state.max = action.payload
    },
    checkMpLimit: (state, action) => {
        if(state.value > action.payload) state.value = action.payload
    },
    setOverloadMp: (state, action) => {
        state.overload = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementMp, decrementMp, incrementByAmountMp, decrementByAmountMp, setAmountMp, incrementMpM, decrementMpM, incrementByAmountMpM, decrementByAmountMpM, setAmountMpM, checkMpLimit, setOverloadMp } = mpSlice.actions

export default mpSlice.reducer
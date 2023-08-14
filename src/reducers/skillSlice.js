import { createSlice } from '@reduxjs/toolkit'

export const skillSlice = createSlice({
  name: 'skill',
  initialState: {
    value: [0,1,2],
  },
  reducers: {
    addSkill: (state, action) => {
        state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addSkill } = skillSlice.actions

export default skillSlice.reducer
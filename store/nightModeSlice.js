import { createSlice } from '@reduxjs/toolkit'

const nightModeSlice = createSlice({
  name: "nightMode",
  initialState: {
    nightMode: false
  },
  reducers: {
    active: state => {
      state.nightMode = true
    },
    inactive: state => {
      state.nightMode = false
    },
    toggle: state => {
      state.nightMode = !state.nightMode
    }
  }
})

export default nightModeSlice

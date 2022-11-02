import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebar: false
  },
  reducers: {
    open: state => {
      state.sidebar = true
    },
    close: state => {
      state.sidebar = false
    },
    toggle: state => {
      state.sidebar = !state.sidebar
    }
  }
})

export default sidebarSlice

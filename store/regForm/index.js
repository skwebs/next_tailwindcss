import { createSlice } from '@reduxjs/toolkit'
import secureLocalStorage from 'react-secure-storage'


const regFormSlice = createSlice({
  name: "regForm",
  initialState: {
    userData: {
      father_name: ""
    },
    step: 1,
  },
  reducers: {
    onchange: (state, action) => {
      state.userData = { ...state.userData, [action.payload.name]: action.payload.value }
      console.log("action.payload", action.payload);
      localStorage.ud = window.btoa(JSON.stringify(action.payload));
      secureLocalStorage.setItem("ud", action.payload)
    },
    stepBack: state => {
      state.step = state.step > 1 ? state.step - 1 : 1
    },
    stepFwd: state => {
      state.step += 1
    },
    onsubmit: state => {
      state.userData = state.userData
    },
    clearform: state => {
      state.userData = initialState
    }
  }
})

export default regFormSlice

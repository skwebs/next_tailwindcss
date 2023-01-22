import { createSlice } from '@reduxjs/toolkit'

const nightModeSlice = createSlice({
  name: "nightMode",
  initialState: {
    nightMode: false
  },
  reducers: {
    active: state => {
      state.nightMode = true;
      localStorage.setItem("theme", "dark");
    },
    inactive: state => {
      state.nightMode = false
      localStorage.setItem("theme", "light");
    },
    toggle: state => {
      if (localStorage.getItem("dark")) {
        state.nightMode = false;
        document.documentElement.className = 'dark';
        localStorage.setItem("dark", false);
      } else {
        state.nightMode = true;
        document.documentElement.className = '';
        localStorage.setItem("dark", true);
      }
      // state.nightMode = !state.nightMode;
      // if (localStorage.theme && localStorage.theme === "dark") {
      //   console.log("dark from slice");
      //   localStorage.theme = "light";
      //   state.nightMode = false;
      // } else {
      //   localStorage.theme = "dark";
      //   state.nightMode = true;
      //   console.log("light from slice");
      // }
      // if (localStorage.getItem("theme-color-scheme") === "dark") {
      //   localStorage.setItem("theme-color-scheme", "light");
      //   state.nightMode = false;
      // } else {
      //   localStorage.setItem("theme-color-scheme", "dark");
      //   state.nightMode = true;
      // }

      // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      //   document.documentElement.className = "dark";
      //   state.nightMode = true;
      // } else {
      //   document.documentElement.className = "";
      //   state.nightMode = false;
      // }
    }
  }
})

export default nightModeSlice

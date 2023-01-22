import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './sidebarSlice';
import nightModeSlice from './nightModeSlice';
import regFormSlice from './regForm';


// config the store
const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    nightMode: nightModeSlice.reducer,
    regForm: regFormSlice.reducer
  }
})

// export default the store
export default store

// export the action
export const sidebarAction = sidebarSlice.actions
export const nightModeAction = nightModeSlice.actions
export const regFormAction = regFormSlice.actions

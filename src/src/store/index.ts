import { configureStore } from '@reduxjs/toolkit'
import pathSlice from './features/routePath'
import sidebarSlice from './features/sidebar'

export const store = configureStore({
  reducer: {
    getPath: pathSlice,
    sidebar: sidebarSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
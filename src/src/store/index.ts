import { configureStore } from '@reduxjs/toolkit'
import pathSlice from './features/routePath'

export const store = configureStore({
  reducer: {
    getPath: pathSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
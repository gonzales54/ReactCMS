import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface sidebarState {
  isOpen: boolean
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false
  } as sidebarState,
  reducers: {
    setSidebarStatus: (state: sidebarState, action: PayloadAction<boolean>) => {
      state.isOpen  = action.payload;
    }
  }
})

export const { setSidebarStatus } = sidebarSlice.actions;
export default sidebarSlice.reducer;
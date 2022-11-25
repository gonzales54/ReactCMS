import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface pathState {
  pathname: string
}

export const pathSlice = createSlice({
  name: 'getPath',
  initialState: {
    pathname: ''
  } as pathState,
  reducers: {
    setPath: (state: pathState, action: PayloadAction<string>) => {
      state.pathname = action.payload;
    }
  }
})

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;
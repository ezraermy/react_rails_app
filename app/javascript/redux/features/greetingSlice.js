import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

export const fetchMessage = createAsyncThunk(
  'geeting/fetchMessage',
  async () => {
    const response = await fetch('/api/message');
    const data = await response.json();
    return data;
  }
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetingSlice.reducer;
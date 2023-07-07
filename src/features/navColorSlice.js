import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLORS_URL } from '../const';

export const fetchNavColors = createAsyncThunk(
    "color/fetchNavColors",
    async () => {
        const response = await fetch(COLORS_URL);
        const data = await response.json();
        return data;
    }
)

const navColorSlice = createSlice({
    name: 'color',
    initialState: {
        activeColor: 'white',
        status: 'idle',
        colorList: [],
        error: null,
    },
    reducers: {
        setActiveColor: (state, action) => {
            state.activeColor = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNavColors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNavColors.fulfilled, (state, action) => {
                state.status = 'success';
                state.colorList = action.payload;
            })
            .addCase(fetchNavColors.rejected, (state, action) => {
                state.status = 'Failed';
                state.error = action.error.message;
            })
    }
});

export const { setActiveColor } = navColorSlice.actions;

export default navColorSlice.reducer;
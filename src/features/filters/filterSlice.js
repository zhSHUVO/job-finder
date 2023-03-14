const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filter: "",
    sort: "",
    search: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        selectedFilter: (state, action) => {
            state.filter = action.payload;
        },
        sortBy: (state, action) => {
            state.sort = action.payload;
        },
        searchQurey: (state, action) => {
            state.search = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { selectedFilter, sortBy, searchQurey } = filterSlice.actions;

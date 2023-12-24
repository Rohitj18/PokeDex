import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: localStorage.getItem("filterData") ? JSON.parse(localStorage.getItem("filterData")) : null,
  loading: false,
  search:null
};

const FilterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setFilterData(state, value) {
      state.filter = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setSearch(state, value) {
      state.search = value.payload;
    },
  },
});

export const {setSearch, setFilterData, setLoading} = FilterSlice.actions;

export default FilterSlice.reducer;
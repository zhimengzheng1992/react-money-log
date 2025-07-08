import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billSlice = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { setBillList } = billSlice.actions;

const getBillList = () => {
  return async (dispatch) => {
    const result = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(result.data));
  };
};

export { getBillList };
const reducer = billSlice.reducer;
export default reducer;

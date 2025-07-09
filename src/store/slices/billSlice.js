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
    addBill(state, action) {
      state.billList.push(action.payload);
    },
  },
});

const { setBillList, addBill } = billSlice.actions;

const getBillList = () => {
  return async (dispatch) => {
    const result = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(result.data));
  };
};

const addBillList = (newBill) => {
  return async (dispatch) => {
    const result = await axios.post("http://localhost:8888/ka", newBill);
    dispatch(addBill(result.data));
  };
};

export { getBillList, addBillList };
const reducer = billSlice.reducer;
export default reducer;

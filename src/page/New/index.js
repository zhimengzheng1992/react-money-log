import { Button, DatePicker, Input, NavBar } from "antd-mobile";
import Icon from "@/components/Icon";
import "./index.scss";
import classNames from "classnames";
import { billListData } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addBillList } from "@/store/slices/billSlice";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const New = () => {
  const navigate = useNavigate();
  const [billType, setBillType] = useState("pay");
  const [amount, setAmount] = useState(0);
  const handleOnChange = (value) => {
    setAmount(value);
  };

  const [useFor, setUseFor] = useState("");
  const dispatch = useDispatch();
  const saveBill = () => {
    const data = {
      type: billType,
      money: billType === "pay" ? -amount : +amount,
      date,
      useFor,
    };
    console.log(data);
    dispatch(addBillList(data));
  };

  const [dateVisible, setDateVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const handleConfirm = (val) => {
    setDate(val);
    setDateVisible(false);
  };

  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            onClick={() => setBillType("pay")}
            className={classNames(billType === "pay" ? "selected" : "")}
          >
            支出
          </Button>
          <Button
            className={classNames(billType === "income" ? "selected" : "")}
            onClick={() => setBillType("income")}
            shape="rounded"
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={() => setDateVisible(true)}>
                {dayjs(date).format("YYYY-MM-DD")}
              </span>

              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onClose={() => setDateVisible(false)}
                onConfirm={handleConfirm}
                value={date}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                onChange={handleOnChange}
                placeholder="0.00"
                type="number"
                value={amount}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map((item) => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      className={classNames(
                        "item",
                        useFor === item.type ? "selected" : ""
                      )}
                      onClick={() => {
                        setUseFor(item.type);
                      }}
                      key={item.type}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
        <Button onClick={saveBill} className="btn save">
          保 存
        </Button>
      </div>
    </div>
  );
};

export default New;

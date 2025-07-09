import { NavBar, DatePicker } from "antd-mobile";
import { useState, useMemo, useEffect } from "react";
import "./index.scss";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";

const Month = () => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    dayjs(new Date()).format("YYYY | MM")
  );
  const billList = useSelector((state) => state.bill.billList);
  // console.log(billList);
  const sortedList = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY | MM"));
  }, [billList]);
  // console.log(sortedList);

  const [currentList, setCurrentList] = useState([]);
  const { income, pay, total } = useMemo(() => {
    const income = currentList
      .filter((item) => item.type === "income")
      .reduce((acc, curr) => acc + curr.money, 0);
    const pay = currentList
      .filter((item) => item.type === "pay")
      .reduce((acc, curr) => acc + curr.money, 0);
    return {
      income,
      pay,
      total: income + pay,
    };
  }, [currentList]);

  useEffect(() => {
    const currentMonth = dayjs().format("YYYY | MM");
    setCurrentList(sortedList[currentMonth] || []);
  }, [sortedList]);
  //Confirm callback
  const onConfirm = (date) => {
    setDatePickerVisible(false);
    // console.log(date);
    const formattedDate = dayjs(date).format("YYYY | MM");
    setCurrentDate(formattedDate);
    // console.log(sortedList[formattedDate]);
    const list = sortedList[formattedDate] || [];
    setCurrentList(list);
  };

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDatePickerVisible(true)}>
            <span className="text">{currentDate}月账单</span>
            <span
              className={classNames("arrow", { expand: datePickerVisible })}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{income.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{pay.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={datePickerVisible}
            onCancel={() => {
              setDatePickerVisible(false);
            }}
            onConfirm={onConfirm}
            onClose={() => {
              setDatePickerVisible(false);
            }}
            max={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default Month;

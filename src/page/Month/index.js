import { NavBar, DatePicker } from "antd-mobile";
import { useState } from "react";
import "./index.scss";
import classNames from "classnames";
import dayjs from "dayjs";

const Month = () => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    dayjs(new Date()).format("YYYY | MM")
  );
  const onConfirm = (date) => {
    setDatePickerVisible(false);
    console.log(date);
    setCurrentDate(dayjs(date).format("YYYY | MM"));
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
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
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

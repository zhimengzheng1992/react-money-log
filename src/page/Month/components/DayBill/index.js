import classNames from "classnames";
import "./index.scss";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { billTypeToName } from "@/contents";

const DailyBill = ({ date, billList }) => {
  const normalized = date.replace(/ \| /g, "-");
  const formatted = dayjs(normalized).format("YYYY年MM月DD日");

  const { income, pay, total } = useMemo(() => {
    const income = billList
      .filter((item) => item.type === "income")
      .reduce((acc, curr) => acc + curr.money, 0);
    const pay = billList
      .filter((item) => item.type === "pay")
      .reduce((acc, curr) => acc + curr.money, 0);
    return {
      income,
      pay,
      total: income + pay,
    };
  }, [billList]);
  const [visible, setVisible] = useState(false);

  return (
    <div className={classNames("dailyBill")}>
      <div className="header">
        <div className="dateIcon" onClick={() => setVisible(!visible)}>
          <span className="date">{formatted}</span>
          <span className={classNames("arrow", visible && "expand")}></span>
          {/* <p>当前状态：{visible ? "显示" : "隐藏"}</p> */}
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{pay}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{income}</span>
          </div>
          <div className="balance">
            <span className="money">{total}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {/* Daily List */}
      <div className="billList" style={{ display: visible ? "block" : "none" }}>
        {billList.map((item) => {
          return (
            <div className="bill" key={item.id}>
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames("money", item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DailyBill;

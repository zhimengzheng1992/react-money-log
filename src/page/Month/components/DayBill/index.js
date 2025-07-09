import classNames from "classnames";
import "./index.scss";
import dayjs from "dayjs";
import { useMemo } from "react";
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

  return (
    <div className={classNames("dailyBill")}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{formatted}</span>
          <span className={classNames("arrow")}></span>
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
      <div className="billList">
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

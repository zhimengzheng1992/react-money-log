export const billListData = {
  pay: [
    {
      type: "foods",
      name: "餐饮",
      list: [
        { type: "food", name: "餐费" },
        { type: "drinks", name: "酒水饮料" },
        { type: "dessert", name: "甜品零食" },
        { type: "snack", name: "小吃" },
      ],
    },
    {
      type: "taxi",
      name: "出行交通",
      list: [
        { type: "taxi", name: "打车租车" },
        { type: "longdistance", name: "旅行票费" },
        { type: "transport", name: "日常交通" },
      ],
    },
    {
      type: "recreation",
      name: "休闲娱乐",
      list: [
        { type: "bodybuilding", name: "运动健身" },
        { type: "game", name: "休闲玩乐" },
        { type: "audio", name: "媒体影音" },
        { type: "travel", name: "旅游度假" },
      ],
    },
    {
      type: "daily",
      name: "日常支出",
      list: [
        { type: "clothes", name: "衣服裤子" },
        { type: "bag", name: "鞋帽包包" },
        { type: "book", name: "知识学习" },
        { type: "promote", name: "能力提升" },
        { type: "home", name: "家装布置" },
        { type: "shopping", name: "日常购物" },
      ],
    },
    {
      type: "utilities",
      name: "生活缴费",
      list: [{ type: "utilities", name: "水电煤气" }],
    },
    {
      type: "giftout",
      name: "人情消费",
      list: [{ type: "gift", name: "送礼支出" }],
    },
    {
      type: "other",
      name: "其他支出",
      list: [{ type: "community", name: "社区缴费" }],
    },
  ],
  income: [
    {
      type: "professional",
      name: "工作相关收入",
      list: [
        { type: "salary", name: "工资" },
        { type: "overtimepay", name: "加班" },
        { type: "bonus", name: "奖金" },
        { type: "freelance", name: "自由职业" },
      ],
    },
    {
      type: "other",
      name: "其他收入",
      list: [
        { type: "financial", name: "理财收入" },
        { type: "cashgift", name: "礼金收入" },
        { type: "rebate", name: "返现收入" },
        { type: "gift", name: "收到礼物" },
      ],
    },
  ],
};

/**
 * 构造一个 type -> name 的映射表，便于快速查找账单类型对应的中文名称。
 * @param {Object} data 原始账单数据，例如 billListData
 * @returns {Object} 类型映射对象，例如 { food: "餐费", salary: "工资", ... }
 */
function buildBillTypeToName(data) {
  const result = {};

  for (const category of Object.keys(data)) {
    const groups = data[category];

    for (const group of groups) {
      for (const item of group.list) {
        result[item.type] = item.name;
      }
    }
  }

  return result;
}

// 调用函数，构造映射表
export const billTypeToName = buildBillTypeToName(billListData);

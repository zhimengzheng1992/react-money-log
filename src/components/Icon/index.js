import React from "react";
import { iconMap } from "./iconMap";
import { MdHelpOutline } from "react-icons/md";

/**
 * 通用图标组件（固定大小与颜色）
 * @param {string} type - bill item 的 type，例如 "food", "salary"
 */
const Icon = ({ type }) => {
  const IconComponent = iconMap[type] || MdHelpOutline;

  return (
    <IconComponent
      style={{
        width: 20,
        height: 20,
        color: "#333",
      }}
    />
  );
};

export default Icon;

import { FaArrowTrendUp, FaArrowTrendDown, FaPlus, FaQuestion } from "react-icons/fa6";

export const formatTrend = (type, per) => {
  if (type === "static") {
    return {
      icon: FaPlus,
      color: "text-green-600",
    };
  }

  if (type === "monthly" || type === "daily") {
    if (per >= 0) {
      return {
        icon: FaArrowTrendUp,
        color: "text-green-600",
      };
    } else {
      return {
        icon: FaArrowTrendDown,
        color: "text-red-600",
      };
    }
  }

  return {
    icon: FaQuestion,
    color: "text-gray-500",
  };
};
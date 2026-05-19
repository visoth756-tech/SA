const fakeTotalValue = {

  // ─── DASHBOARD ───────────────────────────────────────────────
  dashboard: {
    totalRevenue: {
      id: "dash_total_revenue",
      name: "Total Revenue",
      type: "money",           // priceCents
      period: "monthly",
      value: 4832000,          // $48,320.00 in cents
      history: [
        { month: "2025-01", value: 3210000 },
        { month: "2025-02", value: 2894000 },
        { month: "2025-03", value: 3820000 },
        { month: "2025-04", value: 4310000 },
        { month: "2025-05", value: 4832000 },
      ],
    },
    totalOrders: {
      id: "dash_total_orders",
      name: "Total Orders",
      type: "number",
      period: "monthly",
      value: 1284,
      history: [
        { month: "2025-01", value: 890 },
        { month: "2025-02", value: 810 },
        { month: "2025-03", value: 960 },
        { month: "2025-04", value: 1100 },
        { month: "2025-05", value: 1284 },
      ],
    },
    newCustomers: {
      id: "dash_new_customers",
      name: "New Customers",
      type: "number",
      period: "monthly",
      value: 312,
      history: [
        { month: "2025-01", value: 198 },
        { month: "2025-02", value: 221 },
        { month: "2025-03", value: 265 },
        { month: "2025-04", value: 289 },
        { month: "2025-05", value: 312 },
      ],
    },
    totalMenuItems: {
      id: "dash_menu_items",
      name: "Total Menu Items",
      type: "number",
      period: "monthly",
      value: 64,
      history: [
        { month: "2025-01", value: 60 },
        { month: "2025-02", value: 61 },
        { month: "2025-03", value: 63 },
        { month: "2025-04", value: 66 },
        { month: "2025-05", value: 64 },
      ],
    },
  },

  // ─── MENU ─────────────────────────────────────────────────────
  menu: {
    totalItems: {
      id: "menu_total_items",
      name: "Total Items",
      type: "number",
      period: "static",
      value: 72,
    },
    categories: {
      id: "menu_categories",
      name: "Categories",
      type: "number",
      period: "static",
      value: 8,
      list: [
        "Starters",
        "Soups",
        "Salads",
        "Mains",
        "Noodles & Rice",
        "Grills",
        "Desserts",
        "Drinks",
      ],
    },
    availableItems: {
      id: "menu_available_items",
      name: "Available Items",
      type: "number",
      period: "current",
      value: 64,
    },
    bestSeller: {
      id: "menu_best_seller",
      name: "Best Seller",
      type: "number",          // units sold
      period: "monthly",
      value: 187,
      month: "2025-05",
      item: {
        itemId: "item_001",
        itemName: "Pad",
        unitsSold: 187,
        revenueContribution: 654500,  // cents → $6,545.00
      },
    },
  },

  // ─── ORDERS ───────────────────────────────────────────────────
  orders: {
    monthlyOrders: {
      id: "order_monthly",
      name: "Monthly Orders",
      type: "number",
      period: "monthly",
      month: "2025-05",
      value: 1284,
    },
    averageOrderValue: {
      id: "order_avg_value",
      name: "Average Order Value",
      type: "money",
      period: "monthly",
      month: "2025-05",
      value: 3763,             // cents → $37.63
    },
    dailyOrders: [
      { id: "order_daily_01", date: "2025-05-04", type: "number", period: "daily", value: 38 },
      { id: "order_daily_02", date: "2025-05-05", type: "number", period: "daily", value: 44 },
      { id: "order_daily_03", date: "2025-05-06", type: "number", period: "daily", value: 51 },
      { id: "order_daily_04", date: "2025-05-07", type: "number", period: "daily", value: 36 },
      { id: "order_daily_05", date: "2025-05-08", type: "number", period: "daily", value: 29 },
      { id: "order_daily_06", date: "2025-05-09", type: "number", period: "daily", value: 48 },
      { id: "order_daily_07", date: "2025-05-10", type: "number", period: "daily", value: 55 },
      { id: "order_daily_08", date: "2025-05-11", type: "number", period: "daily", value: 62 },
      { id: "order_daily_09", date: "2025-05-12", type: "number", period: "daily", value: 40 },
      { id: "order_daily_10", date: "2025-05-13", type: "number", period: "daily", value: 35 },
      { id: "order_daily_11", date: "2025-05-14", type: "number", period: "daily", value: 52 },
      { id: "order_daily_12", date: "2025-05-15", type: "number", period: "daily", value: 47 },
      { id: "order_daily_13", date: "2025-05-16", type: "number", period: "daily", value: 43 },
      { id: "order_daily_14", date: "2025-05-17", type: "number", period: "daily", value: 57 },
    ],
    dailyRevenue: [
      { id: "rev_daily_01", date: "2025-05-04", type: "money", period: "daily", value: 142000 },
      { id: "rev_daily_02", date: "2025-05-05", type: "money", period: "daily", value: 168000 },
      { id: "rev_daily_03", date: "2025-05-06", type: "money", period: "daily", value: 195000 },
      { id: "rev_daily_04", date: "2025-05-07", type: "money", period: "daily", value: 131000 },
      { id: "rev_daily_05", date: "2025-05-08", type: "money", period: "daily", value: 108000 },
      { id: "rev_daily_06", date: "2025-05-09", type: "money", period: "daily", value: 182000 },
      { id: "rev_daily_07", date: "2025-05-10", type: "money", period: "daily", value: 210000 },
      { id: "rev_daily_08", date: "2025-05-11", type: "money", period: "daily", value: 238000 },
      { id: "rev_daily_09", date: "2025-05-12", type: "money", period: "daily", value: 154000 },
      { id: "rev_daily_10", date: "2025-05-13", type: "money", period: "daily", value: 129000 },
      { id: "rev_daily_11", date: "2025-05-14", type: "money", period: "daily", value: 199000 },
      { id: "rev_daily_12", date: "2025-05-15", type: "money", period: "daily", value: 178000 },
      { id: "rev_daily_13", date: "2025-05-16", type: "money", period: "daily", value: 163000 },
      { id: "rev_daily_14", date: "2025-05-17", type: "money", period: "daily", value: 214000 },
    ],
  },

  // ─── CUSTOMERS ────────────────────────────────────────────────
  customers: {
    totalCustomers: {
      id: "cus_total",
      name: "Total Customers",
      type: "number",
      period: "monthly",
      month: "2025-05",
      value: 2840,
      history: [
        { month: "2025-01", value: 2148 },
        { month: "2025-02", value: 2369 },
        { month: "2025-03", value: 2634 },
        { month: "2025-04", value: 2528 },   // dip — e.g. purge of inactive
        { month: "2025-05", value: 2840 },
      ],
    },
    newCustomers: {
      id: "cus_new",
      name: "New Customers",
      type: "number",
      period: "monthly",
      month: "2025-05",
      value: 312,
      history: [
        { month: "2025-01", value: 198 },
        { month: "2025-02", value: 221 },
        { month: "2025-03", value: 265 },
        { month: "2025-04", value: 289 },
        { month: "2025-05", value: 312 },
      ],
    },
    activeCustomers: {
      id: "cus_active",
      name: "Active Customers",
      type: "number",
      period: "monthly",
      month: "2025-05",
      value: 874,              // placed ≥1 order in May
      history: [
        { month: "2025-01", value: 610 },
        { month: "2025-02", value: 588 },
        { month: "2025-03", value: 720 },
        { month: "2025-04", value: 795 },
        { month: "2025-05", value: 874 },
      ],
    },
    frequentCustomers: {
      id: "cus_frequent",
      name: "Frequent Customers",
      type: "number",
      period: "monthly",
      month: "2025-05",
      value: 183,              // placed ≥3 orders in May
      history: [
        { month: "2025-01", value: 112 },
        { month: "2025-02", value: 98 },
        { month: "2025-03", value: 134 },
        { month: "2025-04", value: 157 },
        { month: "2025-05", value: 183 },
      ],
    },
  },

};

export default fakeTotalValue;


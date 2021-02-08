import { RouteInfo } from "./vertical-menu.metadata";

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Dashboard",
    icon: "ft-home",
    class: "has-sub",
    badge: "2",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/dashboard/dashboard1",
        title: "Dashboard 1",
        icon: "ft-arrow-right submenu-icon",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/dashboard/dashboard2",
        title: "Dashboard 2",
        icon: "ft-arrow-right submenu-icon",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Account Setup",
    icon: "ft-users",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/users",
        title: "Customer",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/supplier",
        title: "Suppliers",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/account",
        title: "Account",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/area",
        title: "Area",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/salesman",
        title: "Salesman",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/discountslab",
        title: "Discount slab",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/branch",
        title: "Branches",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/stock",
        title: "Stocks",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/items",
        title: "Items",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/manufacturer",
        title: "Manufacturers",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/group",
        title: "Groups",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/storetype",
        title: "Store Type",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/hsnsac",
        title: "hsn and sac",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/composition",
        title: "Composition",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/schedule",
        title: "Schedules",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/packing",
        title: "packing",
        icon: "ft-users",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Transaction",
    icon: "ft-book",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/purchase-entry",
        title: "Purchase Entry",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/payment-entry",
        title: "Payment Entry",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/purchase-order",
        title: "Purchase Order",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/order-generation",
        title: "Order Generation",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/opening-stock-entry",
        title: "Opening Stock Entry",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/batch-details",
        title: "Batch Details",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Entry",
    icon: "ft-map",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/receipt-entry",
        title: "Receipt Entry",
        icon: "ft-arrow-right submenu-icon",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/counter-sale",
        title: "Counter Sale",
        icon: "ft-arrow-right submenu-icon",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
];

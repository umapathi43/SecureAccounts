import { Routes, RouterModule } from "@angular/router";

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("../../dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "pages",
    loadChildren: () =>
      import("../../pages/full-pages/full-pages.module").then(
        (m) => m.FullPagesModule
      ),
  },
  {
    path: "supplier",
    loadChildren: () =>
      import("../../supplier/supplier.module").then((m) => m.SupplierModule),
  },
  {
    path: "account",
    loadChildren: () =>
      import("../../account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "area",
    loadChildren: () =>
      import("../../area/area.module").then((m) => m.AreaModule),
  },

  {
    path: "users",
    loadChildren: () =>
      import("../../users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "salesman",
    loadChildren: () =>
      import("../../salesman/salesman.module").then((m) => m.SalesmanModule),
  },
  {
    path: "items",
    loadChildren: () =>
      import("../../items/items.module").then((m) => m.ItemsModule),
  },
  {
    path: "discountslab",
    loadChildren: () =>
      import("../../discountslab/discountslab.module").then(
        (m) => m.DiscountslabModule
      ),
  },
  {
    path: "manufacturer",
    loadChildren: () =>
      import("../../manufacturer/manufacturer.module").then(
        (m) => m.ManufacturerModule
      ),
  },
  {
    path: "group",
    loadChildren: () =>
      import("../../group/group.module").then((m) => m.GroupModule),
  },
  {
    path: "storetype",
    loadChildren: () =>
      import("../../storetype/storetype.module").then((m) => m.StoretypeModule),
  },
  {
    path: "schedule",
    loadChildren: () =>
      import("../../schedule/schedule.module").then((m) => m.ScheduleModule),
  },
  {
    path: "hsnsac",
    loadChildren: () =>
      import("../../hsnsac/hsnsac.module").then((m) => m.HsnsacModule),
  },
  {
    path: "composition",
    loadChildren: () =>
      import("../../composition/composition.module").then(
        (m) => m.CompositionModule
      ),
  },
  {
    path: "branch",
    loadChildren: () =>
      import("../../branch/branch.module").then((m) => m.BranchModule),
  },
  {
    path: "stock",
    loadChildren: () =>
      import("../../stock/stock.module").then((m) => m.StockModule),
  },
  {
    path: "packing",
    loadChildren: () =>
      import("../../packing/packing.module").then((m) => m.PackingModule),
  },
  {
    path: "purchase-entry",
    loadChildren: () =>
      import("../../purchase/purchase.module").then((m) => m.PurchaseModule),
  },
  {
    path: "payment-entry",
    loadChildren: () =>
      import("../../paymententry/paymententry.module").then(
        (m) => m.PaymententryModule
      ),
  },
  {
    path: "purchase-order",
    loadChildren: () =>
      import("../../purchase-order/purchase-order.module").then(
        (m) => m.PurchaseOrderModule
      ),
  },
  {
    path: "order-generation",
    loadChildren: () =>
      import("../../order-generation/order-generation.module").then(
        (m) => m.OrderGenerationModule
      ),
  },
];

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
];

export const CompactInvoicePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/pages/invoices/compact",
      component: React.lazy(() => import("./CompactInvoicePage")),
    },
  ],
};

const adminRoutes = [
  { index: true, element: <Home /> },
  { path: 'products', element: <Products /> },
  { path: 'products/add', element: <AddProduct /> },
  { path: 'products/edit/:id', element: <EditProduct /> },
];

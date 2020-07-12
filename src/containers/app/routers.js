import {
  ProductAdmin,
  CategoryAdmin,
  AddCategory
}from 'views';

const routes = [
    {
      exact: true,
      path: "/",
      component: ProductAdmin
    },
    {
      exact: true,
      path: "/admin/category",
      component: CategoryAdmin
    },
    {
      exact: true,
      path: "/admin/category/add",
      component: AddCategory
    }
]
export default routes;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import CustomersRootLayout from "./pages/CustomersRootLayout";
import CustomersPage, { loader as customersLoader } from "./pages/CustomerPage";
import CustomerDetailsPage, {
  loader as customerDetailLoader,
} from "./pages/CustomerDetailsPage";
import NewCustomerPage, {
  action as customerAction,
} from "./pages/NewCustomerPage";
import CustomerEditPage from "./pages/CustomerEditPage";
import { action as manipulateCustomerAction } from "./components/CustomerForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "customers",
        element: <CustomersRootLayout />,
        children: [
          {
            index: true,
            element: <CustomersPage />,
            loader: customersLoader,
          },
          {
            path: "new",
            element: <NewCustomerPage />,
            action: customerAction,
          },
          {
            path: ":customerId",
            id: "customer-detail",
            loader: customerDetailLoader,
            children: [
              {
                index: true,
                element: <CustomerDetailsPage />,
              },
              {
                path: "edit",
                element: <CustomerEditPage />,
                action: manipulateCustomerAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import CustomersRootLayout from "./pages/CustomersRootLayout";
import CustomersPage from "./pages/CustomerPage";

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
            // loader: eventsLoader,
          },
        ]
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

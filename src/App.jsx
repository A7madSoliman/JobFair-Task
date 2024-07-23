import { createHashRouter, RouterProvider } from "react-router-dom";
import Customer from "./Components/Customer";
import TransactionAmount from "./Components/TransactionAmount";
import TransactionCharts from "./Components/TransactionCharts";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Customer />
        <TransactionAmount />
      </>
    ),
  },
  { path: "graph", element: <TransactionCharts /> },
]);

function App() {
  return (
    <div className="container">
      <h1 className="text-2xl text-center mt-5 font-bold">CUSTOMERS DETAILS</h1>
      <div className="flex justify-center gap-5 mt-5">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

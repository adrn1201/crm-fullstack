import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import CustomerDetail from "../components/CustomerDetail";

export default function CustomersPage() {
  const { customer } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={customer}>
        {(loadedCustomer) => <CustomerDetail customer={loadedCustomer} />}
      </Await>
    </Suspense>
  );
}

async function loadCustomers() {
  const response = await fetch("http://localhost:3000/api/customers");
  if (!response.ok) {
    throw new Error("Failed to fetch customers");
  }
  return response.json();
} 

export function loader() {
  return {
    customer: loadCustomers(),
  };
}
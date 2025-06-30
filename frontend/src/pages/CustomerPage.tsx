import { useLoaderData, Await } from "react-router-dom";
import CustomersList from "../components/CustomersList";
import { Suspense } from "react";

export default function CustomersPage() {
  const { customers } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={customers}>
        {(loadedCustomers) => <CustomersList events={loadedCustomers} />}
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
    customers: loadCustomers(),
  };
}
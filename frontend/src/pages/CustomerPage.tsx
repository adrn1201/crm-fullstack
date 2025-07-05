import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import CustomersList from "../components/CustomersList";

export default function CustomersPage() {
  const { customers } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={customers}>
        {(loadedCustomers) => <CustomersList customers={loadedCustomers} />}
      </Await>
    </Suspense>
  );
}

async function loadCustomers() {
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
  console.log("Loading customers from:", baseUrl);
  const response = await fetch(`${baseUrl}/api/customers`);
  console.log('hello'+ response)
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
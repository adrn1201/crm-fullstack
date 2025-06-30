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

import { useRouteLoaderData, redirect, Await } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import { Suspense } from "react";
import CustomerDetail from "../components/CustomerDetail";


export default function CustomerDetailsPage() {
  const { customer } = useRouteLoaderData("customer-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={customer}>
          {(loadedCustomer) => <CustomerDetail customer={loadedCustomer} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadCustomer(id: string) {
  const response = await fetch("http://localhost:3000/api/customers/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected customer.",
      }),
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({
  request,
  params,
}: LoaderFunctionArgs) {
  const id = params.customerId;

  if (!id) {
    throw new Response(
      JSON.stringify({
        message: "Customer ID is missing.",
      }),
      {
        status: 400,
      }
    );
  }

  return {
    customer: await loadCustomer(id),
  };
}

export async function action({ params, request }: LoaderFunctionArgs) {
  const id = params.customerId;

  const response = await fetch("http://localhost:3000/api/customers/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not delete customer.",
      }),
      {
        status: 500,
      }
    );
  } else {
    return redirect("/customers");
  }
}

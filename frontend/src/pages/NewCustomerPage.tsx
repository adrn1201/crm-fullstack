import { redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import CustomerForm from "../components/CustomerForm";

export default function NewCustomerPage() {
  return <CustomerForm method="post" />;
}

export async function action({ request, params }: ActionFunctionArgs) {
  const data = await request.formData();

  console.log("Form Data:", data);
  const customerData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    phoneNumber: data.get("phoneNumber"),
    address: data.get("address"),
  };

  console.log("Form Data:", data);

  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const response = await fetch(`${baseUrl}/api/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customerData),
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not save customer.",
      }),
      {
        status: 500,
      }
    );
  }

  return redirect("/customers");
}

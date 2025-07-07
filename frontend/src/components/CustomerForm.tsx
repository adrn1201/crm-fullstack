import {
  Form,
  useActionData,
  useNavigation,
  useNavigate,
  redirect,
} from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";

interface CustomerFormProps {
  method: "post" | "get" | "put" | "delete" | "POST" | "GET" | "PUT" | "DELETE";
  event?: any;
}

export default function CustomerForm({ method, event }: CustomerFormProps) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ minWidth: 400, maxWidth: 500, width: "100%" }}
      >
        <div className="card-header bg-white border-0 text-center pb-0">
          <h3 className="font-weight-bold mb-2">
            {method === "post" || method === "POST"
              ? "Add Customer"
              : "Edit Customer"}
          </h3>
          <p className="mb-0 text-muted">Enter customer details below</p>
        </div>
        <div className="card-body">
          <Form method={method} className="row g-3">
            {data && data.errors && (
              <ul className="alert alert-danger">
                {Object.values(data.errors).map((err) => (
                  <li key={String(err)}>{String(err)}</li>
                ))}
              </ul>
            )}
            <div className="col-12 mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="form-control border rounded px-3 py-2"
                style={{ background: "#f8f9fa" }}
                defaultValue={event?.firstName || ""}
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="form-control border rounded px-3 py-2"
                style={{ background: "#f8f9fa" }}
                defaultValue={event?.lastName || ""}
                placeholder="Enter last name"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control border rounded px-3 py-2"
                style={{ background: "#f8f9fa" }}
                defaultValue={event?.email || ""}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="form-control border rounded px-3 py-2"
                style={{ background: "#f8f9fa" }}
                defaultValue={event?.phoneNumber || ""}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="form-control border rounded px-3 py-2"
                style={{ background: "#f8f9fa" }}
                defaultValue={event?.address || ""}
                placeholder="Enter address"
                rows={2}
                required
              />
            </div>
            <div className="col-12 d-flex justify-content-between mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={cancelHandler}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                disabled={isSubmitting}
                className="btn btn-dark px-4"
                type="submit"
              >
                {isSubmitting ? "Submitting..." : "Save"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function action({ request, params }: ActionFunctionArgs) {
  const data = await request.formData();

  const customerData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    phoneNumber: data.get("phoneNumber"),
    address: data.get("address"),
  };

  let baseUrl = window?.env?.VITE_API_URL || "http://localhost:8000";
  let url = `${baseUrl}/api/customers`;
  let method = "POST";

  if (request.method === "PUT") {
    const customerId = params.customerId;
    if (!customerId) {
      throw new Response(
        JSON.stringify({ message: "Customer ID is required for update." }),
        { status: 400 }
      );
    }
    url = `${baseUrl}/api/customers/${customerId}`;
    method = "PUT";
  }

  const response = await fetch(url, {
    method,
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

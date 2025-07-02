import {
  Form,
  useActionData,
  useNavigation,
  useNavigate,
  redirect,
} from "react-router-dom";

interface CustomerFormProps {
  method: "post" | "get" | "POST" | "GET";
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
    <Form method={method} className="row g-3">
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={String(err)}>{String(err)}</li>
          ))}
        </ul>
      )}
      <div className="row">
        <div className="col-md-6">
          <div className="input-group input-group-outline my-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
              defaultValue={event?.firstName || ""}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group input-group-outline my-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
              defaultValue={event?.lastName || ""}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="input-group input-group-outline my-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              defaultValue={event?.email || ""}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group input-group-outline my-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="form-control"
              defaultValue={event?.phoneNumber || ""}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="input-group input-group-outline my-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              defaultValue={event?.address || ""}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <button
          type="button"
          className="col-md-3 btn btn-danger"
          onClick={cancelHandler}
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button disabled={isSubmitting} className="col-md-3 btn btn-success">
          {isSubmitting ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>
  );
}

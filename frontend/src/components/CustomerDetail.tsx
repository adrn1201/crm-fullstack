import { useSubmit, useNavigate } from "react-router-dom";

interface CustomerDetailProps {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
  };
}

function CustomerDetail({ customer }: CustomerDetailProps) {
  const navigate = useNavigate();
  const submit = useSubmit();

  const handleCancel = () => {
    navigate("..");
  };

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ minHeight: "100vh", paddingTop: "6rem" }} // align-items-start and paddingTop to move card up
    >
      <div
        className="card shadow-lg p-4"
        style={{ minWidth: 400, maxWidth: 500, width: "100%" }}
      >
        <div className="card-header bg-white border-0 text-center pb-0">
          <h2 className="font-weight-bold mb-3">Customer Details</h2>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <strong>First Name:</strong> <span>{customer.firstName}</span>
          </div>
          <div className="mb-3">
            <strong>Last Name:</strong> <span>{customer.lastName}</span>
          </div>
          <div className="mb-3">
            <strong>Email:</strong> <span>{customer.email}</span>
          </div>
          <div className="mb-3">
            <strong>Phone Number:</strong> <span>{customer.phoneNumber}</span>
          </div>
          <div className="mb-4">
            <strong>Address:</strong> <span>{customer.address}</span>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary px-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger px-4"
              onClick={startDeleteHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetail;

// import classes from "./EventItem.module.css";
// import { Link, useSubmit } from "react-router-dom";

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
  console.log(customer);
//   const submit = useSubmit();
  //   function startDeleteHandler() {
  //     const proceed = window.confirm("Are you sure?");

  //     if (proceed) {
  //       submit(null, { method: "delete" });
  //     }
  //   }

  return (
    <div className="customer-detail">
      <h2>Customer Details</h2>
      <p>
        <strong>First Name:</strong> {customer.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {customer.lastName}
      </p>
      <p>
        <strong>Email:</strong> {customer.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {customer.phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {customer.address}
      </p>
    </div>
  );
}

export default CustomerDetail;
import { Link } from "react-router-dom";

type Customer = {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  _id: string;
};

interface CustomersListProps {
  customers: Customer[];
}

export default function CustomersList({ customers }: CustomersListProps) {
  return (
    <div className="container-fluid py-2">
      <div className="row">
        <div className="col-12">
          <div className="card mt-4">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Customers</h6>
                </div>
                <div className="col-6 text-end">
                  <Link className="btn bg-gradient-dark mb-0" to="/customers/new">
                    <i className="material-symbols-rounded text-sm">add</i>
                    &nbsp;&nbsp;Add New Customer
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Full Name
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Email
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Phone Number
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Address
                      </th>
                      <th className="text-center text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer._id}>
                        <td className="align-middle text-center">
                          <p className="text-xs font-weight-bold mb-0">
                            {customer.firstName} {customer.lastName}
                          </p>
                        </td>
                        <td className="align-middle text-center">
                          <p className="text-xs font-weight-bold mb-0">
                            {customer.email}
                          </p>
                        </td>
                        <td className="align-middle text-center">
                          <p className="text-xs font-weight-bold mb-0">
                            {customer.phoneNumber}
                          </p>
                        </td>
                        <td className="align-middle text-center">
                          <p className="text-xs font-weight-bold mb-0">
                            {customer.address}
                          </p>
                        </td>
                        <td className="align-middle text-center">
                          <Link
                            to={`/customers/${customer._id}`}
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="View details"
                          >
                            Details
                          </Link>
                          {" | "}
                          <Link
                            to={`/customers/${customer._id}/edit`}
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
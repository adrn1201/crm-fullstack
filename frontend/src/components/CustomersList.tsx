type Customer = {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  id: string;
};

interface CustomersListProps {
  events: Customer[];
}

export default function CustomersList({ events }: CustomersListProps) {
  return (
    <div className="container-fluid py-2">
      <div className="row">
        <div className="col-12">
          <div className="card mt-4">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Payment Method</h6>
                </div>
                <div className="col-6 text-end">
                  <a className="btn bg-gradient-dark mb-0" href="javascript:;">
                    <i className="material-symbols-rounded text-sm">add</i>
                    &nbsp;&nbsp;Add New Card
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Full Name
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Email
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Phone Number
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Address
                      </th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td className="align-middle">
                          <p className="text-xs font-weight-bold mb-0">
                            {event.firstName} {event.lastName}
                          </p>
                        </td>
                        <td className="align-middle">
                          <p className="text-xs font-weight-bold mb-0">
                            {event.email}
                          </p>
                        </td>
                        <td className="align-middle">
                          <p className="text-xs font-weight-bold mb-0">
                            {event.phoneNumber}
                          </p>
                        </td>
                        <td className="align-middle">
                          <p className="text-xs font-weight-bold mb-0">
                            {event.address}
                          </p>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
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

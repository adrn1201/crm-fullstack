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
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Customers</h6>
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

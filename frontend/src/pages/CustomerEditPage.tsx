import CustomerForm from "../components/CustomerForm";
import { useRouteLoaderData } from "react-router-dom";

export default function CustomerEditPage() {
    const data = useRouteLoaderData("customer-detail") as { customer: any };
    return <CustomerForm event={data.customer} method="PUT" />;
}
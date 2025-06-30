import express from "express";
const router = express.Router();
import * as customers from "../controllers/customer";

router
  .route("/")
  .get(customers.getCustomers)
  .post(express.json(), customers.createCustomer);

const asyncHandler =
  (fn: any) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router
  .route("/:id")
  .put(asyncHandler(customers.updateCustomer))
  .get(asyncHandler(customers.getCustomerById))
  .delete(asyncHandler(customers.deleteCustomer));

export default router;

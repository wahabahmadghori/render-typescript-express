import { Router } from "express";
import users from "./chat_model";
const router = Router();

export default (): Router => {
  users(router);
  return router;
};

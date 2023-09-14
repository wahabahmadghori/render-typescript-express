import { Router } from "express";
import chat from "./chat_model";
const router = Router();

export default (): Router => {
  chat(router);
  return router;
};

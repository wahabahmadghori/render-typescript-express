import { Router, Request, Response } from "express";

export default (router: Router) => {
  router.get("/chat", async (req: Request, res: Response) => {
    return res.send("Message from ChatGPT 1234");
  });
};

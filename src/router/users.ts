import { Router } from "express";

export default (router: Router) => {
  router.get("/users", () => {
    return {
      message: "Users list!",
    };
  });
};

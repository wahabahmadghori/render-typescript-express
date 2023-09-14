import { Router } from "express";

export default (router: Router) => {
  router.get("/login", () => {
    return {
      message: "Login",
    };
  });
};

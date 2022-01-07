import { Router } from "express";
import indexPage from "./pages/index";
import createPage from "./pages/create";
import viewPage from "./pages/view";
import usersService from "./services/users";

export default Router()
  .get("/", indexPage)
  .get("/create", createPage)
  .get("/view", viewPage)
  .get("/services/users", usersService);

import { Router } from "express";
import indexPage from "./pages/index";
import createPage from "./pages/create";
import viewPage from "./pages/view";
import usersService from "./services/users";
import createPostService from "./services/create";
import getPosts from "./services/getPosts";

export default Router()
  .get("/", indexPage)
  .get("/create", createPage)
  .get("/view", viewPage)
  .post("/services/create", createPostService)
  .get('services/getPosts', getPosts)
  .get("/services/users", usersService);

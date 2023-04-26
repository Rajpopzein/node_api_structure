import express from "express";
import { alluser, reguser } from "../controller/user.js";

const routes = express.Router()

routes.get('/all',alluser)

routes.post('/',reguser)

export default routes
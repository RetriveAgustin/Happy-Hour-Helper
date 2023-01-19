const { Router } = require("express");
const userRouter = Router();

const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/UserController");

userRouter.get("/getUsers", getUser);

userRouter.post("/postUsers", postUser);

userRouter.put("/putUsers", putUser);

userRouter.delete("/deleteUsers", deleteUser);

module.exports = userRouter;
const { Router } = require("express");
const userRouter = Router();

const {
  getUser,
  postUser,
  putUser,
  deleteUser,
<<<<<<< HEAD
} = require("../controllers/UserController");

userRouter.get("/getUsers", getUser);

userRouter.post("/postUsers", postUser);

userRouter.put("/putUsers", putUser);

userRouter.put("/deleteUsers", deleteUser);
=======
  restoreUser,
  getUserById
} = require("../controllers/UserController");

userRouter.get("/getUser", getUser);

userRouter.get("/getUserById", getUserById);

userRouter.get("/getUserById", getUserById);

userRouter.post("/postUser", postUser);

userRouter.put("/putUser", putUser);

userRouter.delete("/deleteUser", deleteUser);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = userRouter;
// <------- Imports ------->

const { Router } = require("express");
const { createUser, readUsers, deleteUser, updateUser } = require("./userControllers");

// <------- Routes ------->

const userRouter = Router();

userRouter.post("/createUser", createUser);
userRouter.get("/readUsers", readUsers );
userRouter.put("/updateUser", updateUser );
userRouter.delete("/deleteUser", deleteUser );

// <------- Exports ------->

module.exports = userRouter;
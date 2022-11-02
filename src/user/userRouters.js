// <------- Imports ------->

const { Router } = require("express");
const { createUser, readUsers, deleteUser, updateUser, loginUser } = require("./userControllers");
const { hashPass, hashPass2, tokenCheck, comparePassword } = require("../middleware/index")

// <------- Routes ------->

const userRouter = Router();

userRouter.post("/createUser", hashPass, createUser);
userRouter.post("/loginUser", comparePassword, loginUser )
userRouter.get("/loginUser", tokenCheck, loginUser )
userRouter.get("/readUsers", readUsers );
userRouter.put("/updatePassword", tokenCheck, hashPass2, updateUser );
userRouter.put("/updateEmail", tokenCheck, updateUser );
userRouter.delete("/deleteUser", tokenCheck, deleteUser );

// <------- Exports ------->

module.exports = userRouter;

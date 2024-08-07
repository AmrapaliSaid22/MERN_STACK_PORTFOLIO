// import express from "express";
// import {
//   getUser,
//   login,
//   logout,
//   register,
//   updatePassword,
//   updateProfile,
//   forgotPassword,
//   resetPassword,
//   getUserForPortfolio,
// } from "../controller/userController.js";
// 

// const router = express.Router();

// router.post("/register", register);
// 
// 
// 
// 
// 
// 
// router.post("/password/forgot", forgotPassword);
// router.put("/password/reset/:token", resetPassword);

// export default router;

import express from "express";
import { register,login,logout, getUser, updateProfile, updatePassword, getUserForPortfolio } from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, getUser);
router.put("/me/update", isAuthenticated, updateProfile);
router.put("/password/update", isAuthenticated, updatePassword);
router.get("/me/portfolio", getUserForPortfolio);


export default router;
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
// router.get("/portfolio/me", getUserForPortfolio);
// router.put("/password/update", isAuthenticated, updatePassword);
// router.put("/me/profile/update", isAuthenticated, updateProfile);
// router.post("/password/forgot", forgotPassword);
// router.put("/password/reset/:token", resetPassword);

// export default router;

import express from "express";
import { register,login,logout, getUser } from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, getUser);


export default router;
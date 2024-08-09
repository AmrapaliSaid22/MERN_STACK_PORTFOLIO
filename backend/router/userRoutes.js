import express from "express";
import { register,login,logout, getUser, updateProfile, updatePassword, getUserForPortfolio, forgotPassword, resetPassword } from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, getUser);
router.put("/me/update", isAuthenticated, updateProfile);
router.put("/password/update", isAuthenticated, updatePassword);
router.get("/me/portfolio", getUserForPortfolio);
router.post("/password/forget", forgotPassword);
router.put("/password/reset/:token", resetPassword);

export default router;
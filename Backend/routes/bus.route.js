import express from "express";
import { createBooking, deleteBooking, getBooking, getBookingById, updateBooking } from "../controllers/but.controller.js";

const router = express.Router();

router.post("/create",createBooking)
router.get("/get",getBooking)
router.put("/update/:id",updateBooking)
router.delete("/delete/:id",deleteBooking)
router.get("/get-by-id/:id",getBookingById)

export default router;
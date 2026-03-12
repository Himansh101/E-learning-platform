import express from "express"
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/upload.js"
import { createCourse, getAllPurchasedCourse, getCourse, getPurchasedCourse, getSingleCourse } from "../controllers/course.controller.js"

const courseRoute = express.Router()

courseRoute.post('/createCourse',protectRoute, adminRoute, upload.single("thumbnail"), createCourse)

courseRoute.get('/getCourse', protectRoute, getCourse)
courseRoute.get('/getsingleCourse/:id', protectRoute, getSingleCourse)

courseRoute.get('/purchaseCourse/:id', protectRoute, getPurchasedCourse)

courseRoute.get('/getAllPurchasedCourse', protectRoute, getAllPurchasedCourse)





export default courseRoute
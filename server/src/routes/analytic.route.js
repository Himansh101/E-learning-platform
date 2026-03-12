import express from 'express'
import { getAnalyticsDataController, getDailyAnalyticsController } from '../controllers/analytics.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js'
import { adminRoute } from '../middleware/auth.middleware.js'

const analyticRoute = express.Router()

analyticRoute.get('/getAnalytic', protectRoute, adminRoute, getAnalyticsDataController)
analyticRoute.get('/getDailyData', protectRoute, adminRoute, getDailyAnalyticsController)

export default analyticRoute
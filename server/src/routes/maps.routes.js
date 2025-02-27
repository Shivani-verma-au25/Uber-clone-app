import {Router} from 'express'
import { authUser } from '../middlewares/auth.middleware.js'
import { getAutoCompleteSuggestions, getCoordinates, getDistanceTime } from '../controllers/map.controller.js'
import {query} from 'express-validator'
const router = Router()

// getting lat and lnt by giving address name 
router.route('/get-coordinates').get(
    query('address').isString().isLength({min :3}),
    authUser , getCoordinates)


// getting distance/time
router.route('/distance-time').get(
    query('origin').isString().isLength({min : 3}),
    query('destination').isString().isLength({min: 3}),
    authUser , getDistanceTime)



// getting suggestions

router.route('/get-suggestions').get(
    query('input').isString().isLength({min : 3 }),

    authUser , getAutoCompleteSuggestions)

export default router
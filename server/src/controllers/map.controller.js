import { validationResult } from 'express-validator';
import {getAddressCoordinates, getAutoCompele_suggestions, getDistance_time} from '../services/maps.service.js' 


export const getCoordinates  = async (req,res)=> {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array() })
    }
    const {address} = req.query;

    try {
        const coordinates = await getAddressCoordinates(address)
        res.status(200).json(coordinates)
    } catch (error) {
        res.status(404).json({message: 'coordinates not found'})
    }
}



// get time and distance

export const getDistanceTime =  async(req,res) =>{
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array()})
        }

        const {origin,destination} = req.query;

        const distanceTime = await getDistance_time(origin,destination)
        res.status(200).json(distanceTime)
    } catch (error) {
        console.log(error);
        
    }

}



// get auto complet suggestions

export const getAutoCompleteSuggestions = async(req,res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return response.status(400).json({errors: errors.array()})
        }
        const {input} = req.query;
        const suggestions = await getAutoCompele_suggestions(input)
        res.status(200).json(suggestions)

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
}
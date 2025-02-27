import axios from 'axios'
import { validationResult } from 'express-validator'

// getting lat and lan by address
export const getAddressCoordinates = async (address) => {
    const apikey = process.env.GOOGLE_MAP_API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`

    try {
        const response = await axios.get(url)
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location
            return {
                ltd : location.lat,
                lng : location.lng
            }
        }else{
            throw new Error("Unable to fetch coordinates");
            
        }
        
    } catch (error) {
        console.log("error",error);
        throw new Error(error);
        
        
    }

}



// getting time and distance

export const getDistance_time = async(origin,destination) =>{
    if (!origin || !destination) {
        throw new Error("Origin and destination are required");
    }

    const apiKey = process.env.GOOGLE_MAP_API
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url)
        if (response.data.status === 'OK') {
            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULT') {
            throw new Error('No Route Found!')
        }
            return response.data.rows[ 0 ].elements[ 0 ];

        }else{
            throw new Error("Unable to get distance and time");
        }
        
    } catch (error) {
        console.log(error);
        throw new Error("err" ,error);
        
        
    }

}


// get auto complete suggestions

export const getAutoCompele_suggestions = async (input) =>{
    if (!input) {
        throw new Error('address is  required')
    }

    const apiKey = process.env.GOOGLE_MAP_API
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url)
        if (response.data.status === "OK") {
            return response.data.predictions;
        }else{
            throw new Error("Unable to get Suggestions!")
        }
        
    } catch (error) {
        console.log(error);
        throw error;
        
    }

}
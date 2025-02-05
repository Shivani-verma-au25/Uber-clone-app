import { Captain } from "../models/captain.models.js";

export const createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType
}) => {
  // Check that all required fields are provided
  if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    throw new Error("All fields are required!");
  } 

  // Create captain with nested vehicle object
  const captain = await Captain.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType
    }
  });

  return captain;
};

import { Captain } from "../models/captain.models.js";


export const createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    throw new Error("All required fields must be provided (lastname is optional).");
  }

  // Create captain with optional lastname
  const captain = await Captain.create({
    fullname: {
      firstname,
      ...(lastname && { lastname }), // Only include lastname if provided
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};

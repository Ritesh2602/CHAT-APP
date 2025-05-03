/*cloudinary is a service to store and manage images/videos.
The v2 API is the modern version of Cloudinary's Node.js SDK.*/

import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

//Reads .env file and makes those variables available via process.env.
config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

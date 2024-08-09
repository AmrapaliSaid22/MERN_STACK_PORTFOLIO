import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { v2 as cloudinary } from "cloudinary";
import { SoftwareApplication } from "../models/softwareApplicationSchema.js";

export const addNewApplication = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Software Application Icon/svg Required!", 400));
      }
      const { svg } = req.files;
      const { name } = req.body;

      if ( !name ){
         return next (new ErrorHandler( "Software's name is requried..", 400));
      }

      const cloudinaryResponse = await cloudinary.uploader.upload(
        svg.tempFilePath,
        { folder: "PORTFOLIO SOFTWARE" }
      );
      if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
          "Cloudinary Error:",
          cloudinaryResponse.error || "Unknown Cloudinary error"
        );
        return next(new ErrorHandler("Failed to upload Software SVG  to Cloudinary", 500));
      }

      const softwareApplication = await SoftwareApplication.create({
        name,
        svg : {
            public_id : cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        },
      });
      res.status(200).json({
        success:true,
        message: "New Software Application Added..",
        softwareApplication,

      })
});

export const deleteApplication = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let softwareApp = await SoftwareApplication.findById(id);
  if (!softwareApp) {
    return next(new ErrorHandler("Application not found", 404));
  }
  const softwareApplicationSvgId
 = softwareApp.svg.public_id; 
 await cloudinary.uploader.destroy(softwareApplicationSvgId);
  await softwareApp.deleteOne();
  res.status(200).json({
    success: true,
    message: "Software Application Deleted!",
  });
});

export const getAllApplications = catchAsyncErrors(async (req, res, next) => {
  const softwareApplications = await SoftwareApplication.find();
  res.status(200).json({
    success: true,
    softwareApplications,
  });
}); 
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder: "company-website",
      resource_type: "auto",
      public_id: Date.now() + "-" + file.originalname.split(".")[0],  // Remove extension
      format: file.originalname.split(".").pop().toLowerCase()         // Ensure lowercase
    };
  }
});

const upload = multer({ storage });

module.exports = upload;
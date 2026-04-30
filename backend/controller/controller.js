const App = require("../model/model");

exports.applyInternship = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newApp = new App({
      name,
      email,
      message,
      resume: req.file ? req.file.path : ""
    });

    await newApp.save();

    res.status(201).json({
      message: "Application Submitted Successfully",
      data: newApp
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


const Contact = require("../model/contact");

exports.contactController = async (req, res) => {
  try {
    const { email, message } = req.body;

    const newContact = new Contact({
      email,
      message
    });

    await newContact.save();

    res.status(201).json({
      message: "Application Submitted Successfully",
      data: newContact
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


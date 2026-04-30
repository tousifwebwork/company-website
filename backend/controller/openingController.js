const Opening = require("../model/Opening");

exports.getOpenings = async (req, res) => {
  try {
    const openings = await Opening.find();
    res.status(200).json(openings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching openings" });
  }
};


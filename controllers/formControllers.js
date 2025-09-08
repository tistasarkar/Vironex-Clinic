
const Form = require('../models/formModel');

// Submit contact form
const submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const newForm = new Form({ name, email, message });
    await newForm.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: newForm,
    });
  } catch (error) {
    console.error("❌ Error in submitForm:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { submitForm };

const express = require("express");
const sheets = require("../config/googleSheets");
const transporter = require("../config/email");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      college,
      department,
      year,
      category,
      reason,
    } = req.body;

    
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[
          name,
          email,
          phone,
          college,
          department,
          year,
          category,
          reason,
        ]],
      },
    });

    
    res.json({
      success: true,
      message: "Registration Successful!",
    });

    transporter
      .sendMail({
        from: `"ATS Annual Talent Search" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "ATS Annual Talent Search Registration Confirmation",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #f8f8ff; border-radius: 10px;">
            <h2 style="color:#6C3BFF;">🎭 ATS Annual Talent Search</h2>

            <p>Hello <strong>${name}</strong>,</p>

            <p>
              Thank you for registering for the
              <strong>ATS Annual Talent Search</strong>.
            </p>

            <table style="border-collapse: collapse; width: 100%;">
              <tr>
                <td><strong>Category</strong></td>
                <td>${category}</td>
              </tr>
              <tr>
                <td><strong>College</strong></td>
                <td>${college}</td>
              </tr>
              <tr>
                <td><strong>Department</strong></td>
                <td>${department}</td>
              </tr>
              <tr>
                <td><strong>Year</strong></td>
                <td>${year}</td>
              </tr>
            </table>

            <hr>

            <h3>📍 Event Details</h3>

            <p>
              <strong>Venue:</strong> Mithibai College Auditorium<br>
              <strong>Date:</strong> 15 August 2026<br>
              <strong>Reporting Time:</strong> 9:30 AM
            </p>

            <p>We look forward to seeing you at the event!</p>

            <br>

            <p><strong>ATS Organizing Team</strong></p>
          </div>
        `,
      })
      .then(() => {
        console.log("Confirmation email sent.");
      })
      .catch((err) => {
        console.error(" Email Error:", err.message);
      });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
import Employee from "../models/Employee.js";
import bcrypt from "bcrypt";
import { sendOnboardingEmail } from '../utils/sendEmail.js'; // adjust path if needed

export const onboardUser = async (req, res) => {
  try {
    const { name, email, phone, department, jobTitle, role } = req.body;

    // Auto-generate credentials
    const employeeID = "EMP" + Math.floor(1000 + Math.random() * 9000);
    const userName = email.split("@")[0];
    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10); // ✅ hash it here

    // Create employee object
    const newEmployee = new Employee({
      employeeID,
      name,
      deviceID: "N/A",
      doc: "N/A",
      vehicleType: "N/A",
      vehicleID: "N/A",
      contactInfo: [
        {
          contactEmail: email,
          contactPhone: phone
        }
      ],
      emergencyInfo: [
        {
          contactEmail: "emergency@example.com",
          emergencyPhone: "000-000-0000"
        }
      ],
      address: "N/A",
      department,
      jobTitle,
      roleType: role,
      userName,
      password: hashedPassword // ✅ store hashed password
    });

    // Save to DB
    await newEmployee.save();
  
// send onboarding email
await sendOnboardingEmail(email, userName, tempPassword);


    //  Log for debugging
    console.log("✅ Employee onboarded:");
    console.log({
      name,
      userName,
      employeeID,
      tempPassword // Show plaintext temp password for testing
    });

    // Respond with employee (without temp password)
    res.status(201).json({
      message: "Employee onboarded",
      employee: newEmployee
    });

  } catch (err) {
    console.error("❌ Onboarding failed:", err);
    res.status(500).json({ error: "Onboarding failed" });
  }
};
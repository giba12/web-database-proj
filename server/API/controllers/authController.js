//sign in/sign up/etc
//logic behind routes

import Employee from "../models/Employee.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // 1. Find employee by userName
    const employee = await Employee.findOne({ userName });
    if (!employee) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("🔎 DB record:", employee);
    console.log("🔐 Entered password:", password);
    
    // 2. Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 3. Return success response (you can add token later)
    res.status(200).json({
      message: "Login successful",
      user: {
        name: employee.name,
        userName: employee.userName,
        role: employee.roleType,
        employeeID: employee.employeeID
      }
    });

  } catch (err) {
    console.error("Login failed:", err);
    res.status(500).json({ error: "Login failed" });
  }
};

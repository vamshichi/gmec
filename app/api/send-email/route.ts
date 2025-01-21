import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { companyName, city, contactPerson, designation, email, phone, industryCategories } = await req.json();

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: "chvamshi03@gmail.com", // Replace with your email
        pass: "mbhw gdbn rruy inyv", // Replace with your email password
      },
    });

    // Compose the email
    const mailOptions = {
      from: "chvamshi03@gmail.com",
      to: "info@gmecexhibitions.in", // Replace with the recipient email
      subject: "New Exhibitor Registration",
      text: `You have a new exhibitor registration:\n
      Company Name: ${companyName}\n
      City: ${city}\n
      Contact Person: ${contactPerson}\n
      Designation: ${designation}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Industry Categories: ${industryCategories.join(", ")}\n`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
  }
}

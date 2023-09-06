import { useEffect } from "react";
// import { BasicDetailsContext } from "../Context/BasicDetails";
import "./Template.css";

export default function TemplateSection() {
  useEffect(() => {
    const canvas = document.getElementById("resumeCanvas");
    const ctx = canvas.getContext("2d");

    // Enable antialiasing
    window.devicePixelRatio = 2; // Adjust as needed
    ctx.imageSmoothingEnabled = true;

    // Set font properties
    ctx.font = "500 25px Poppins";
    ctx.fillStyle = "#000000";

    // Name element
    const name = "Lavan Metta";
    const textWidth = ctx.measureText(name).width;
    const nameCenterX = canvas.width / 2 - textWidth / 2;
    const nameCenterY = 50;
    ctx.fillText(name, nameCenterX, nameCenterY);

    // Email
    const email = "example@email.com";
    const phone = "+1234567890";
    const country = "Example";
    const city = " Example City";

    ctx.font = "400 16px Poppins"; // Adjust font style and size
    const contactLine = `${email}  ${phone}  ${country}  ${city}`;
    ctx.fillText(contactLine, 50, 100);

    // Education Heading
    ctx.font = "500 20px Poppins"; // Adjust font style and size
    ctx.fillText("Education", 50, 150);

    // Education Details
    const educationDetails = [
      "College 1",
      "Year: 2020",
      "Branch: Computer Science",
      "City: College City 1",
      "",
      "College 2",
      "Year: 2022",
      "Branch: Electrical Engineering",
      "City: College City 2",
    ];

    ctx.font = "400 16px Poppins"; // Adjust font style and size
    const startY = 180; // Starting Y-coordinate for education details
    const lineHeight = 20; // Line height for details

    educationDetails.forEach((item, index) => {
      ctx.fillText(item, 50, startY + index * lineHeight);
    });
  }, []);

  return (
    <div className="template-container">
      <div>
        <h1>Preview Your Resume</h1>
        <button>Print</button>
        <div className="canv">
          <canvas id="resumeCanvas" width="600" height="600"></canvas>
        </div>
      </div>
    </div>
  );
}

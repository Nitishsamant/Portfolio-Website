// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (sectionTop < trigger) {
      section.classList.add("visible");
    }
  });
});

// Typing effect for hero text (optional enhancement)
let i = 0;
let text = "B.Tech CSE Student | Web Developer | Tech Enthusiast";
let speed = 50;

function typeWriter() {
  const p = document.querySelector(".hero p");
  if (i < text.length) {
    p.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Work.samant@gmail.com",
      pass: "YOUR_APP_PASSWORD"
    }
  });

  await transporter.sendMail({
    from: email,
    to: "Work.samant@gmail.com",
    subject: "New Contact Form Message",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  });

  res.send("Message sent!");
});

app.listen(3000);
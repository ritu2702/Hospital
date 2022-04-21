import React from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8fndzzs",
        "template_04e9iy5",
        e.target,
        "XWovAVfjrqf7bG05A"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="body-contact">
      <div class="contact-section">
        <div class="contact-info">
          <div>
            <i class="fa-solid fa-location-dot"></i>Address, City, Country
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>contact@gmail.com
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>000 000 090
          </div>
          <div>
            <i class="fa-solid fa-clock">Mon - Fri 8:00 am to 11:00 pm</i>
          </div>
        </div>
        <div class="contact-form">
          <h2>Contact us</h2>
          <form class="contact" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              class="text-box"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="myemail"
              class="text-box"
              placeholder="Your Email"
              required
            />
            <textarea
              class="text-box"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <input
              type="submit"
              name="submit"
              id="submit"
              class="send-btn"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

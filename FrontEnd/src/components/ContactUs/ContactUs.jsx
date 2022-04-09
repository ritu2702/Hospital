import React from "react";
import "./ContactUs.css";

export const ContactUs = () => {
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
          <form class="contact" action="" method="post">
            <input
              type="text"
              name="name"
              class="text-box"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
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

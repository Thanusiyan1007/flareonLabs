import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import shape1 from "../assets/shape.svg";
import { FiPhone, FiMail } from "react-icons/fi"; // Added icons

function Lettalk() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setErrorMessage("All fields are required.");
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_ncbgyv3",
        "template_e6f5gpp",
        "_-xsoFHiGU6XgC05X",
        templateParams
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setErrorMessage("");
        },
        () => {
          setErrorMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="relative bg-white dark:bg-transparent py-20 px-4 md:px-12" id="contact">
      {/* Decorative Shapes */}
            <div className="absolute top-0 left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-y-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
              <img src={shape1} alt="Top Shape" className="w-full h-auto" />
            </div>
            <div className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-x-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
              <img src={shape1} alt="Bottom Shape" className="w-full h-auto" />
            </div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full gap-4 order-2 md:order-1">
          {/* Map */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-yellow-300 dark:border-yellow-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.76686551929222!2d79.92243061719608!3d9.743194461245249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1746416689234!5m2!1sen!2slk"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>

          {/* Footer Info */}
          <div className="bg-white dark:bg-[#1a1a1a] border border-dashed border-yellow-300 dark:border-yellow-700 rounded-2xl p-4 text-center shadow-lg mt-4 md:mt-0">
            <p className="text-base font-semibold text-yellow-600 dark:text-yellow-400">
              Flareon Labs
            </p>
            <p className="text-sm mt-1 text-gray-700 dark:text-gray-300 flex justify-center items-center gap-2">
              <FiPhone className="text-yellow-500" /> +94 7604370540
            </p>
            <p className="text-sm mt-1 text-gray-700 dark:text-gray-300 flex justify-center items-center gap-2">
              <FiMail className="text-yellow-500" />
              <a
                href="mailto:flareonlabs@gmail.com"
                className="hover:underline text-blue-700 dark:text-blue-400"
              >
                flareonlabs@gmail.com
              </a>
            </p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Flareon Labs. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-xl border border-dashed border-yellow-300 dark:border-yellow-700 order-1 md:order-2">
          {isSubmitted && (
            <div className="text-green-500 text-base font-semibold mb-4">
              Your message has been sent successfully!
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-base font-semibold mb-4">
              {errorMessage}
            </div>
          )}

          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600 dark:text-yellow-400">
            Let's Talk  
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
            We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
            </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-yellow-300 dark:border-yellow-700 rounded-lg dark:bg-[#121212] dark:text-white bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-yellow-300 dark:border-yellow-700 rounded-lg dark:bg-[#121212] dark:text-white bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-yellow-300 dark:border-yellow-700 rounded-lg dark:bg-[#121212] dark:text-white bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Lettalk;

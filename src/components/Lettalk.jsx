import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import shape1 from "../assets/shape.svg";
import { FiPhone, FiMail } from "react-icons/fi";
import { Helmet } from "react-helmet-async"; // ✅ SEO

function Lettalk() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setErrorMessage("All fields are required.");
      return;
    }

    const templateParams = { name, email, message };

    emailjs
      .send("service_ncbgyv3", "template_e6f5gpp", "_-xsoFHiGU6XgC05X", templateParams)
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
    <section
      id="contact"
      className="relative py-20 px-4 md:px-12 bg-gradient-to-b 
                 from-yellow-50 to-white dark:from-zinc-900 dark:to-zinc-950 overflow-hidden"
    >
      

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-[180px] md:w-[280px] lg:w-[380px] 
                      transform scale-y-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Top Shape" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-0 right-0 w-[180px] md:w-[280px] lg:w-[380px] 
                      transform scale-x-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Bottom Shape" className="w-full h-auto" />
      </div>

      {/* Contact Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Left Column - Map + Info */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          
          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden 
                          bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                          border border-yellow-400/40 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d22348.359848522683!2d79.92968254658557!3d9.73696973067214!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1758727940578!5m2!1sen!2slk"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>

          {/* Contact Info Card */}
          <div className="rounded-2xl p-6 text-center shadow-lg 
                          bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                          border border-yellow-400/40">
            <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">
              Flareon Labs
            </p>
            <p className="text-sm mt-2 text-gray-800 dark:text-gray-300 flex items-center justify-center gap-2">
              <FiPhone className="text-yellow-500" /> +94 7604370540
            </p>
            <p className="text-sm mt-1 text-gray-800 dark:text-gray-300 flex items-center justify-center gap-2">
              <FiMail className="text-yellow-500" />
              <a
                href="mailto:flareonlabs@gmail.com"
                className="hover:underline text-blue-700 dark:text-blue-400"
              >
                flareonlabs@gmail.com
              </a>
            </p>
            <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Flareon Labs. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="order-1 md:order-2 rounded-2xl shadow-xl p-6 
                        bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                        border border-yellow-400/40">
          {isSubmitted && (
            <div className="text-green-600 font-semibold mb-4">
              ✅ Your message has been sent successfully!
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 font-semibold mb-4">{errorMessage}</div>
          )}

          <h2 className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400 text-center mb-4">
            Let’s Talk
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            We would love to hear from you! Fill out the form below and we’ll reply as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-yellow-300 dark:border-yellow-600 
                         bg-white/70 dark:bg-zinc-800 text-black dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-yellow-300 dark:border-yellow-600 
                         bg-white/70 dark:bg-zinc-800 text-black dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-yellow-300 dark:border-yellow-600 
                         bg-white/70 dark:bg-zinc-800 text-black dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-yellow-600 hover:bg-yellow-700 transition duration-300"
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